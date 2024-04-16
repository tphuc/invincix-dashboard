import { cn } from "@/lib/utils";
import Image from "next/image";
import GenderDemographic from "./GenderDemographic";
import { AttritionChart } from "./AttritionChart";
import { AllocationChart } from "./Allocation";
import AttritionReason from "./AttritionReason";
import EmployeePerfomanceAnalysis from "./EmployeePerfomanceAnalysis";
import EmployeePerfomanceAnalysisStackedBar from "./EmployeePerfomanceAnalysisStackbar";

const colors = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

export default function Page() {
  return (
    <div className="space-y-4 md:px-4">
      <p className="text-4xl font-bold pb-2 space-x-3">Human Capacity</p>

      <div className="w-full relative border-t border-slate-800 pt-6 pb-0 grid grid-cols-4 gap-4 mt-6" />

      <div className="relative grid grid-cols-12 gap-4  w-full ">
        <div className="col-span-full md:col-span-8 h-full">
          <GenderDemographic />
        </div>

        <div className="col-span-full md:col-span-4 mt-0">
          <AllocationChart />
        </div>

      </div>
      <div className="relative grid grid-cols-12 gap-4">

        <div className="col-span-12">
          {/* <EmployeePerfomanceAnalysis /> */}
          <EmployeePerfomanceAnalysisStackedBar/>
        </div>

        <div className="col-span-full md:col-span-8">
          <AttritionReason />
        </div>

        <div className="col-span-full md:col-span-4">
          <AttritionChart />
        </div>

      </div>
    </div>
  );
}
