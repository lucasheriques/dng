import { MilestoneChart } from "@/app/calculadora-clt-vs-pj/components/milestone-chart";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";
import { CalculationResults } from "../types";
import { InvestmentConfig } from "./investment-config";

const MILESTONES = [
  { name: "iPhone 16 Pro Max", value: 12499 },
  { name: "Toyota Corolla 0km", value: 156090 },
  { name: "Apartamento em SP", value: 800000 },
  { name: "Aposentadoria de 15k/mês (regra dos 4%)", value: 4500000 },
];

interface ComparisonCardProps {
  results: CalculationResults;
  defaultInterestRate: number;
}

export function ComparisonCard({
  results,
  defaultInterestRate,
}: ComparisonCardProps) {
  const [investmentRate, setInvestmentRate] = useState("20");
  const [interestRate, setInterestRate] = useState(String(defaultInterestRate));

  const monthlyDifference = results.pj.total - results.clt.total;
  const yearlyDifference = monthlyDifference * 12;
  const betterOption = monthlyDifference > 0 ? "PJ" : "CLT";

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Comparação</h2>
      <div className="space-y-4">
        <div>
          <p className="text-lg">
            Regime mais vantajoso:{" "}
            <span className="font-bold">{betterOption}</span>
          </p>
          <p className="text-sm text-slate-400">
            Diferença mensal: {formatCurrency(Math.abs(monthlyDifference))}
          </p>
          <p className="text-sm text-slate-400">
            Diferença anual: {formatCurrency(Math.abs(yearlyDifference))}
          </p>
        </div>

        <InvestmentConfig
          cltMonthlyTotal={results.clt.total}
          pjMonthlyTotal={results.pj.total}
          investmentRate={investmentRate}
          interestRate={interestRate}
          onInvestmentRateChange={setInvestmentRate}
          onInterestRateChange={setInterestRate}
        />

        <MilestoneChart
          cltMonthlyTotal={results.clt.total}
          pjMonthlyTotal={results.pj.total}
          investmentRate={Number(investmentRate)}
          interestRate={Number(interestRate) / 100}
          milestones={MILESTONES}
        />
      </div>
    </div>
  );
}
