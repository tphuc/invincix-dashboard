"use client";

import { Card, Flex, ProgressBar, Text, Title } from "@tremor/react";
import "./progressbar.css";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const data = [
  {
    name: ">20 Years",
    value: 7,
    color: "slate",
  },

  {
    name: "10-20 Years",
    value: 6,
    color: "rose",
  },
  {
    name: "7-10 Years",
    value: 12,
    color: "green",
  },
  {
    name: "5-7 Years",
    value: 15,
    color: "cyan",
  },
  {
    name: "2-5 Years",
    value: 39,
    color: "blue",
  },
  {
    name: "0-2 Years",
    value: 26,
    color: "purple",
  },
];

function assignColors(data, colors) {
  return data?.map?.((item, index) => {
      return {
          ...item,
          color: colors[index % colors.length] // Assign color based on index
      };
  });
}


export default function ResourceExperiences() {
  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['ExperienceLevelHeadCount']
  return (
    <Card className="w-full space-y-4 relative">
      <Title>Experience Level Head Count</Title>
      {assignColors(data, ['slate', 'rose', 'green', 'cyan', 'blue', 'purple'])?.map?.((item) => (
        <div key={item?.name} className="w-full space-y-1">
          <Flex>
            <Text>{item.name}</Text>
            <Text>{item.value}</Text>
          </Flex>

          <ProgressBar
            color={item?.color as any}
            value={item.value}

            // label={`${item?.name}`}
            // tooltip={item?.value}
          />
        </div>
      ))}
    </Card>
  );
}
