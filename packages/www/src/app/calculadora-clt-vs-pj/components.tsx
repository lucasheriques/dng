import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { CalculationResults } from "./types";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export function TableHeader({ children }: { children: React.ReactNode }) {
  return <div className="bg-slate-800 px-3 py-2 font-semibold">{children}</div>;
}

export function TableRow({
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

export function TableInput({
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

export function DetailRow({
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

export function ResultsAccordion({
  results,
  type,
  isExpanded,
  onToggle,
}: {
  results: CalculationResults;
  type: "clt" | "pj";
  isExpanded: boolean;
  onToggle: () => void;
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
        <Accordion
          type="single"
          value={isExpanded ? "details" : ""}
          onClick={onToggle}
          className="w-full"
        >
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
              {results.clt.detailedBenefits.transportDeduction > 0 && (
                <DetailRow
                  label="Desconto VT (6%)"
                  value={formatCurrency(
                    results.clt.detailedBenefits.transportDeduction
                  )}
                  type="deduction"
                />
              )}
              <DetailRow
                label="Salário Líquido Base"
                value={formatCurrency(results.clt.netSalary)}
                type="neutral"
              />
              <TableHeader>Benefícios CLT</TableHeader>
              {results.clt.detailedBenefits.transportAllowance > 0 && (
                <DetailRow
                  label="Vale-Transporte"
                  value={formatCurrency(
                    results.clt.detailedBenefits.transportAllowance
                  )}
                  type="addition"
                />
              )}
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
                  results.clt.detailedBenefits.vacationBonus
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
      <Accordion
        type="single"
        value={isExpanded ? "details" : ""}
        onClick={onToggle}
        className="w-full"
      >
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

export { formatCurrency };
