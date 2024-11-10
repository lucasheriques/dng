export type FormData = {
  grossSalary: string;
  pjGrossSalary: string;
  mealAllowance: string;
  transportAllowance: string;
  healthInsurance: string;
  otherBenefits: string;
  includeFGTS: boolean;
  accountingFee: string;
  inssContribution: string;
  taxRate: string;
  otherExpenses: string;
};

export type CLTDeductions = {
  inss: number;
  ir: number;
  transportDeduction: number;
};

export type CLTBenefits = {
  mealAllowance: number;
  transportAllowance: number;
  transportDeduction: number;
  healthInsurance: number;
  otherBenefits: number;
  fgts: number;
  thirteenthSalary: number;
  vacationBonus: number;
};

export type CLTResults = {
  netSalary: number;
  deductions: CLTDeductions;
  benefits: number;
  detailedBenefits: CLTBenefits;
  total: number;
};

export type PJDeductions = {
  taxes: number;
  accountingFee: number;
  inssContribution: number;
  otherExpenses: number;
  taxRate: number;
};

export type PJResults = {
  netSalary: number;
  deductions: PJDeductions;
  total: number;
};

export type CalculationResults = {
  clt: CLTResults;
  pj: PJResults;
};
