'use client';
import { cn } from "@/lib/utils";
import { Card, DonutChart, Legend, List, ListItem, Title } from "@tremor/react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const data = [
  {
    name: "Improve Timely Communication",
    value: 19,
  },
  {
    name: "Decrease Post Production Defects",
    value: 21,
  },
  {
    name: "Increase Automated Bill Process",
    value: 14,
  },
  {
    name: "Increase Onsite Engagement",
    value: 21,
  },
  {
    name: "Combined AI based Follow ups",
    value: 4,
  },
  {
    name: "Cross Train Team On New Technology",
    value: 21,
  },
];

// const valueFormatter = (number) =>
//   `${new Intl.NumberFormat("us").format(number).toString()} %`;

export const ServiceImprovementArea = () => {
  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['ServiceImprovementArea']
  return (
    <Card className="h-full">
      <Title>Service Improvement Areas</Title>
      <DonutChart
        showAnimation
        animationDuration={2000}
        className="mt-6"
        data={data}
        category="value"
        index="name"
        // valueFormatter={valueFormatter}
        colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
      />

      <List className="w-full">
        {data?.map?.((data, id) => (
          <ListItem key={data.name} className="space-x-2">
            <div className="flex items-center space-x-2 truncate">
              <span
                className={cn(
                  `bg-${["rose", "yellow", "orange", "indigo", "blue", "emerald"]?.[id]}-500`,
                  "h-2.5 w-2.5 rounded-sm flex-shrink-0",
                )}
              />

              <span className="truncate">{data?.name}</span>
            </div>


            <span>{data.value} %</span>

          </ListItem>
        ))}
      </List>

      {/* <div className="grid py-2 grid-cols-3 md:grid-cols-3 gap-2 items-center justify-between mt-5">
        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-[#FFA755] w-4 h-4 " />
          <div className="flex flex-col ml-3 text-center">
            <p className="text-sm text-base">Client 1</p>
            <p className="text-xs text-[#838383]">Rs.000.00</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-[#FF4B4B] w-4 h-4" />
          <div className="flex flex-col ml-3 text-center">
            <p className="text-sm text-base">Client 1</p>
            <p className="text-xs text-[#838383]">Rs.000.00</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-[#2EB7CA] w-4 h-4" />
          <div className="flex flex-col ml-3 text-center">
            <p className="text-sm text-base">Client 1</p>
            <p className="text-xs text-[#838383]">Rs.000.00</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-[#6B51B6] w-4 h-4" />
          <div className="flex flex-col ml-3 text-center">
            <p className="text-sm text-base">Client 1</p>
            <p className="text-xs text-[#838383]">Rs.000.00</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-[#9FE843] w-4 h-4" />
          <div className="flex flex-col ml-3 text-center">
            <p className="text-sm text-base">Client 1</p>
            <p className="text-xs text-[#838383]">Rs.000.00</p>
          </div>
        </div>
      </div> */}
    </Card>
  );
};
