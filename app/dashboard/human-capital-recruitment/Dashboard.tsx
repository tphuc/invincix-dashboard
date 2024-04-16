"use client";
import { cn } from "@/lib/utils";
import {
  BadgeDelta,
  Bold,
  Card,
  CategoryBar,
  DonutChart,
  Flex,
  Legend,
  List,
  ListItem,
  Metric,
  ProgressBar,
  Text,
  Title,
} from "@tremor/react";
import Image from "next/image";
import OpenpositionByDepartment from "./OpenPositionByDepartment";
import ByGender from "./ByGender";
import CandidateDecline from "./CadidateDecline";
import CandidateTable from "./CandidateTable";
import AcceptanceBySource from "./AcceptanceBySource";
import GaugeComponent from "react-gauge-component";
import SkillMatrixExperiences from "./SkillMatrixExperiences";
import HiringChart from "./components/HiringChart";
import ApplicationRecievedBySource from "./ApplicationRecievedBySource";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const colors = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

export default function RecruitmentDashboard() {
  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['HiringCostMetrics']
  const genderHired = dataset?.sheetData?.['GenderHiredMetrics']
  const offerMetrics = dataset?.sheetData?.['OfferMetrics']

  return (
    <div className="relative space-y-4 w-full md:px-4">
      <p className="text-4xl font-bold pb-2 space-x-3">Resource Mobilization</p>



      <div className="w-full relative border-t border-slate-800 pt-6 grid grid-cols-4 gap-4 mt-6">

        <div className="col-span-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card decoration="top" decorationColor="rose" className="mx-auto">
            <Text>Cost For Hiring (Per Resource)</Text>
            <Metric>$ {data?.find(item => item.name === 'Cost Per Hiring')?.value}</Metric>

            <Flex justifyContent="start" className="space-x-2 mt-4">
              <BadgeDelta deltaType="moderateIncrease">{data?.find(item => item.name === 'PercenChangeToPreviousYear')?.value} %</BadgeDelta>
              <Flex justifyContent="start" className="space-x-1 truncate">
                <Text className="truncate">to previous year</Text>
              </Flex>
            </Flex>
          </Card>
          <Card decoration="top" decorationColor="blue" className=" mx-auto">
            <Text>Total Male Hired %</Text>
            <Metric>{genderHired?.find(item => item.name === 'male')?.value}%</Metric>

            <Flex justifyContent="start" className="space-x-2 mt-4">
              <BadgeDelta deltaType="moderateDecrease">{genderHired?.find(item => item.name === 'male')?.['changePercenPreviousYear']}%</BadgeDelta>
              <Flex justifyContent="start" className="space-x-1 truncate">
                <Text className="truncate">to previous year</Text>
              </Flex>
            </Flex>
          </Card>
          <Card decoration="top" decorationColor="pink" className=" mx-auto">
            <Text>Total Female Hired %</Text>
            <Metric>{genderHired?.find(item => item.name === 'female')?.value}%</Metric>

            <Flex justifyContent="start" className="space-x-2 mt-4">
              <BadgeDelta deltaType="moderateIncrease">{genderHired?.find(item => item.name === 'male')?.['changePercenPreviousYear']}%</BadgeDelta>
              <Flex justifyContent="start" className="space-x-1 truncate">
                <Text className="truncate">to previous year</Text>
              </Flex>
            </Flex>
          </Card>
        </div>

      </div>


      <div className="col-span-3 grid grid-cols-5 gap-4">
        <div className="col-span-full md:col-span-3">
        <SkillMatrixExperiences />
        </div>
        <div className="col-span-full md:col-span-2">
          <ApplicationRecievedBySource/>
        </div>
        
      </div>

      <div className="w-full grid gap-4 grid-cols-12">
        <div className="col-span-full md:col-span-3">
          <Card className="h-full">
            <Title>Offer Acceptance Ratio </Title>
            <GaugeComponent
              value={offerMetrics?.find(item => item.name === 'Acceptance Ratio')?.value}
              type="radial"
              arc={{
                colorArray: ["#0d9488"],
                // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                padding: 0.02,
                width: 0.3,
              }}
              pointer={{
                elastic: true,
                animationDelay: 0,
              }}
            />
          </Card>
        </div>
        <div className="col-span-full md:col-span-3">
          <Card className="h-full">
            <Title>Offer Withdrawal Ratio </Title>
            <GaugeComponent
              value={offerMetrics?.find(item => item.name === 'Withdrawal Ratio')?.value}
              type="radial"
              arc={{
                colorArray: ["#b45309"],
                // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                padding: 0.02,
                width: 0.3,
              }}
              pointer={{
                elastic: true,
                animationDelay: 0,
              }}
            />
          </Card>
        </div>
        <div className="col-span-full md:col-span-6 h-full">
          <CandidateDecline />
        </div>
        
      </div>

      {/* <div className="grid grid-cols-1 gap-4">
        <OpenpositionByDepartment />
      </div> */}
    </div>
  );
}
