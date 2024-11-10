"use client";

import { Button } from "@/components/ui/button";
import { calculateCLT, calculatePJ } from "@/lib/salary-calculations";
import { Share2 } from "lucide-react";
import { useState } from "react";
import {
  ResultsAccordion,
  TableHeader,
  TableInput,
  TableRow,
} from "./components";
import { CalculationResults, FormData } from "./types";
import { compress } from "./utils";

interface SalaryCalculatorProps {
  initialData?: FormData;
}

export function SalaryCalculatorClient({ initialData }: SalaryCalculatorProps) {
  const [formData, setFormData] = useState<FormData>(
    initialData ?? {
      grossSalary: "",
      pjGrossSalary: "",
      mealAllowance: "",
      transportAllowance: "",
      healthInsurance: "",
      otherBenefits: "",
      includeFGTS: true,
      accountingFee: "189",
      inssContribution: String(1412 * 0.11),
      taxRate: "10",
      otherExpenses: "",
    }
  );

  const defaultFormData: FormData = {
    grossSalary: "",
    pjGrossSalary: "",
    mealAllowance: "",
    transportAllowance: "",
    healthInsurance: "",
    otherBenefits: "",
    includeFGTS: true,
    accountingFee: "189",
    inssContribution: String(1412 * 0.11),
    taxRate: "10",
    otherExpenses: "",
  };

  const [results, setResults] = useState<CalculationResults | null>(
    initialData ? calculateResults(initialData) : null
  );
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const [shareButtonText, setShareButtonText] = useState("Compartilhar");

  const handleInputChange = (field: string, value: string) => {
    const newFormData = {
      ...formData,
      [field]: value,
    };

    setFormData(newFormData);
    setResults(calculateResults(newFormData));
  };

  const handleShare = async () => {
    const hash = compress(formData);

    const url = new URL(window.location.href);
    url.searchParams.set("d", hash);

    window.history.replaceState({}, "", url.toString());

    await navigator.clipboard.writeText(url.toString());

    setShareButtonText("URL copiada!");
    setTimeout(() => {
      setShareButtonText("Compartilhar");
    }, 2000);
  };

  const handleClear = () => {
    setFormData(defaultFormData);
    setResults(null);
    // Remove query param and update URL
    const url = new URL(window.location.href);
    url.searchParams.delete("d");
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Calculadora CLT vs. PJ</h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={handleClear}
            >
              Limpar valores
            </Button>
            <Button
              variant="default"
              size="sm"
              className="gap-2"
              onClick={handleShare}
            >
              <Share2 className="w-4 h-4" />
              {shareButtonText}
            </Button>
          </div>
        </div>

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
              <ResultsAccordion
                results={results}
                type="clt"
                isExpanded={isDetailsExpanded}
                onToggle={() => setIsDetailsExpanded(!isDetailsExpanded)}
              />
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
              <ResultsAccordion
                results={results}
                type="pj"
                isExpanded={isDetailsExpanded}
                onToggle={() => setIsDetailsExpanded(!isDetailsExpanded)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateResults(formData: FormData): CalculationResults | null {
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
