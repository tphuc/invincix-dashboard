import { Card, Title, BarChart, Text, Flex, Metric } from "@tremor/react";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const data = [
    {
        'skill': 'Block Chain',
        'India': 8,
        'Vietnam': 8,
        'Bangladesh': 8,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'HR',
        'India': 4,
        'Vietnam': 4,
        'Bangladesh': 4,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'Enteprise Java',
        'India': 8,
        'Vietnam': 6,
        'Bangladesh': 7,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'Account & Finance',
        'India': 3,
        'Vietnam': 8,
        'Bangladesh': 7,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'AI / ML',
        'India': 12,
        'Vietnam': 8,
        'Bangladesh': 16,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'Lowcode / Nocode',
        'India': 8,
        'Vietnam': 6,
        'Bangladesh': 20,
        // 'Singapore': 1,
        // 'UK': 2
    },
    {
        'skill': 'Saleforce',
        'India': 12,
        'Vietnam': 8,
        'Bangladesh': 12,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'Sales & Marketing',
        'India': 3,
        'Vietnam': 2,
        'Bangladesh': 6,
        // 'Singapore': 0,
        // 'UK': 2
    },
    {
        'skill': 'Enteprise .Net',
        'India': 10,
        'Vietnam': 10,       
        'Bangladesh': 8,
        // 'Singapore': 1,
        // 'UK': 2
    },
    {
        'skill': 'Cloud & DevOps',
        'India': 8,
        'Vietnam': 6,
        'Bangladesh': 6,
        // 'Singapore': 1,
        // 'UK': 2
    },
    {
        'skill': 'Operations',
        'India': 3,
        'Vietnam': 3,
        'Bangladesh': 3,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'ODOO',
        'India': 10,
        'Vietnam': 6,
        'Bangladesh': 8,
        // 'Singapore': 1,
        // 'UK': 2
    },
    {
        'skill': 'QC',
        'India': 4,
        'Vietnam': 6,
        'Bangladesh': 8,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'UX',
        'India': 4,
        'Vietnam': 2,
        'Bangladesh': 6,
        // 'Singapore': 0,
        // 'UK': 0
    },

    {
        'skill': 'Database',
        'India': 6,
        'Vietnam': 8,
        'Bangladesh':10,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'Analytics & Reporting',
        'India': 8,
        'Vietnam': 8,
        'Bangladesh': 16,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'Mobility',
        'India': 4,
        'Vietnam': 4,
        'Bangladesh': 6,
        // 'Singapore': 0,
        // 'UK': 0
    },
    {
        'skill': 'MERN & Mean',
        'India': 4,
        'Vietnam': 3,
        'Bangladesh': 6,
        // 'Singapore': 0,
        // 'UK': 0
    },

]

// const valueFormatter = (number) => Intl.NumberFormat("us").format(number).toString();

export default function SkillMatrixExperiences() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['ElapsedTimeForRecruitmentInWeek']

    return (
        <Card className="relative w-full grid h-full">
            <Flex>
                <div>
                    <Title>Elapsed Time For Recruitment In Weeks</Title>
                </div>

            </Flex>
            <div className="w-full overflow-x-scroll scrollbar-hide">

                <BarChart
                    layout="horizontal"
                    // className="w-[15000px] h-[500px]"
                    showAnimation={true}
                    data={data}
                    index="skill"
                    showGridLines
                    showYAxis={false}
                    // showXAxis
                    rotateLabelX={{
                        angle:-90,
                        verticalShift:60,
                        xAxisHeight: 120
                    }}
                    categories={["India", "Vietnam", "Bangladesh"]}
                    colors={["cyan", "rose", "green", "yellow", "blue", "slate"]}
                    // valueFormatter={valueFormatter}
                    stack={false}
                />
            </div>
        </Card>
    );
}