'use client';
import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const colors = ['cyan', 'green', 'yellow', 'pink', 'red', 'sky']

const data = [
    {
        name: "Salary",
        value: 30,
    },
    {
        name: "Perfomance Issues",
        value: 25, 
    },
    {
        name: "Better Opportunity",
        value: 15,
    },
    {
        name: "Client Rejection",
        value: 15,
    },
    {
        name: "Attitude and Integrity Issue",
        value: 10,
    },
    {
        name: "Location Change",
        value: 5,
    },
];

function assignColors(data, colors) {
    return data?.map?.((item, index) => {
        return {
            ...item,
            color: colors[index % colors.length] // Assign color based on index
        };
    });
}

export default function AttritionReason() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['ReasonForAttrition']
    return (
        <Card className="w-full">
            <Title>Reason For Attrition (%)</Title>
            <Flex className="mt-4">
                <Text>
                    <Bold>Reason</Bold>
                </Text>
                <Text>
                    <Bold>%</Bold>
                </Text>
            </Flex>
            <BarList  data={assignColors(data, colors)} className="mt-2" />
        </Card>
    )
};