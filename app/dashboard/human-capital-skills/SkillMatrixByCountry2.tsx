"use client";
import { useEffect, useState } from "react";
import {
  BadgeDelta,
  Card,
  DeltaType,
  DonutChart,
  Select,
  SelectItem,
  Flex,
  Legend,
  List,
  ListItem,
  Title,
  CategoryBar,
  BarList,
  BarChart,
} from "@tremor/react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const regions = [
  { key: "all", name: "All" },
  { key: "web", name: "Web development" },
  { key: "mobile", name: "Mobile development" },
  { key: "design", name: "Design" },
];

const data = [
  {
    category: "Block Chain",
    Vietnam: 0,
    India: 1,
    Bangladesh: 0,
    Singapore: 0,
    UK: 0,
  },
  { category: "HR", Vietnam: 0, India: 1, Bangladesh: 0, Singapore: 0, UK: 0 },
  {
    category: "Enterprise Java",
    Vietnam: 1,
    India: 0,
    Bangladesh: 1,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "Accounts & Finance",
    Vietnam: 0,
    India: 2,
    Bangladesh: 0,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "AI / ML",
    Vietnam: 1,
    India: 2,
    Bangladesh: 0,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "Lowcode / No Code",
    Vietnam: 0,
    India: 3,
    Bangladesh: 0,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "Salesforce",
    Vietnam: 1,
    India: 2,
    Bangladesh: 0,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "Sales & Marketing",
    Vietnam: 1,
    India: 0,
    Bangladesh: 0,
    Singapore: 0,
    UK: 2,
  },
  {
    category: "Enterprise .Net",
    Vietnam: 1,
    India: 4,
    Bangladesh: 0,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "Cloud and DevOps",
    Vietnam: 1,
    India: 3,
    Bangladesh: 1,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "Operations",
    Vietnam: 1,
    India: 2,
    Bangladesh: 1,
    Singapore: 0,
    UK: 1,
  },
  {
    category: "ODOO",
    Vietnam: 1,
    India: 2,
    Bangladesh: 2,
    Singapore: 2,
    UK: 0,
  },
  {
    category: "Quality Certification",
    Vietnam: 1,
    India: 7,
    Bangladesh: 0,
    Singapore: 0,
    UK: 0,
  },
  { category: "UX", Vietnam: 1, India: 6, Bangladesh: 2, Singapore: 0, UK: 0 },
  {
    category: "Database",
    Vietnam: 0,
    India: 10,
    Bangladesh: 0,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "Analytics and Reporting",
    Vietnam: 0,
    India: 10,
    Bangladesh: 0,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "Mobility",
    Vietnam: 2,
    India: 7,
    Bangladesh: 3,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "MERN & Mean / Open Source",
    Vietnam: 4,
    India: 9,
    Bangladesh: 3,
    Singapore: 0,
    UK: 0,
  },
  {
    category: "All",
    Vietnam: 16,
    India: 71,
    Bangladesh: 13,
    Singapore: 2,
    UK: 3,
  },
];
// const filterBySkill = (skill, data) => {
//     let record = data.find((city) => city.skill === skill)
//     return [
//         {
//             'name': 'Vietnam',
//             value: record['Vietnam']
//         },
//         {
//             name: 'India',
//             value: record['India']
//         },
//         {
//             name: 'Bangladesh',
//             value: record['Bangladesh']
//         },
//         {
//             name: 'Singapore',
//             value: record['Singapore']
//         },
//         {
//             name: 'UK',
//             value: record['UK']
//         }
//     ]
// }

const filterBySkill = (category, data) => {
  let record = data?.find?.((city) => city.category === category);
  return [
    {
      category: "India",

      India: record?.["India"],
    },
    {
        category: "Vietnam",
        Vietnam: record?.["Vietnam"],
        // 'India': 0,
        // 'Bangladesh': 0,
        // 'Singapore': 0,
        // 'UK':0
      },
    {
      category: "Bangladesh",

      Bangladesh: record?.["Bangladesh"],
    },
    {
      category: "Singapore",

      Singapore: record?.["Singapore"],
    },
    {
      category: "UK",

      UK: record?.["UK"],
    },
  ];
};

// const valueFormatter = (number) => `$${Intl.NumberFormat("us").format(number).toString()}`;

export default function SkillMatrixChart() {
  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['CountryWiseSkillMatrix']

  const [selectedSkill, setSelectedSkill] = useState("All");
  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  useEffect(() => {
    if (selectedSkill) {
      setFilteredData(filterBySkill(selectedSkill, data));
    }
  }, [selectedSkill, data]);


  return (
    <Card className="w-full h-full grid  space-y-4 dark:bg-gray-900/50">
      <Flex className="space-x-8" justifyContent="between" alignItems="center">
        <Title className="min-w-[100px]">Skill Matrix</Title>
        <Select
          value={selectedSkill ?? "All"}
          className="max-w-[400px]"
          onValueChange={setSelectedSkill}
          placeholder="Skill Selection"
          enableClear={false}
        >
          {data?.map?.((item) => (
            <SelectItem key={item.category} value={item.category}>
              {item.category}
            </SelectItem>
          ))}
         <SelectItem value={'All'}>All</SelectItem>
        </Select>
      </Flex>
      <Flex>
        <Title></Title>
      </Flex>
      <ListItem className="w-full">
        <Title>{filteredData?.["skill"]}</Title>
        <Title></Title>
      </ListItem>
      <br />
      <div>
        <BarChart
          showAnimation={true}
          className="mt-4"
          data={filteredData}
          index="category"
          categories={["India", "Vietnam", "Bangladesh", "Singapore", "UK"]}
          colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
          showLegend
          showGridLines
          showXAxis
          showYAxis
          rotateLabelX={{
            angle: -45,
            verticalShift: 30,
            xAxisHeight: 100,
          }}
          yAxisWidth={30}
          stack={true}
          //   customTooltip={customTooltip}
        />
      </div>
    </Card>
  );
}
