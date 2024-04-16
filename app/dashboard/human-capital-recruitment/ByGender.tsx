import { cn } from "@/lib/utils";

import { Bold, Card, DonutChart, ListItem, Text, Title, List, Flex } from "@tremor/react";

export default function ByGender(){
    return <Card className='dark:bg-gray-900/50 dark:hover:bg-gray-900'>
    <Title>By Genders</Title>
    <div className="grid grid-cols-1 md:grid-cols-2">
    <DonutChart
        data={[
            {
                gender: "Male",
                count: 500,
                share: "53.9%",
            },
            {
                gender: "Female",
                count: 400,
                share: "31.1%",
            },

        ]}
        index="gender"
        category="count"
        variant="pie"
        showTooltip={true}
        colors={["indigo", "violet", "fuchsia"]}
        className="h-20 w-full"
    />
    <List className="w-full">
        {[
            {
                gender: "Male",
                count: 500,
                share: "53.9%",
            },
            {
                gender: "Female",
                count: 400,
                share: "31.1%",
            },

        ].map((data) => (
            <ListItem key={data.gender} className="space-x-2">
                <div className="flex items-center space-x-2 truncate">
                    <span
                        className={cn(
                            data.gender === "Male"
                                ? "bg-indigo-500"
                                : data.gender === "Female"
                                    ? "bg-violet-500"
                                    : "",
                            "h-2.5 w-2.5 rounded-sm flex-shrink-0",
                        )}
                    />

                    <span className="truncate">{data?.gender}</span>
                </div>
                <div className='flex min-w-[160px] items-center justify-between gap-4'>
                    <Title>{data?.count} </Title>
                    <span>{data.share}</span>
                </div>
            </ListItem>
        ))}
    </List>
    </div>
</Card>
}