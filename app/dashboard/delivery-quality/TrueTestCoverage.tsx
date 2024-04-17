'use client';
import { Card, Title, BarChart, Text, Flex, Metric, AreaChart } from "@tremor/react";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const data = [
  {
    "BuildQuarter": "Buid-1-YQ1",
    "Unit Test": 45,
    "Regression Test": 23,
    "Functional Test": 37,
    "UAT": 63,
    // "Total": 168
  },
  {
    "BuildQuarter": "Buid-1-YQ2",
    "Unit Test": 57,
    "Regression Test": 26,
    "Functional Test": 29,
    "UAT": 52,
    // "Total": 164
  },
  {
    "BuildQuarter": "Buid-1-YQ3",
    "Unit Test": 64,
    "Regression Test": 24,
    "Functional Test": 27,
    "UAT": 39,
    // "Total": 147
  },
  {
    "BuildQuarter": "Buid-1-YQ4",
    "Unit Test": 77,
    "Regression Test": 22,
    "Functional Test": 24,
    "UAT": 28,
    // "Total": 151
  }
]




export default function TrueTestCoverage() {
  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['TrueTestCoverage']
  return (
    <Card className="relative w-full grid h-full">
      <Flex>
        <div>
          <Title>True Test Coverage</Title>
        </div>

      </Flex>
      <div className="w-full overflow-x-scroll scrollbar-hide">

        <AreaChart
          data={data}
          showAnimation={true}
          className="w-full pr-4"
          index="BuildQuarter"
          minValue={10}
          maxValue={80}
          curveType="natural"
          slot="dasdasd"

          yAxisWidth={30}
          rotateLabelX={{
            angle: -30,
            verticalShift: 60,
            xAxisHeight: 100
          }}

          categories={["Unit Test", "Regression Test", "Functional Test", "UAT"]}
          colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
          // valueFormatter={valueFormatter}
          stack={false}
        />
      </div>
    </Card>
  );
}