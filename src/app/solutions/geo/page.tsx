import { SolutionTemplate } from "@/components/sections/solution-template";
import { getDirectionContent } from "@/lib/data/product-directions";

export default function Page() {
  return <SolutionTemplate content={getDirectionContent("geo")} />;
}
