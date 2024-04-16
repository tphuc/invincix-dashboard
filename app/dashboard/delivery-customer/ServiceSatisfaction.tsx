'use client';
import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import '../chart.css'
import { useGetResource } from "@/utils/http";
import { useSession } from "next-auth/react";
const data = [
    {
        name: "Very Satisfied",
        value: 36,
        "Very Satisfied": 36
    },
    {
        name: "Satisfied",
        value: 31,
        "Satisfied": 36
    },
    {
        name: "Not Sure",
        value: 21,
        "Not Sure": 21
    },
    {
        name: "Not Satisfied",
        value: 11,
        "Not Satisfied": 11

    },
    {
        name: "Hate it",
        value: 6,
        "Hate it": 6
    },
   
];

// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();



export default function ServiceSatisfaction() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['ServiceSatisfaction']
    return (
        <Card className="relative w-full h-full">
            <Flex>
                <div>
                    <Title>Service Satisfaction</Title>
                </div>
              
            </Flex>


            <BarChart
                layout="horizontal"
                className="w-full"
                showAnimation
                animationDuration={2000}
                data={data?.map?.(item => ({
                    name: item?.name,
                    value: item?.value,
                    [item?.name]: item?.value
                }))}
                index="name"
                categories={["Very Satisfied", "Satisfied", "Not Sure", "Not Satisfied", "Hate it"]}
                // colors={["sky", "violet"]}
                colors={["green", "teal","purple", "yellow", "orange"]}
                // valueFormatter={valueFormatter}
                stack={true}
                // yAxisWidth={10}
            />
        </Card>
    );
}