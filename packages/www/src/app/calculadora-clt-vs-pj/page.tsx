import { decompress } from "@/app/calculadora-clt-vs-pj/utils";
import { SalaryCalculatorClient } from "./calculator";
import { FormData } from "./types";

// type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function SalaryCalculator({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  let initialData: FormData | undefined;

  const data = (await searchParams).d;

  if (data) {
    try {
      initialData = decompress(data as string);
    } catch (e) {
      console.error("Failed to parse form data from URL", e);
    }
  }

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <SalaryCalculatorClient initialData={initialData} />
    </div>
  );
}
