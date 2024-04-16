import { Card, Metric, Text, Title, BarList, Flex, Grid } from "@tremor/react";



const data =
{
    category: "Reason for",
    stat: "26",
    data: [
        { name: "Salary", value: 2 },
        { name: "Experience", value: 8 },
        { name: "Technical", value: 4 },
        { name: "Culture", value: 1 },
        { name: "Other", value: 8 },
    ],
}


const valueFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}`;

export default function CandidateDecline() {
    return (

        <Card className="dark:bg-gray-900/50 dark:hover:bg-gray-900/80" key={data.category}>
            <Title>{data.category}</Title>
            <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
                <Metric>{data.stat}</Metric>
                <Text>Total</Text>
            </Flex>
            <Flex className="mt-6">
                <Text>Reasons</Text>
                <Text className="text-right"></Text>
            </Flex>
            <BarList
                data={data.data}
                valueFormatter={valueFormatter}
                className="mt-2"
            />
        </Card>


    );
}