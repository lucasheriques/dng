import { decompress } from "@/app/calculadora-salario-liquido/utils";
import { SalaryCalculatorClient } from "./calculator";
import { FormData } from "./types";

export default async function SalaryCalculator({
  searchParams,
}: {
  searchParams: { d?: string };
}) {
  let initialData: FormData | undefined;

  if (searchParams.d) {
    try {
      initialData = decompress(searchParams.d);
    } catch (e) {
      console.error("Failed to parse form data from URL");
    }
  }

  return <SalaryCalculatorClient initialData={initialData} />;
}
