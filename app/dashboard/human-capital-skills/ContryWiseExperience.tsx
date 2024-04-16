'use client';
import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const data = [
    {
        'name': '>20 Years',
        'India': 4,
        'Vietnam': 0,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 2
    },
    {
        'name': '10-20 Years',
        'India': 5,
        'Vietnam': 0,
        'Bangladesh': 0,
        'Singapore': 0,
        'UK': 1
    },
    {
        'name': '7-10 Years',
        'India': 11,
        'Vietnam': 0,
        'Bangladesh': 1,
        'Singapore': 0,
        'UK': 0
    },
    {
        'name': '5-7 Years',
        'India': 13,
        'Vietnam': 1,
        'Bangladesh': 0,
        'Singapore': 1,
        'UK': 0
    },
    {
        'name': '2-5 Years',
        'India': 18,
        'Vietnam': 11,
        'Bangladesh': 10,
        'Singapore': 0,
        'UK': 0
    },
    {
        'name': '0-2 Years',
        'India': 20,
        'Vietnam': 4,
        'Bangladesh': 2,
        'Singapore': 0,
        'UK': 0
    },
 
  
   
    

]

// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function CountryWiseExperience() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['ExperienceByCountry']
    return (
        <Card className="relative w-full h-full">
            <Flex>
                <div>
                    {/* <Title>Gender Demographic</Title> */}
                    <Title>Experience By Country</Title>
                </div>
                {/* <div>
                    <Title className="flex items-center gap-2">Total <User/> </Title>
                    <Metric>105 </Metric>
                </div> */}
            </Flex>


            <BarChart
                layout="vertical"
                className="w-full"
                data={data}
                showAnimation={true}
                yAxisWidth={80}
                index="name"
                categories={["India", "Vietnam", "Bangladesh", "Singapore", "UK"]}
                colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
                // valueFormatter={valueFormatter}
                stack={true}
            />
        </Card>
    );
}