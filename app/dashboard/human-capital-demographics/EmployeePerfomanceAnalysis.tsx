'use client';
import { Card, Title, BarChart, Text, Flex, Metric, LineChart, AreaChart, Select, SelectItem } from "@tremor/react";
import { User } from "lucide-react";
import { useEffect, useState } from "react";


const data = [
  {
    "year": 2017,
    "Personality Improvement": 3,
    "Coding Standard": 3,
    "Technical Capabilities": 3.5,
    "Cross skill training": 2,
    "Employee efficiency": 4,
    "Communication Skills": 3,
    "Mental Wellness": 4
  },
  {
    "year": 2018,
    "Personality Improvement": 3.5,
    "Coding Standard": 3.5,
    "Technical Capabilities": 3.75,
    "Cross skill training": 2.5,
    "Employee efficiency": 4,
    "Communication Skills": 3.5,
    "Mental Wellness": 4
  },
  {
    "year": 2019,
    "Personality Improvement": 3.5,
    "Coding Standard": 3.5,
    "Technical Capabilities": 3.75,
    "Cross skill training": 3.75,
    "Employee efficiency": 3.75,
    "Communication Skills": 3.5,
    "Mental Wellness": 3.85
  },
  {
    "year": 2020,
    "Personality Improvement": 3.5,
    "Coding Standard": 3.5,
    "Technical Capabilities": 4.2,
    "Cross skill training": 3.5,
    "Employee efficiency": 3.75,
    "Communication Skills": 3.75,
    "Mental Wellness": 3.5
  },
  {
    "year": 2021,
    "Personality Improvement": 4.5,
    "Coding Standard": 4,
    "Technical Capabilities": 4.5,
    "Cross skill training": 4,
    "Employee efficiency": 4.5,
    "Communication Skills": 3.87,
    "Mental Wellness": 4
  },
  {
    "year": 2022,
    "Personality Improvement": 4.5,
    "Coding Standard": 4.45,
    "Technical Capabilities": 4.75,
    "Cross skill training": 3.5,
    "Employee efficiency": 4.8,
    "Communication Skills": 4,
    "Mental Wellness": 4.25
  },
  {
    "year": 2023,
    "Personality Improvement": 4.75,
    "Coding Standard": 4.45,
    "Technical Capabilities": 4.75,
    "Cross skill training": 4,
    "Employee efficiency": 4.8,
    "Communication Skills": 4,
    "Mental Wellness": 4.5
  }
]


const filterBySelection = (selection, data) =>
  selection === "All" ? data : data.filter((city) => city.year === selection);
// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function EmployeePerfomanceAnalysis() {
  const [selection, setSelection] = useState<any>('All');
  const [filterData, setFilterData] = useState<any>(data);

  useEffect(() => {
    setFilterData(filterBySelection(selection, data));
  }, [selection]);


  return (
    <Card className="relative w-full grid h-full">

      <Flex className="space-x-8" justifyContent="between" alignItems="center">
        <Title>Employee Performance (YoY 2)</Title>
        <Select className="w-[200px]" value={selection} onValueChange={setSelection} placeholder="Select">
          {["Personality Improvement", "Coding Standard", "Cross skill training", "Employee efficiency", "Communication Skills", "Mental Wellness", "All"].map((item) => (
            <SelectItem key={item} value={`${item}`}>
              {item}
            </SelectItem>
          ))}
        </Select>
      </Flex>
      <div className="w-full overflow-x-scroll scrollbar-hide mt-2">
        <LineChart
          data={data}
          index="year"
          showGridLines
          showYAxis
          showXAxis
          minValue={2}
          maxValue={5}
          // rotateLabelX={{
          //   angle: -90,
          //   verticalShift: 60,
          //   xAxisHeight: 100
          // }}
          className="h-[500px]"
          categories={selection == 'All' ? ["Personality Improvement", "Coding Standard", "Technical Capabilities", "Cross skill training", "Employee efficiency", "Communication Skills", "Mental Wellness"] : [selection]}
          colors={["cyan", "rose", "green", "yellow", "blue", "amber", "slate"]}
          // valueFormatter={valueFormatter}
          // stack={true}
        />
      </div>
    </Card>
  );
}