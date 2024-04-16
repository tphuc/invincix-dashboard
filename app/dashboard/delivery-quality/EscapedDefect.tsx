'use client';
import { Card, LineChart, Title } from "@tremor/react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const chartdata4 = [
    {"date": "Dec-22", "Percentage": 21},
    {"date": "Jan-23", "Percentage": 23},
    {"date": "Feb-23", "Percentage": 22},
    {"date": "Mar-23", "Percentage": 18},
    {"date": "Apr-23", "Percentage": 14},
    {"date": "May-23", "Percentage": 0},
    {"date": "Jun-23", "Percentage": 0},
    {"date": "Jul-23", "Percentage": 7},
    {"date": "Aug-23", "Percentage": 7},
    {"date": "Sep-23", "Percentage": 6},
    {"date": "Oct-23", "Percentage": 6}
  ];     

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">{category.Percentage} bpm</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const EscapedDefects = () => {
  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['EscapedDefectsOverTime']

  return (
    <>
      <Card>
        <Title>Escaped Defects</Title>
        <LineChart
          className="h-72 mt-4"
          data={data}
          showAnimation
          animationDuration={2000}
          index="date"
          categories={["Percentage"]}
          colors={["blue"]}
          yAxisWidth={30}
          rotateLabelX={{
            angle:30
          }}
        //   customTooltip={customTooltip}
        />
      </Card>
    </>
  );
};