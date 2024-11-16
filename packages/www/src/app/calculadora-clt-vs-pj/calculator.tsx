"use client";

import { ComparisonCard } from "@/app/calculadora-clt-vs-pj/components/comparison-card";
import { Button } from "@/components/ui/button";
import { calculateCLT, calculatePJ } from "@/lib/salary-calculations";
import { Share2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  ResultsAccordion,
  TableHeader,
  TableInput,
  TableRow,
} from "./components";
import { CalculationResults, FormData } from "./types";
import { compress } from "./utils";

const RecentComparisons = dynamic(
  () =>
    import("./components/recent-comparisons").then(
      (mod) => mod.RecentComparisons
    ),
  { ssr: false }
);

interface SalaryCalculatorProps {
  initialData?: FormData;
  defaultInterestRate: number;
}

interface CalculatorHistory {
  hashes: string[];
}

export function SalaryCalculatorClient({
  initialData,
  defaultInterestRate,
}: SalaryCalculatorProps) {
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
  const [history, setHistory] = useLocalStorage<CalculatorHistory>(
    "calculator-history",
    {
      hashes: [],
    }
  );

  const handleInputChange = (field: keyof FormData, value: string) => {
    const newFormData = {
      ...formData,
      [field]: value,
    };

    setFormData(newFormData);
    setResults(calculateResults(newFormData));
  };

  const handleShare = async () => {
    const hash = compress(formData);

    const newHashes = [hash, ...history.hashes.filter((h) => h !== hash)].slice(
      0,
      3
    );
    setHistory({ hashes: newHashes });

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

  const handleLoadHistory = (data: FormData) => {
    setFormData(data);
    setResults(calculateResults(data));
  };

  return (
    <>
      <div className="max-w-7xl mx-auto grid gap-4">
        <div className="flex md:items-center justify-between md:flex-row flex-col gap-2 md:gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Calculadora CLT vs. PJ</h1>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
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

        <RecentComparisons
          hashes={history.hashes}
          onLoadHistory={handleLoadHistory}
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900/50">
            <TableHeader>CLT</TableHeader>
            <TableHeader>Salário Base</TableHeader>
            <TableRow label="Salário Bruto Mensal">
              <TableInput
                value={formData.grossSalary}
                onChange={(v) => handleInputChange("grossSalary", v)}
                required
                prefix="R$"
              />
            </TableRow>

            <TableHeader>Benefícios</TableHeader>
            <TableRow label="Vale Refeição/Alimentação">
              <TableInput
                value={formData.mealAllowance}
                onChange={(v) => handleInputChange("mealAllowance", v)}
                prefix="R$"
              />
            </TableRow>
            <TableRow label="Vale-Transporte">
              <TableInput
                value={formData.transportAllowance}
                onChange={(v) => handleInputChange("transportAllowance", v)}
                prefix="R$"
              />
            </TableRow>
            <TableRow label="Plano de Saúde">
              <TableInput
                value={formData.healthInsurance}
                onChange={(v) => handleInputChange("healthInsurance", v)}
                prefix="R$"
              />
            </TableRow>
            <TableRow
              label="Outros Benefícios"
              tooltipContent="Qualquer benefício não-taxável que você queira adicionar."
            >
              <TableInput
                value={formData.otherBenefits}
                onChange={(v) => handleInputChange("otherBenefits", v)}
                prefix="R$"
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
                placeholder={
                  formData.grossSalary === ""
                    ? "Se diferente do CLT"
                    : formData.grossSalary
                }
                prefix="R$"
              />
            </TableRow>

            <TableHeader>Despesas</TableHeader>
            <TableRow
              label="Honorários Contador"
              tooltipContent="Baseado no valor da mensalidade da Contabilizei."
            >
              <TableInput
                value={formData.accountingFee}
                onChange={(v) => handleInputChange("accountingFee", v)}
                prefix="R$"
              />
            </TableRow>
            <TableRow
              label="Contribuição INSS"
              tooltipContent="O valor padrão é 11% do salário mínimo."
            >
              <TableInput
                value={formData.inssContribution}
                onChange={(v) => handleInputChange("inssContribution", v)}
                prefix="R$"
              />
            </TableRow>
            <TableRow
              label="Alíquota de Impostos (%)"
              tooltipContent={
                "PJ tem muitos cenários que não são cobertos aqui. Simplifique de forma que você mesmo pode colocar o que achar certo."
              }
            >
              <TableInput
                value={formData.taxRate}
                onChange={(v) => handleInputChange("taxRate", v)}
                prefix="%"
              />
            </TableRow>
            <TableRow label="Outras Despesas">
              <TableInput
                value={formData.otherExpenses}
                onChange={(v) => handleInputChange("otherExpenses", v)}
                prefix="R$"
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

        {results && (
          <ComparisonCard
            defaultInterestRate={defaultInterestRate}
            results={results}
          />
        )}
      </div>
    </>
  );
}

export function calculateResults(
  formData: FormData
): CalculationResults | null {
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
