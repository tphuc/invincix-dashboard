'use client';
import { Card, Title, BarChart, Text, Flex, Metric, LineChart, AreaChart, Select, SelectItem } from "@tremor/react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import 'ag-charts-enterprise'
import { useGetResource } from "@/utils/http";
import { useSession } from "next-auth/react";
const AgChartsReact = dynamic(() => import('ag-charts-react')?.then(m => m.AgChartsReact));

const _data = [
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

const data = _data?.reverse()


const CateColors = [

]

const filterBySelection = (selection, data) =>
  selection === "All" ? data : data.filter((city) => city.year === selection);
// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function EmployeePerfomanceAnalysisStackedBar() {

  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)

  const data = dataset?.sheetData?.['EmployeePerformanceYOY']

  const [selection, setSelection] = useState<any>('All');
  const [filterData, setFilterData] = useState<any>(data);

  useEffect(() => {
    setFilterData(filterBySelection(selection, data));
  }, [selection, data]);


  return (
    <Card className="relative w-full grid h-full">

      <div className="w-full overflow-x-scroll scrollbar-hide mt-2">

        <AgChartsReact options={{
          title: {
            text: "Employee Performance Year on Year (Scale of 5)",
            color:"white"
          },
          // subtitle: {
          //   text: 'In Billion U.S. Dollars',
          // },
          background: {
            visible: false,
            fill: "rgba(0,0,0, 0)"
          },
          legend: {
            item: {
              label: {
                color: "#fff"
              }
            }
          },
          height: 600,
          data: data,
          series: [
            {
              type: 'bar',
              xKey: 'year',
               direction: 'horizontal',
              yKey: 'Personality Improvement',
              yName: 'Personality Improvement',
              stacked: true,
              label: {
                color: 'white'
              },
            },
            {
              type: 'bar',
              xKey: 'year',
               direction: 'horizontal',
              yKey: 'Coding Standard',
              yName: 'Coding Standard',
              stacked: true,
              label: {
                color: 'white'
              },
            },
            {
              type: 'bar',
              xKey: 'year',
               direction: 'horizontal',
              yKey: 'Technical Capabilities',
              yName: 'Technical Capabilities',

              stacked: true,
              label: {
                color: 'white'
              },
            },
            {
              type: 'bar',
              xKey: 'year',
               direction: 'horizontal',
              yKey: 'Cross skill training',
              yName: 'Cross Skill Training',
              stacked: true,
              label: {
                color: 'white'
              },
            },
            {
              type: 'bar',
              xKey: 'year',
               direction: 'horizontal',
              yKey: 'Employee efficiency',
              yName: 'Employee Efficiency',
              stacked: true,
              label: {
                color: 'white'
              },
            },
            {
              type: 'bar',
              xKey: 'year',
               direction: 'horizontal',
              yKey: 'Communication Skills',
              yName: 'Communication Skills',
              stacked: true,
              label: {
                color: 'white'
              },
            },
            {
              type: 'bar',
              xKey: 'year',
               direction: 'horizontal',
              yKey: 'Mental Wellness',
              yName: 'Mental Wellness',
              stacked: true,
              label: {
                color: 'white'
              },
            },
          ],
          axes: [
            {
              type:"category",
              label: {
                color: 'white'
              },
            },
            {
              type:"number",
              label: {
                color: 'transparent'
              },
              line:{
                width:1,
                color:'rgba(255,255,255, 0.5)'
              },
              gridLine: {
                style: [
                  {
                    stroke:'transparent'
                  }
                ]
              },
            }
          ]
          // axes: [
          //   {
          //     type: 'number',
          //     position: 'left',
          //     label: {
          //       formatter: (params) => Math.round(params.value) + '%',
          //     },
          //   },
          //   {
          //     type: 'category',
          //     position: 'bottom',
          //   },
          // ],
        }} />
      </div>
    </Card>
  );
}