interface SalaryInput {
  grossSalary: number;
  mealAllowance?: number;
  transportAllowance?: number;
  healthInsurance?: number;
  otherBenefits?: number;
  includeFGTS?: boolean;
}

interface PJInput {
  grossSalary: number;
  accountingFee?: number;
  inssContribution?: number;
  taxRate?: number;
  otherExpenses?: number;
}

const INSS_RANGES = [
  { max: 1412.0, rate: 0.075 },
  { max: 2666.68, rate: 0.09 },
  { max: 4000.03, rate: 0.12 },
  { max: 7786.02, rate: 0.14 },
];

const IRRF_RANGES = [
  { max: 2259.2, rate: 0, deduction: 0 },
  { max: 2826.65, rate: 0.075, deduction: 169.44 },
  { max: 3751.05, rate: 0.15, deduction: 381.44 },
  { max: 4664.68, rate: 0.225, deduction: 662.77 },
  { max: Infinity, rate: 0.275, deduction: 896.0 },
];

function calculateINSS(salary: number): number {
  let inss = 0;
  let remainingSalary = salary;
  let previousMax = 0;

  for (const range of INSS_RANGES) {
    if (salary > previousMax) {
      const taxableAmount = Math.min(range.max - previousMax, remainingSalary);
      inss += taxableAmount * range.rate;
      remainingSalary -= taxableAmount;
    }
    previousMax = range.max;
  }

  return inss;
}

function calculateIRRF(baseIR: number): number {
  const irRange = IRRF_RANGES.find((range) => baseIR <= range.max);
  return irRange ? baseIR * irRange.rate - irRange.deduction : 0;
}

export function calculateCLT(input: SalaryInput) {
  const { grossSalary, includeFGTS = true } = input;

  // Calculate INSS and IR for base salary
  const baseINSS = calculateINSS(grossSalary);
  const baseIR = calculateIRRF(grossSalary - baseINSS);

  // Calculate transport deduction if applicable
  const transportDeduction = input.transportAllowance
    ? Math.min(grossSalary * 0.06, input.transportAllowance)
    : 0;

  // Calculate net base salary
  const netBaseSalary = grossSalary - baseINSS - baseIR - transportDeduction;

  // Calculate FGTS (not taxed)
  const fgts = includeFGTS ? grossSalary * 0.08 : 0;
  const fgtsThirteenth = includeFGTS ? (grossSalary / 12) * 0.08 : 0;
  const fgtsVacation = includeFGTS ? ((grossSalary * 1.33333) / 12) * 0.08 : 0;
  const totalFGTS = fgts + fgtsThirteenth + fgtsVacation;

  // Simplified 13th and vacation calculations based on net salary
  const netThirteenth = netBaseSalary / 12;
  const netVacation = (netBaseSalary * 0.33333) / 12; // Includes the 1/3 bonus

  const benefits =
    (input.mealAllowance || 0) +
    (input.transportAllowance || 0) +
    (input.healthInsurance || 0) +
    (input.otherBenefits || 0) +
    totalFGTS;

  return {
    netSalary: netBaseSalary,
    deductions: {
      inss: baseINSS,
      ir: baseIR,
      transportDeduction,
    },
    benefits,
    detailedBenefits: {
      mealAllowance: input.mealAllowance || 0,
      transportAllowance: input.transportAllowance || 0,
      transportDeduction,
      healthInsurance: input.healthInsurance || 0,
      otherBenefits: input.otherBenefits || 0,
      fgts: totalFGTS,
      thirteenthSalary: netThirteenth,
      vacationBonus: netVacation,
    },
    total: netBaseSalary + benefits + netThirteenth + netVacation,
  };
}

export function calculatePJ(input: PJInput) {
  const {
    grossSalary,
    accountingFee = 189,
    taxRate = 0.1,
    otherExpenses = 0,
  } = input;

  const MINIMUM_WAGE = 1412;
  const INSS_RATE = 0.11;

  const inssContribution = input.inssContribution ?? MINIMUM_WAGE * INSS_RATE;
  const taxes = grossSalary * taxRate;

  const netSalary =
    grossSalary - taxes - accountingFee - inssContribution - otherExpenses;

  return {
    netSalary,
    deductions: {
      taxes,
      accountingFee,
      inssContribution,
      otherExpenses,
      taxRate,
    },
    total: netSalary,
  };
}
