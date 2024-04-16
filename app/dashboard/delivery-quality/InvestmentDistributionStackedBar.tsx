"use client";
import {
  Card,
  Title,
  BarChart,
  Text,
  Flex,
  Metric,
  LineChart,
  AreaChart,
  Select,
  SelectItem,
} from "@tremor/react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "ag-charts-enterprise";
const AgChartsReact = dynamic(() =>
  import("ag-charts-react")?.then((m) => m.AgChartsReact)
);

const _data = [
  {
    year: 2020,
    AnalysisAndDesign: 6,
    EarlyShowAndTell: 2,
    FeatureDevelopment: 60,
    ContinuousIntegrationAndDeployment: 2,
    UATFixes: 15,
    SupportFixes: 15,
  },
  {
    year: 2021,
    AnalysisAndDesign: 8,
    EarlyShowAndTell: 5,
    FeatureDevelopment: 58,
    ContinuousIntegrationAndDeployment: 2,
    UATFixes: 12,
    SupportFixes: 15,
  },
  {
    year: 2022,
    AnalysisAndDesign: 10,
    EarlyShowAndTell: 11,
    FeatureDevelopment: 55,
    ContinuousIntegrationAndDeployment: 3,
    UATFixes: 10,
    SupportFixes: 11,
  },
  {
    year: 2023,
    AnalysisAndDesign: 15,
    EarlyShowAndTell: 15,
    FeatureDevelopment: 50,
    ContinuousIntegrationAndDeployment: 5,
    UATFixes: 10,
    SupportFixes: 5,
  },
];

const data = _data?.reverse();

const CateColors = [];

const filterBySelection = (selection, data) =>
  selection === "All" ? data : data.filter((city) => city.year === selection);
// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function InvestmentDistributonStackedBar() {
  const [selection, setSelection] = useState<any>("All");
  const [filterData, setFilterData] = useState<any>(data);

  useEffect(() => {
    setFilterData(filterBySelection(selection, data));
  }, [selection]);

  return (
    <Card className="relative w-full grid h-full">
      <div className="w-full overflow-x-scroll scrollbar-hide mt-2">
        <AgChartsReact
          options={{
            title: {
              text: "Investment Distribution",
              color: "white",
            },
            background: {
              visible: false,
              fill: "rgba(0,0,0, 0)",
            },
            legend: {
              item: {
                label: {
                  color: "#fff",
                },
              },
            },
            height: 400,
            data: data,
            series: [
              {
                type: "bar",
                xKey: "year",
                direction: "horizontal",
                yKey: "AnalysisAndDesign",
                yName: "Analysis And Design",
                stacked: true,
                label: {
                  color: "white",
                },
              },
              {
                type: "bar",
                xKey: "year",
                direction: "horizontal",
                yKey: "EarlyShowAndTell",
                yName: "Early Show And Tell",
                stacked: true,
                label: {
                  color: "white",
                },
              },
              {
                type: "bar",
                xKey: "year",
                direction: "horizontal",
                yKey: "FeatureDevelopment",
                yName: "Feature Development",

                stacked: true,
                label: {
                  color: "white",
                },
              },
              {
                type: "bar",
                xKey: "year",
                direction: "horizontal",
                yKey: "ContinuousIntegrationAndDeployment",
                yName: "CI/CD",
                stacked: true,
                label: {
                  color: "white",
                },
              },
              {
                type: "bar",
                xKey: "year",
                direction: "horizontal",
                yKey: "UATFixes",
                yName: "UAT Fixes",
                stacked: true,
                label: {
                  color: "white",
                },
              },
              {
                type: "bar",
                xKey: "year",
                direction: "horizontal",
                yKey: "SupportFixes",
                yName: "Support Fixes",
                stacked: true,
                label: {
                  color: "white",
                },
              },
            ],
            axes: [
              {
                type: "category",
                label: {
                  color: "white",
                },
                // paddingOuter: 1,
                // paddingInner:1,
                gridLine: {
                  style: [
                    {
                      stroke: "gray",
                    },
                  ],
                },

                line: {
                  width: 1,
                  color: "rgba(255,255,255,0.1)",
                },
              },
              {
                type: "number",
                label: {
                  color: "white",
                },
                line: {
                  width: 1,
                  color: "rgba(255,255,255, 0.5)",
                },
                gridLine: {
                  style: [
                    {
                      stroke: "transparent",
                    },
                  ],
                },
              },
            ],
          }}
        />
      </div>
    </Card>
  );
}
