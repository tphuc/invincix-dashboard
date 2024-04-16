import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import '../chart.css'
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";
const data = [
    {
        name: "Job Boards",
        value: 31,
        "Job Boards": 31
    },
    {
        name: "Website",
        value: 28,
        "Website": 28
    },
    {
        name: "Social Media",
        value: 21,
        "Social Media": 21
    },
    {
        name: "Referrals",
        value: 20,
        "Referrals": 20

    },
  
   
];

// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function ApplicationRecievedBySource() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['ApplicationsRecievedBySource']
    return (
        <Card className="relative w-full h-full">
            <Flex>
                <div>
                    <Title>Applications Recieved By Source</Title>
                </div>
              
            </Flex>


            <BarChart
                layout="horizontal"
                className="w-full"
                showAnimation
                animationDuration={2000}
                data={data}
                index="name"
                categories={["value"]}
                // colors={["sky", "violet"]}
                colors={["green", "teal","purple", "yellow", "orange"]}
                // valueFormatter={valueFormatter}
                stack={true}
                // yAxisWidth={10}
            />
        </Card>
    );
}