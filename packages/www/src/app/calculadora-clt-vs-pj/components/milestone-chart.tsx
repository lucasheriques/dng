"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { formatCurrency } from "@/lib/utils";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TableHeader } from "../components";

interface Milestone {
  name: string;
  value: number;
}

interface MilestoneChartProps {
  cltMonthlyTotal: number;
  pjMonthlyTotal: number;
  investmentRate: number;
  interestRate: number;
  milestones: Milestone[];
}

export function MilestoneChart({
  cltMonthlyTotal,
  pjMonthlyTotal,
  investmentRate,
  interestRate,
  milestones,
}: MilestoneChartProps) {
  const YEARS = 30;
  const monthlyRate = Math.pow(1 + interestRate, 1 / 12) - 1;

  const cltMonthlyInvestment = (cltMonthlyTotal * investmentRate) / 100;
  const pjMonthlyInvestment = (pjMonthlyTotal * investmentRate) / 100;

  const data = Array.from({ length: YEARS * 12 }, (_, month) => {
    const cltPatrimony =
      cltMonthlyInvestment *
      ((Math.pow(1 + monthlyRate, month + 1) - 1) / monthlyRate);
    const pjPatrimony =
      pjMonthlyInvestment *
      ((Math.pow(1 + monthlyRate, month + 1) - 1) / monthlyRate);

    return {
      month: month + 1,
      clt: cltPatrimony,
      pj: pjPatrimony,
    };
  });

  const chartConfig: ChartConfig = {
    clt: {
      label: "CLT",
      color: "#3b82f6",
    },
    pj: {
      label: "PJ",
      color: "#ec4899",
    },
  };

  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `R$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `R$${(value / 1000).toFixed(0)}k`;
    }
    return `R$${value.toFixed(0)}`;
  };

  const formatTime = (months: number) => {
    if (months === -1) return "Mais de 30 anos";
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    if (years === 0) return `${remainingMonths}m`;
    if (remainingMonths === 0) return `${years}a`;
    return `${years}a ${remainingMonths}m`;
  };

  return (
    <div className="space-y-8">
      <div className="w-full h-[400px]">
        <h3 className="text-lg font-semibold mb-4">
          Projeção de Investimentos
        </h3>
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 70 }}
          >
            <defs>
              <linearGradient id="cltGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="pjGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ec4899" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis
              dataKey="month"
              tickFormatter={(month) => `${Math.floor(month / 12)}a`}
              interval={12}
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis tickFormatter={formatYAxis} stroke="#64748b" fontSize={12} />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={(month) =>
                `${Math.floor(month / 12)} anos e ${month % 12} meses`
              }
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="clt"
              name="CLT"
              stroke="#3b82f6"
              fill="url(#cltGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="pj"
              name="PJ"
              stroke="#ec4899"
              fill="url(#pjGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </div>

      <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900/50">
        <TableHeader>Marcos Financeiros e Tempo de Investimento</TableHeader>
        <div className="grid grid-cols-4 border-b border-slate-700">
          <div className="p-3 border-r border-slate-700 font-medium">
            <span className="text-sm">Objetivo</span>
          </div>
          <div className="p-3 border-r border-slate-700 text-right font-medium">
            <span className="text-sm">Valor</span>
          </div>
          <div className="p-3 border-r border-slate-700 text-right font-medium">
            <span className="text-sm text-blue-400">Tempo CLT</span>
          </div>
          <div className="p-3 text-right font-medium">
            <span className="text-sm text-pink-400">Tempo PJ</span>
          </div>
        </div>
        {milestones.map((milestone) => {
          const cltMonthsToReach = data.findIndex(
            (d) => d.clt >= milestone.value
          );
          const pjMonthsToReach = data.findIndex(
            (d) => d.pj >= milestone.value
          );

          return (
            <div
              key={milestone.name}
              className="grid grid-cols-4 border-b border-slate-700 last:border-b-0"
            >
              <div className="p-3 border-r border-slate-700">
                <span className="text-sm">{milestone.name}</span>
              </div>
              <div className="p-3 border-r border-slate-700 text-right">
                <span className="text-sm text-slate-400">
                  {formatCurrency(milestone.value)}
                </span>
              </div>
              <div className="p-3 border-r border-slate-700 text-right">
                <span className="text-sm text-blue-400">
                  {formatTime(cltMonthsToReach)}
                </span>
              </div>
              <div className="p-3 text-right">
                <span className="text-sm text-pink-400">
                  {formatTime(pjMonthsToReach)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}