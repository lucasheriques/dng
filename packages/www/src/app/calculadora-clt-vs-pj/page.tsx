import { decompress } from "@/app/calculadora-clt-vs-pj/utils";
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
      console.error("Failed to parse form data from URL", e);
    }
  }

  return <SalaryCalculatorClient initialData={initialData} />;
}
