import { Card, Metric, Title } from "@tremor/react";
import Image from "next/image";
import { EscapedDefects } from "./EscapedDefect";
import TrueTestCoverage from "./TrueTestCoverage";
import DevOpsResearchAssessment from "./DevOpsResearch&Assesment";
import MyChartComponent from "./MixChartDevOpsResearch&Assessment";
import InvestmentDistribution from "./InvestmentDistribution";
import ProofAcceleration from "./ProofAcceleration";
import InvestmentDistributonStackedBar from "./InvestmentDistributionStackedBar";
import FullProofAccelerationTable from "./FullProofAccelerationTable";
import QualityNVelocity from "./QualityNVelocity";
import QualityNVelocityProjects from "./QualityNVelocityProjects";
import TrueTestCoverageTable from "./TrueTestCoverageTable";

export default function Page() {
  return (
    <div className="pb-20 px-2 w-full space-y-4">
      <p className="text-4xl font-bold pb-2 space-x-3">
        Delivery Quality Metrices
      </p>

      <div className="w-full relative border-t border-slate-800 pt-6 pb-0 grid grid-cols-4 gap-4 mt-6" />
      <div className="grid grid-cols-1 md:grid-cols-2   gap-4">
        <QualityNVelocityProjects />
        <EscapedDefects />
      </div>
      <div className="grid w-full gap-4 grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <TrueTestCoverage />
        </div>
        <Card className="col-span-12 md:col-span-6">
          <div>
            <Title>True Test Coverage Table</Title>
          </div>
          <TrueTestCoverageTable />
        </Card>
        <Card className="col-span-12 grid grid-cols-2 gap-4">
          <Title className="col-span-2">
            DevOps Research and Assessment (DORA) metrics ( last 6 months){" "}
          </Title>
          <Card decoration="top" decorationColor="blue">
            <Title>Matrix Sample Project  (in months)</Title>
            <Metric>3</Metric>
          </Card>

          <Card decoration="top" decorationColor="rose">
            <Title>Matrix Sample Period (in months)</Title>
            <Metric>6</Metric>
          </Card>
          <Card className="col-span-2">
            <DevOpsResearchAssessment />
          </Card>
        </Card>
      </div>

      <div className="grid grid-cols-12  gap-4">
        <div className="col-span-12">
          {/* <InvestmentDistributonStackedBar /> */}
        </div>
        {/* <div className="col-span-6">
          <ProofAcceleration />
        </div> */}
        {/* <Card className="col-span-6">
          <Title>Full Proof Acceleration Table</Title>
          <FullProofAccelerationTable />
        </Card> */}
      </div>
    </div>
  );
}
