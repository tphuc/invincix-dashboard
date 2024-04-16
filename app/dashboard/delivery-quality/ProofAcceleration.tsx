import {
  Card,
  Title,
  BarChart,
  Text,
  Flex,
  Metric,
  AreaChart,
} from "@tremor/react";
import { User } from "lucide-react";

const data = [
  {
    year: 2017,
    "Automation Coverage": 20,
    "Vulnerability Percentage": 80,
    "Autoscale Frequency": 0,
  },
  {
    year: 2018,
    "Automation Coverage": 30,
    "Vulnerability Percentage": 80,
    "Autoscale Frequency": 0,
  },
  {
    year: 2019,
    "Automation Coverage": 30,
    "Vulnerability Percentage": 85,
    "Autoscale Frequency": 0,
  },
  {
    year: 2020,
    "Automation Coverage": 50,
    "Vulnerability Percentage": 85,
    "Autoscale Frequency": 20,
  },
  {
    year: 2021,
    "Automation Coverage": 60,
    "Vulnerability Percentage": 88,
    "Autoscale Frequency": 25,
  },
  {
    year: 2022,
    "Automation Coverage": 86,
    "Vulnerability Percentage": 90,
    "Autoscale Frequency": 18,
  },
  {
    year: 2023,
    "Automation Coverage": 88,
    "Vulnerability Percentage": 92,
    "Autoscale Frequency": 12,
  },
];

export default function ProofAcceleration() {
  return (
    <Card className="relative w-full space-y-4 h-full">
      <Title>Full Proof Acceleration</Title>

      <div className="w-full overflow-x-scroll scrollbar-hide">
        <AreaChart
          data={data}
          index="year"
          showGridLines
          showYAxis
          showXAxis
          categories={[
            "Automation Coverage",
            "Vulnerability Percentage",
            "Autoscale Frequency",
          ]}
          colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
          stack={false}
        />
      </div>
    </Card>
  );
}
