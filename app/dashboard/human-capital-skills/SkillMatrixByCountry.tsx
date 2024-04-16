
'use client';
import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const data = [
    { 'category': 'Block Chain', 'Vietnam': 0, 'India': 1, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'HR', 'Vietnam': 0, 'India': 1, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Enterprise Java', 'Vietnam': 1, 'India': 0, 'Bangladesh': 1, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Accounts & Finance', 'Vietnam': 0, 'India': 2, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'AI / ML', 'Vietnam': 1, 'India': 2, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Lowcode / No Code', 'Vietnam': 0, 'India': 3, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Salesforce', 'Vietnam': 1, 'India': 2, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Sales & Marketing', 'Vietnam': 1, 'India': 0, 'Bangladesh': 0, 'Singapore': 0, 'UK': 2 },
    { 'category': 'Enterprise .Net', 'Vietnam': 1, 'India': 4, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Cloud and DevOps', 'Vietnam': 1, 'India': 3, 'Bangladesh': 1, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Operations', 'Vietnam': 1, 'India': 2, 'Bangladesh': 1, 'Singapore': 0, 'UK': 1 },
    { 'category': 'ODOO', 'Vietnam': 1, 'India': 2, 'Bangladesh': 2, 'Singapore': 2, 'UK': 0 },
    { 'category': 'Quality Certification', 'Vietnam': 1, 'India': 7, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'UX', 'Vietnam': 1, 'India': 6, 'Bangladesh': 2, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Database', 'Vietnam': 0, 'India': 10, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Analytics and Reporting', 'Vietnam': 0, 'India': 10, 'Bangladesh': 0, 'Singapore': 0, 'UK': 0 },
    { 'category': 'Mobility', 'Vietnam': 2, 'India': 7, 'Bangladesh': 3, 'Singapore': 0, 'UK': 0 },
    { 'category': 'MERN & Mean / Open Source', 'Vietnam': 4, 'India': 9, 'Bangladesh': 3, 'Singapore': 0, 'UK': 0 },
    // { 'category': 'Total', 'Vietnam': 16, 'India': 71, 'Bangladesh': 13, 'Singapore': 2, 'UK': 3 },
]

// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function SkillMatrixExperiences() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['CountryWiseSkillMatrix']
    return (
        <Card className="relative w-full grid h-full">

            <Title>Country Wise - Skill Matrix</Title>



            <div className="w-full overflow-x-scroll scrollbar-hide">

                <BarChart
                    layout="horizontal"
                    // className="w-[15000px] h-[500px]"
                    data={data}
                    index="category"
                    showGridLines
                    showYAxis
                    showXAxis
                    showAnimation={true}
                    animationDuration={2000}
                    rotateLabelX={{
                        angle: -90,
                        verticalShift: 80,
                        xAxisHeight: 120
                    }}
                    categories={["India", "Vietnam", "Bangladesh", "Singapore", "UK"]}
                    colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
                    // valueFormatter={valueFormatter}
                    stack={true}
                />
            </div>
        </Card>
    );
}