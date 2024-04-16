"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";

import GaugeComponent from "react-gauge-component";
import { AreaChart, BarList, Card, Flex, Select, SelectItem, Title } from "@tremor/react";
import { Bold, Text } from "lucide-react";
import 'ag-charts-enterprise'
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";
const AgChartsReact = dynamic(() => import('ag-charts-react')?.then(m => m.AgChartsReact));
const CanvasJSReact = dynamic(() => import("@canvasjs/react-charts")?.then(m => m.default)) as any;

var CanvasJS = CanvasJSReact.CanvasJS;

const projectionData = {
  "2023": {
    "Asia": 40,
    "North America": 23,
    "South America": 0,
    "Europe": 12,
    "Africa": 17,
    "Oceania": 8
  },
  "2024": {
    "Asia": 33,
    "North America": 27,
    "South America": 0,
    "Europe": 12,
    "Africa": 19,
    "Oceania": 9
  },
  "2025": {
    "Asia": 30,
    "North America": 30,
    "South America": 0,
    "Europe": 12,
    "Africa": 19,
    "Oceania": 9
  },
  "2026": {
    "Asia": 25,
    "North America": 33,
    "South America": 0,
    "Europe": 13,
    "Africa": 19,
    "Oceania": 10
  }
}
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// Spline Chart Code
//  const renderSplineChart = () => {
//   const options = {
//     backgroundColor: "hsl(216 80.4% 10.1%)",
//     animationEnabled: true,
//     title: {
//       text: "Monthly Sales - 2017",
//       fontColor: "#fff",
//     },
//     axisX: {
//       valueFormatString: "#",
//       // fontColor: "#fff",
//       labelFontColor: "#fff",
//       title: "Continent",
//       interval: 1,
//       fontColor: "#fff",
//       titleFontColor: "#fff",
//     },
//     axisY: {
//       title: "Gross Margin (%)",
//       // prefix: "%",
//       labelFontColor: "#fff",
//       maximum: 100,
//       titleFontColor: "#fff",
//     },
//     fontColor: "#fff",
//     data: [
//       {
//         // yValueFormatString: "$#,###",
//         xValueFormatString: "#",
//         type: "spline",
//         dataPoints: [
//           { x: 2017, y: -30 },
//           { x: 2018, y: 57 },
//           { x: 2019, y: 52 },
//           { x: 2020, y: 1 },
//           { x: 2021, y: -18 },
//           { x: 2022, y: 23 },
//           { x: 2023, y: 18 },
//         ],
//       },
//     ],
//   };

//   return (
//     <div>
//       <CanvasJSChart
//         options={options}
//       // onRef={ref => chart = ref}
//       />
//       {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//     </div>
//   );
// };


const GaugeChart = ({ continent, color, meterValue }) => {
  return (
    <Card className="flex flex-col items-center justify-center">
      <p className="text-center">{continent}</p>
      <GaugeComponent
        value={meterValue}
        type="radial"
        labels={{
          tickLabels: {
            type: "inner",
            hideMinMax: true
          }
        }}
        arc={{
          colorArray: [color],
          // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
          padding: 0.02,
          width: 0.3,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
        style={{
          width: '100%',
        }}
      />
    </Card>
  );
};


const EarnNBurnChart = () => {

  const options: any = {
    background: {
      visible: false,
      fill: "rgba(0,0,0, 0)"
    },
    data: [


      {
        quarter: 'Vietnam + Bangladesh',
        earn: 6,
        burn: 20,
      },
      {
        quarter: 'UK',
        earn: 12,
        burn: 2,
      },
      {
        quarter: 'Singapore',
        earn: 40,
        burn: 30,

      },
      {
        quarter: 'India',
        earn: 42,
        burn: 30,

      },
    ],
    title: {
      text: 'Location wise earn burn rate',
      color: "white"
    },
    styles: {
      backgroundColor: "hsl(216 80.4% 10.1%)",
    },
    height: 800,
    label: {
      color: 'white'
    },
    formatter: {
      strokeWidth: 5,
    },
    axes: [
      {
        type: 'angle-number',
        // startAngle: 270,
        // endAngle: 450,
        label: {
          color: 'white',

        },
        stroke: '#aaaaaa',

        line: {
          width: 5,
          color: 'rgba(255,255,255,0.1)'
        },
        gridLine: {
          width: 2,
          enabled: true,

          style: [
            {
              stroke: "rgba(255,255,255,0.1)"
            }
          ]

        }
      },
      {
        type: 'radius-category',
        // positionAngle: 270,
        label: {
          color: 'white'
        },
        stroke: '#aaaaaa',
        gridLine: {
          width: 2,
          enabled: true,

          style: [
            {
              stroke: "rgba(255,255,255,0.1)"
            }
          ]

        }
        // paddingInner:0.5,
        // paddingOuter:0.5
      },
    ],

    legend: {
      item: {
        label: {
          color: "#fff"
        }
      }
    },

    series: [
      {
        type: 'radial-bar',
        radiusKey: 'quarter',
        angleKey: 'earn',
        angleName: 'Earn',
        stacked: true,
        label: {
          color: 'white'
        },
        stroke: "#ff0000",
        fill: '#14b8a6'
      },
      {
        type: 'radial-bar',
        radiusKey: 'quarter',
        angleKey: 'burn',
        angleName: 'Burn',
        stacked: true,
        stroke: "#ff0000",
        label: {
          color: 'white'
        },
        fill: "#a21caf"

      }
    ],
  };

  return (
    <AgChartsReact options={options} />
  );
}

export default function ProjectionChart() {

  const user = useSession().data?.user as any
  const { data: dataset, isLoading } = useGetResource(`/api/user/${user?.id}/dataset`)
  const regionalProjection = dataset?.sheetData?.['RegionalProjection']
  const YOYProfitMargin = dataset?.sheetData?.['YOYProfitMarginProjection']
  const AreaOfSpending = dataset?.sheetData?.['AreaOfSpendingProjection']


  function assignColors(data, colors) {
    return data?.map?.((item, index) => {
      return {
        ...item,
        color: colors[index % colors.length] // Assign color based on index
      };
    });
  }

  const renderAreaOfExpends = () => {

    const _data = [
      {
        name: "Employee Direct Benefit - Salary",
        value: 34,
        color: "cyan"
      },
      {
        name: "Research and Development",
        value: 18,
        color: "green"
      },
      {
        name: "Operations",
        value: 10,
        color: "yellow"
      },
      {
        name: "Employee Training",
        value: 8,
        color: "purple",
      },
      {
        name: "Travel and Logistics",
        color: "red",
        value: 6,
      },
      {
        name: "Employee Health Insurance",
        value: 5,
        color: "sky"
      },
      {
        name: "Sales",
        value: 5,
        color: "lime"
      },

      {
        name: "Recruitment",
        value: 5,
        color: "yellow"

      },
      {
        name: "Geography Expansion",
        value: 4,
        color: "amber"
      },
      {
        name: "Asset Creation",
        value: 4,
        color: "blue"
      },
      {
        name: "Branding and Marketing",
        value: 1,
        color: "red"
      },
    ];
    return (
      <div className="w-full">
        <Title>Current Area of spending (%)</Title>
        {/* <Flex className="mt-4">
          <Text>
            <Bold>Reason</Bold>
          </Text>
          <Text>
            <Bold>%</Bold>
          </Text>
        </Flex> */}

        <BarList showAnimation valueFormatter={(val) => `${val} %`} data={assignColors(AreaOfSpending, ['cyan', 'green', 'yellow', 'pink', 'red', 'sky'])} className="mt-2" />
      </div>
    )
  }


  const [year, setYear] = useState(`${new Date().getFullYear()}`)

  console.log(regionalProjection?.find?.(item => `${item['year']}` === year))
  return (
    <div className="w-full space-y-4 relative">

      <div className="relative gap-4 w-full grid grid-cols-12">
        <Card className="w-full col-span-full md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
          <Title className="col-span-1 md:col-span-2">Select year</Title>
          <Select enableClear={false} className="col-span-1" value={year} onValueChange={setYear} placeholder="Select">
            {regionalProjection?.map?.((item, id) => (
              <SelectItem key={id} value={`${item?.year}`}>
                {item?.year}
              </SelectItem>
            ))}
          </Select>
          <GaugeChart continent={'Asia'} color={'#34d399'} meterValue={regionalProjection?.find?.(item => `${item['year']}` === year)?.['Asia']} />
          <GaugeChart continent={'North America'} color={'#f0abfc'} meterValue={regionalProjection?.find?.(item => `${item['year']}` === year)?.['North America']} />
          <GaugeChart continent={'Africa'} color={'#d4d4d8'} meterValue={regionalProjection?.find?.(item => `${item['year']}` === year)?.['Africa']} />
          <GaugeChart continent={'Europe'} color={'#fda4af'} meterValue={regionalProjection?.find?.(item => `${item['year']}` === year)?.['Europe']} />
          <GaugeChart continent={'Oceania'} color={'#7dd3fc'} meterValue={regionalProjection?.find?.(item => `${item['year']}` === year)?.['Oceania']} />
          <GaugeChart continent={'South America'} color={'#fcd34d'} meterValue={regionalProjection?.find?.(item => `${item['year']}` === year)?.['South America']} />
        </Card>
        <div className="col-span-5 h-full">
          <Card className="h-full">
            <Title>YoY Profit Margin</Title>
            <AreaChart
              className="h-[300px] mt-4"
              data={
                YOYProfitMargin
              }
              index="year"
              categories={["Revenue", "Profit"]}
              colors={["blue", "red"]}
              yAxisWidth={30}

            />
          </Card>
        </div>
      </div>



      {/* <div className="w-full">
        <Card>{renderPreFunnelChart()}</Card>
      </div> */}


      <div className="w-full mt-4">
        <Card>{renderAreaOfExpends()}</Card>
      </div>


      {/* <div className="w-full mt-4">
        <Card>
          <EarnNBurnChart />
        </Card>
      </div> */}


    </div>
  );
}