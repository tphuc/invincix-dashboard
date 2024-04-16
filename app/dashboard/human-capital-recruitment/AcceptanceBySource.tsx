import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import '../chart.css'
const data = [
    
    {
        source: "Job board",
        value: 31,
       
    },
    {
        source: "Website",
        value: 28,
       
    },
    
    {
        source: "Social Media",
        value: 21,


    },
    {
        source: "Referral",
        value: 20,

    },
   
];

// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function AcceptanceBySource() {
    return (
        <Card className="relative w-full">
            <Flex>
                <div>
                    <Title>Source of Application</Title>
                    {/* <Text>Gender by country</Text> */}
                </div>
              
            </Flex>


            <BarChart
                layout="vertical"
                className="w-full"
                
                data={data}
                index="source"
                categories={["value"]}
                // colors={["sky", "violet"]}
                colors={["lime", "cyan","sky", "slate", "violet"]}
                // valueFormatter={valueFormatter}
                stack={true}
                // yAxisWidth={10}
            />
        </Card>
    );
}