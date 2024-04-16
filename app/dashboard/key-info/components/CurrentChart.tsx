"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";

import GaugeComponent from "react-gauge-component";
import {
  AreaChart,
  BarList,
  Card,
  Flex,
  Select,
  SelectItem,
  Title,
} from "@tremor/react";
import { Bold, Text } from "lucide-react";
import "ag-charts-enterprise";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";
const AgChartsReact = dynamic(() =>
  import("ag-charts-react")?.then((m) => m.AgChartsReact)
);
const CanvasJSReact = dynamic(() =>
  import("@canvasjs/react-charts")?.then((m) => m.default)
) as any;

var CanvasJS = CanvasJSReact.CanvasJS;

const data = {
  "Asia": 40,
  "North America": 23,
  "Africa": 17,
  "Europe": 12,
  "Oceania": 8,
  "South America": 0
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
            hideMinMax: true,
          },
        }}
        arc={{
          colorArray: [color],
          padding: 0.02,
          width: 0.3,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
          color: "#aaaaaa",
        }}
        style={{
          width: '100%',
        }}
      />
    </Card>
  );
};

const EarnNBurnChart = ({data = []}) => {
  const options: any = {
    background: {
      visible: false,
      fill: "rgba(0,0,0, 0)",
    },
    data,
    title: {
      text: "Location wise earn burn rate",
      color: "white",
    },
    styles: {
      backgroundColor: "hsl(216 80.4% 10.1%)",
    },
    height: 600,
    label: {
      color: "white",
    },
    formatter: {
      strokeWidth: 5,
    },
    axes: [
      {
        type: "angle-number",
        // startAngle: 270,
        // endAngle: 450,
        label: {
          color: "white",
        },
        stroke: "#aaaaaa",
        line: {
          width: 2,
          color: "#334155",
        },
        gridLine: {
          width: 1,
          enabled: true,

          style: [
            {
              stroke: "#334155",
            },
          ],
        },
      },
      {
        type: "radius-category",
        // positionAngle: 270,
        label: {
          color: "white",
        },
        stroke: "#aaaaaa",
        gridLine: {
          width: 1,
          enabled: true,

          style: [
            {
              stroke: "#334155",
            },
          ],
        },
        // paddingInner:0.5,
        // paddingOuter:0.5
      },
    ],

    legend: {
      item: {
        label: {
          color: "#fff",
        },
      },
    },

    series: [
      {
        type: "radial-bar",
        radiusKey: "quarter",
        angleKey: "earn",
        angleName: "Earn",
        stacked: true,
        label: {
          color: "white",
        },
        stroke: "#ff0000",
        // fill: 'red'
      },
      {
        type: "radial-bar",
        radiusKey: "quarter",
        angleKey: "burn",
        angleName: "Burn",
        stacked: true,
        stroke: "#ff0000",
        label: {
          color: "white",
        },
      },
    ],
  };

  return <AgChartsReact options={options} />;
};

function assignColors(data, colors) {
  return data?.map?.((item, index) => {
      return {
          ...item,
          color: colors[index % colors.length] // Assign color based on index
      };
  });
}


export default function RevenueDoughChart() {
  const user = useSession().data?.user as any
  const { data: dataset, isLoading } = useGetResource(`/api/user/${user?.id}/dataset`)
  const currentData = dataset?.sheetData?.['RegionalCurrent']
  const YOYProfitMargin = dataset?.sheetData?.['YOYProfitMarginCurrent']
  const AreaOfSpending = dataset?.sheetData?.['AreaOfSpendingCurrent']
  const CurrentLocationWiseEarnBurnRate = dataset?.sheetData?.['CurrentLocationWiseEarnBurnRate']


  return (
    <div className="w-full space-y-4 relative">
      <div className="relative gap-4 w-full grid grid-cols-12">
        <div className="w-full col-span-12 md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
          <GaugeChart continent={"Asia"} color={"#34d399"} meterValue={currentData?.find(item => item?.Continent === 'Asia')?.value ?? 0} />
          <GaugeChart
            continent={"North America"}
            color={"#f0abfc"}
            meterValue={
              currentData?.find(item => item?.Continent === 'North America')?.value ?? 0

            }
          />
          <GaugeChart continent={"Africa"} color={"#d4d4d8"} meterValue={currentData?.find(item => item?.Continent === 'Africa')?.value ?? 0} />
          <GaugeChart continent={"Europe"} color={"#fda4af"} meterValue={currentData?.find(item => item?.Continent === 'Europe')?.value ?? 0} />
          <GaugeChart continent={"Oceania"} color={"#7dd3fc"} meterValue={currentData?.find(item => item?.Continent === 'Oceania')?.value ?? 0} />
          <GaugeChart
            continent={"South America"}
            color={"#fcd34d"}
            meterValue={currentData?.find(item => item?.Continent === 'South America')?.value ?? 0}
          />
        </div>
        <div className="col-span-12 md:col-span-5 h-full">
          <Card className="h-full">
            <Title>YoY Profit Margin</Title>
            <AreaChart
              showAnimation
              animationDuration={2000}
              className="h-[300px] mt-4"
              data={YOYProfitMargin}
              index="year"
              categories={["Revenue", "Profit"]}
              colors={["blue", "red"]}
              yAxisWidth={30}
            />
          </Card>
        </div>
      </div>

      <div className="w-full mt-4">
        <Card className="w-full">
          <Title>Current Area of spending (%)</Title>
          {/* <Flex className="mt-4">
            <Text>
              <Bold>Reason</Bold>
            </Text>
            <Text>
              <Bold>%</Bold>
            </Text>
          </Flex> */}
          <BarList
            showAnimation
            data={
              assignColors(AreaOfSpending,  ['cyan', 'green', 'yellow', 'pink', 'red', 'sky'])
            }
            className="mt-2"
            valueFormatter={(val) => `${val} %`}
          />
        </Card>
      </div>

      <div className="w-full mt-4">
        <Card>
          <EarnNBurnChart data={CurrentLocationWiseEarnBurnRate} />
        </Card>
      </div>
    </div>
  );
}
