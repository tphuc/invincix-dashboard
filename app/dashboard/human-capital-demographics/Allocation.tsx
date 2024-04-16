'use client';

import { cn } from "@/lib/utils";
import { Card, DonutChart, List, ListItem, Title } from "@tremor/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useGetResource } from "@/utils/http";


const colors: any[] = ["indigo", "red", "cyan", "yellow", "green", "green"]
const data = [
  {
    name: "Billed",
    value: 81,
  },
  {
    name: "Buffer",
    value: 5,
  },
  {
    name: "Bench",
    value: 10,
  },
  {
    name: "Support",
    value: 2,
  },
  {
    name: "Executive",
    value: 2,
  },
  
];

const valueFormatter = (number) => `% ${number}`;

export const AllocationChart = () => {
  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['ResourceAllocation']

  const [value, setValue] = useState(null);
  return (

      <Card className="w-full mt-0">
        <Title>Resource Allocation</Title>
        <DonutChart
            className="mt-6"
            data={data}
            category="value"
            index="name"
            valueFormatter={valueFormatter}
            colors={colors}
            showAnimation={true}
            animationDuration={2000}
        />
        <List className="w-full">
        {data?.map?.((data, id) => (
            <ListItem key={data.name} className="space-x-2">
                <div className="flex items-center space-x-2 truncate">
                    <span
                        className={cn(
                            `bg-${colors?.[id]}-500`,
                            "h-2.5 w-2.5 rounded-sm flex-shrink-0",
                        )}
                    />

                    <span className="truncate">{data?.name}</span>
                </div>
              
                   
                    <span className="text-white">{data.value} %</span>
                
            </ListItem>
        ))}
    </List>
      </Card>

  );
};