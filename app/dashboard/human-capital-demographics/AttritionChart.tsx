'use client';
import { cn } from "@/lib/utils";
import { AreaChart, Card, List, ListItem, Title } from "@tremor/react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const chartdata3 = [
  {
    year: "2017",
    "Total": 0
  },
  {
    year: "2018",
    "Total": 1
  },
  {
    year: "2019",
    "Total": 2
  },
  {
    year: "2020",
    "Total": 0
  },
  {
    year: "2021",
    "Total": 1
  },
  {
    year: "2022",
    "Total": 8
  },
  {
    year: "2023",
    "Total": 10
  },
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
            <p className="font-medium text-tremor-content-emphasis">{category.value}</p>  
          </div>
        </div>
      ))}
    </div>
  );
};

export const AttritionChart = () => {
  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['AttritionRate']
  return (
    <>
      <Card>
        <Title>Attrition Rate</Title>
        <AreaChart
        showAnimation
        animationDuration={2000}
          className="h-72 mt-4"
          data={data}
          index="year"
          categories={["Total"]}
          colors={["blue"]}
          yAxisWidth={30}
          customTooltip={customTooltip}
        />
      </Card>
      
    </>
  );
};