import { decompress } from "@/app/calculadora-clt-vs-pj/utils";
import { SalaryCalculatorClient } from "./calculator";
import { FormData } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function SalaryCalculator({ searchParams }: any) {
  let initialData: FormData | undefined;

  if (searchParams.d) {
    try {
      initialData = decompress(searchParams.d as string);
    } catch (e) {
      console.error("Failed to parse form data from URL", e);
    }
  }

  return <SalaryCalculatorClient initialData={initialData} />;
}
