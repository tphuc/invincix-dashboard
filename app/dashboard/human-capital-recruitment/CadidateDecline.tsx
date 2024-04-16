import { Card, Metric, Text, Title, BarList, Flex, Grid } from "@tremor/react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";



const data =
{
    category: "Reason for Withdrawal",
    stat: "26",
    data: [
        { name: "Compensation", value: 49, color:"blue" },
        { name: "Client Rejection", value: 15, color:"indigo" },
        { name: "Technical Capability", value: 20, color:"teal" },
        { name: "Culture", value: 1, color:"cyan" },
        { name: "Other", value: 15, color:"amber" },
    ],
}

function assignColors(data, colors) {
    return data?.map?.((item, index) => {
        return {
            ...item,
            color: colors[index % colors.length] // Assign color based on index
        };
    });
}

const valueFormatter = (number) => `${number} %`;

export default function CandidateDecline() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['ReasonForWithdrawal']
    console.log(28, data)
    return (
        

            <Card  key={data.category}>
                <Title>{data.category}</Title>
                <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
                    <Metric>{data.stat}</Metric>
                    {/* <Text>Total</Text> */}
                </Flex>
                <Flex className="mt-6">
                    <Text>Reasons</Text>
                    <Text className="text-right"></Text>
                </Flex>
                <BarList
                    data={assignColors(data, ['cyan', 'green', 'yellow', 'pink', 'red', 'sky'])}
                    valueFormatter={valueFormatter}
                    className="mt-2"
                />
            </Card>


    );
}