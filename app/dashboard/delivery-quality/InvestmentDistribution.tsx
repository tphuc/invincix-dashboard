import { Card, Title, BarChart, Text, Flex, Metric, AreaChart } from "@tremor/react";
import { User } from "lucide-react";
const data = [
 
  {
    "year": 2020,
    "AnalysisAndDesign": 6,
    "EarlyShowAndTell": 2,
    "FeatureDevelopment": 60,
    "ContinuousIntegrationAndDeployment": 2,
    "UATFixes": 15,
    "SupportFixes": 15
  },
  {
    "year": 2021,
    "AnalysisAndDesign": 8,
    "EarlyShowAndTell": 5,
    "FeatureDevelopment": 58,
    "ContinuousIntegrationAndDeployment": 2,
    "UATFixes": 12,
    "SupportFixes": 15
  },
  {
    "year": 2022,
    "AnalysisAndDesign": 10,
    "EarlyShowAndTell": 11,
    "FeatureDevelopment": 55,
    "ContinuousIntegrationAndDeployment": 3,
    "UATFixes": 10,
    "SupportFixes": 11
  },
  {
    "year": 2023,
    "AnalysisAndDesign": 15,
    "EarlyShowAndTell": 15,
    "FeatureDevelopment": 50,
    "ContinuousIntegrationAndDeployment": 5,
    "UATFixes": 10,
    "SupportFixes": 5
  },
]




export default function InvestmentDistribution() {
    return (
        <Card className="relative w-full grid h-full">
            <Flex>
                <div>
                    <Title>Investment Distribution</Title>
                </div>

            </Flex>
            <div className="w-full overflow-x-scroll scrollbar-hide">

                <BarChart
                  
                    data={data}
                    index="year"
                    showGridLines
                    showYAxis
                    showXAxis
       
                    categories={["AnalysisAndDesign", "EarlyShowAndTell", "FeatureDevelopment", "ContinuousIntegrationAndDeployment", "UATFixes", "SupportFixes"]}
                    colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
                    stack={true}
                />
            </div>
        </Card>
    );
}