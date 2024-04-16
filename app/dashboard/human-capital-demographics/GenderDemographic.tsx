'use client';
import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useGetResource, useRequestAuthenticated } from "@/utils/http";

const data = [
    
    {
        country: "India",
        "Male": 63,
        "Female": 8,
    },
    {
        country: "Vietnam",
        "Male": 14,
        "Female": 2,
    },
    {
        country: "Bangladesh",
        "Male": 11,
        "Female": 2,
    },
    {
        country: "Singapore",
        "Male": 2,
        "Female": 0,
    },
    {
        country: "UK",
        "Male": 2,
        "Female": 1,
    },
];

function calculateTotalPeople(data) {
    let totalPeople = 0;

    // Iterate over each entry and sum up male and female counts
    data?.forEach(entry => {
        totalPeople += entry.Male + entry.Female;
    });

    return totalPeople;
}
// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function GenderDemographic() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['GenderGeography']
   
    return (
        <Card className="relative w-full h-full">
            <Flex>
                <div>
                    <Title>Gender / Geography</Title>
                    {/* <Text>Gender by country</Text> */}
                </div>
                <div className="flex items-center gap-4">
                    <Metric>{calculateTotalPeople(data)}</Metric>
                    <Text>Total Resources</Text>
                </div>
            </Flex>

        
            <BarChart
                layout="vertical"
                className="w-full"
                showAnimation={true}
                animationDuration={2000}
                data={data}
                yAxisWidth={80}
                index="country"
                categories={["Male", "Female"]}
                colors={["sky", "violet"]}
                // valueFormatter={valueFormatter}
                stack={true}
            />
        </Card>
    );
}