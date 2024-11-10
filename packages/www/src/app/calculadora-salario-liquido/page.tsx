"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { calculateCLT, calculatePJ } from "@/lib/salary-calculations";
import { useState } from "react";

type FormData = {
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

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

function TableHeader({ children }: { children: React.ReactNode }) {
  return <div className="bg-slate-800 px-3 py-2 font-semibold">{children}</div>;
}

function TableRow({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 items-stretch border-b border-slate-700 ${className}`}
    >
      <div className="px-3 py-2 bg-slate-800/50 border-r border-slate-700 text-sm text-slate-300">
        {label}
      </div>
      <div>{children}</div>
    </div>
  );
}

function TableInput({
  value,
  onChange,
  required = false,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <Input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      className="h-full border-0 rounded-none bg-transparent text-right focus:ring-1 focus:ring-slate-400"
    />
  );
}

function DetailRow({
  label,
  value,
  type = "neutral",
}: {
  label: string;
  value: string;
  type?: "addition" | "deduction" | "neutral";
}) {
  const valueClassName =
    type === "addition"
      ? "text-green-400"
      : type === "deduction"
        ? "text-red-400"
        : "";

  return (
    <TableRow label={label}>
      <div className={`px-3 py-2 text-right ${valueClassName}`}>
        {type === "addition" ? "+" : type === "deduction" ? "-" : ""}
        {value}
      </div>
    </TableRow>
  );
}

function ResultsAccordion({
  results,
  type,
}: {
  results: any;
  type: "clt" | "pj";
}) {
  if (type === "clt") {
    return (
      <div>
        <TableHeader>Resultados</TableHeader>
        <TableRow label="Total Líquido" className="font-semibold">
          <div className="px-3 py-2 text-right">
            {formatCurrency(results.clt.total)}
          </div>
        </TableRow>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details" className="border-0">
            <div className="bg-slate-800/50">
              <AccordionTrigger className="hover:no-underline px-3 py-2 text-sm">
                Ver cálculo detalhado
              </AccordionTrigger>
            </div>
            <AccordionContent className="pb-0">
              <DetailRow
                label="Salário Bruto"
                value={formatCurrency(
                  results.clt.netSalary +
                    results.clt.deductions.inss +
                    results.clt.deductions.ir
                )}
                type="addition"
              />
              <DetailRow
                label="INSS"
                value={formatCurrency(results.clt.deductions.inss)}
                type="deduction"
              />
              <DetailRow
                label="IRRF"
                value={formatCurrency(results.clt.deductions.ir)}
                type="deduction"
              />
              <DetailRow
                label="Vale-Transporte"
                value={formatCurrency(
                  results.clt.detailedBenefits.transportAllowance
                )}
                type="addition"
              />
              <DetailRow
                label="Desconto VT (6%)"
                value={formatCurrency(
                  results.clt.detailedBenefits.transportDeduction
                )}
                type="deduction"
              />
              <DetailRow
                label="Salário Líquido Base"
                value={formatCurrency(results.clt.netSalary)}
                type="neutral"
              />
              <TableHeader>Benefícios CLT</TableHeader>
              {results.clt.detailedBenefits.mealAllowance > 0 && (
                <DetailRow
                  label="Vale Refeição/Alimentação"
                  value={formatCurrency(
                    results.clt.detailedBenefits.mealAllowance
                  )}
                  type="addition"
                />
              )}
              {results.clt.detailedBenefits.healthInsurance > 0 && (
                <DetailRow
                  label="Plano de Saúde"
                  value={formatCurrency(
                    results.clt.detailedBenefits.healthInsurance
                  )}
                  type="addition"
                />
              )}
              {results.clt.detailedBenefits.otherBenefits > 0 && (
                <DetailRow
                  label="Outros Benefícios"
                  value={formatCurrency(
                    results.clt.detailedBenefits.otherBenefits
                  )}
                  type="addition"
                />
              )}
              <DetailRow
                label="FGTS Mensal"
                value={formatCurrency(results.clt.detailedBenefits.fgts)}
                type="addition"
              />
              <DetailRow
                label="13º Salário (proporcional)"
                value={formatCurrency(
                  results.clt.detailedBenefits.thirteenthSalary
                )}
                type="addition"
              />
              <DetailRow
                label="Férias (proporcional)"
                value={formatCurrency(
                  results.clt.detailedBenefits.vacationBonus * 0.75
                )}
                type="addition"
              />
              <DetailRow
                label="Adicional de Férias (1/3)"
                value={formatCurrency(
                  results.clt.detailedBenefits.vacationBonus * 0.25
                )}
                type="addition"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }

  return (
    <div>
      <TableHeader>Resultados</TableHeader>
      <TableRow label="Total Líquido" className="font-semibold">
        <div className="px-3 py-2 text-right">
          {formatCurrency(results.pj.total)}
        </div>
      </TableRow>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details" className="border-0">
          <div className="bg-slate-800/50">
            <AccordionTrigger className="hover:no-underline px-3 py-2 text-sm">
              Ver cálculo detalhado
            </AccordionTrigger>
          </div>
          <AccordionContent className="pb-0">
            <DetailRow
              label="Faturamento Bruto"
              value={formatCurrency(
                results.pj.netSalary +
                  results.pj.deductions.taxes +
                  results.pj.deductions.accountingFee +
                  results.pj.deductions.inssContribution +
                  results.pj.deductions.otherExpenses
              )}
              type="addition"
            />
            <DetailRow
              label="Impostos"
              value={formatCurrency(results.pj.deductions.taxes)}
              type="deduction"
            />
            <DetailRow
              label="Honorários Contador"
              value={formatCurrency(results.pj.deductions.accountingFee)}
              type="deduction"
            />
            <DetailRow
              label="INSS Pró-Labore"
              value={formatCurrency(results.pj.deductions.inssContribution)}
              type="deduction"
            />
            {results.pj.deductions.otherExpenses > 0 && (
              <DetailRow
                label="Outras Despesas"
                value={formatCurrency(results.pj.deductions.otherExpenses)}
                type="deduction"
              />
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function calculateResults(formData: FormData) {
  if (!formData.grossSalary) {
    return null;
  }

  const cltInput = {
    grossSalary: Number(formData.grossSalary),
    mealAllowance: Number(formData.mealAllowance) || undefined,
    transportAllowance: Number(formData.transportAllowance) || undefined,
    healthInsurance: Number(formData.healthInsurance) || undefined,
    otherBenefits: Number(formData.otherBenefits) || undefined,
    includeFGTS: formData.includeFGTS,
  };

  const pjInput = {
    grossSalary: Number(formData.pjGrossSalary || formData.grossSalary),
    accountingFee: Number(formData.accountingFee),
    inssContribution: Number(formData.inssContribution),
    taxRate: Number(formData.taxRate) / 100,
    otherExpenses: Number(formData.otherExpenses) || 0,
  };

  const cltResults = calculateCLT(cltInput);
  const pjResults = calculatePJ(pjInput);

  return { clt: cltResults, pj: pjResults };
}

export default function SalaryCalculator() {
  const [formData, setFormData] = useState<FormData>({
    grossSalary: "",
    pjGrossSalary: "",
    // CLT benefits
    mealAllowance: "",
    transportAllowance: "",
    healthInsurance: "",
    otherBenefits: "",
    includeFGTS: true,
    // PJ expenses
    accountingFee: "189",
    inssContribution: String(1412 * 0.11),
    taxRate: "10",
    otherExpenses: "",
  });

  const [results, setResults] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    const newFormData = {
      ...formData,
      [field]: value,
    };

    setFormData(newFormData);
    setResults(calculateResults(newFormData));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Calculadora CLT vs. PJ</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900/50">
            <TableHeader>CLT</TableHeader>
            <TableHeader>Salário Base</TableHeader>
            <TableRow label="Salário Bruto Mensal">
              <TableInput
                value={formData.grossSalary}
                onChange={(v) => handleInputChange("grossSalary", v)}
                required
              />
            </TableRow>

            <TableHeader>Benefícios</TableHeader>
            <TableRow label="Vale Refeição/Alimentação">
              <TableInput
                value={formData.mealAllowance}
                onChange={(v) => handleInputChange("mealAllowance", v)}
              />
            </TableRow>
            <TableRow label="Vale-Transporte">
              <TableInput
                value={formData.transportAllowance}
                onChange={(v) => handleInputChange("transportAllowance", v)}
              />
            </TableRow>
            <TableRow label="Plano de Saúde">
              <TableInput
                value={formData.healthInsurance}
                onChange={(v) => handleInputChange("healthInsurance", v)}
              />
            </TableRow>
            <TableRow label="Outros Benefícios">
              <TableInput
                value={formData.otherBenefits}
                onChange={(v) => handleInputChange("otherBenefits", v)}
              />
            </TableRow>

            {results && (
              <>
                <ResultsAccordion results={results} type="clt" />
              </>
            )}
          </div>

          <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900/50">
            <TableHeader>PJ</TableHeader>
            <TableHeader>Salário Base</TableHeader>
            <TableRow label="Salário Bruto Mensal">
              <TableInput
                value={formData.pjGrossSalary}
                onChange={(v) => handleInputChange("pjGrossSalary", v)}
                placeholder="Se diferente do CLT"
              />
            </TableRow>

            <TableHeader>Despesas</TableHeader>
            <TableRow label="Honorários Contador">
              <TableInput
                value={formData.accountingFee}
                onChange={(v) => handleInputChange("accountingFee", v)}
              />
            </TableRow>
            <TableRow label="Contribuição INSS">
              <TableInput
                value={formData.inssContribution}
                onChange={(v) => handleInputChange("inssContribution", v)}
              />
            </TableRow>
            <TableRow label="Alíquota de Impostos (%)">
              <TableInput
                value={formData.taxRate}
                onChange={(v) => handleInputChange("taxRate", v)}
              />
            </TableRow>
            <TableRow label="Outras Despesas">
              <TableInput
                value={formData.otherExpenses}
                onChange={(v) => handleInputChange("otherExpenses", v)}
              />
            </TableRow>

            {results && (
              <>
                <ResultsAccordion results={results} type="pj" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
