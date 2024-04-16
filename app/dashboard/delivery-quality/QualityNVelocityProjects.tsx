'use client';
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  MultiSelect,
  MultiSelectItem,
  Flex,
  Text,
  Title,
  Metric,
  Bold,
} from "@tremor/react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const data = [
  { Metric: "Duration in Weeks", "High Quality Project": 34, "High Velocity Project": 26 },
  { Metric: "Average Resources", "High Quality Project": 9, "High Velocity Project": 8 },
  { Metric: "Code Review Cycle", "High Quality Project": 8, "High Velocity Project": 3 },
  { Metric: "Test Plan Review Cycle", "High Quality Project": 2, "High Velocity Project": 1 },
  { Metric: "Test Case Review Cycle", "High Quality Project": 11, "High Velocity Project": 4 },
  { Metric: "Post Production Defects", "High Quality Project": 9, "High Velocity Project": 38 },
  { Metric: "Budget", "High Quality Project": 1.27, "High Velocity Project": 1 }
]

const colors: any[] = ['cyan', 'green', 'yellow', 'orange', 'purple', 'sky', 'blue']

export default function QualityNVelocityProjects() {
  const user = useSession().data?.user as any
  const { data: dataset, isLoading } = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['VelocityVsQuality']
  console.log(data)
  return (
    <Card className="grid grid-cols-2 gap-4">

      <div className="col-span-2">
        <Title>
          Velocity vs Quality
        </Title>
      </div>

      <Card decoration="top" decorationColor="rose" className="col-span-2">
        <Flex>
          <Title>Sample Project Size</Title>
          <Metric>2</Metric>
        </Flex>
      </Card>


      <Card decoration="top" decorationColor="blue" className="space-y-3">
        <Bold>
          Project 1 (High Velocity Project)
        </Bold>

        {data?.map?.((item, id) =>  <Flex key={id}>
          <Text color={colors[id % colors.length]}>{item?.['Metric']}</Text>
          <Text color={colors[id % colors.length]}>{item?.['High Velocity Project']}</Text>
        </Flex>)}

  

        {/* <Table className="mt-6">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell ></TableHeaderCell>
                        <TableHeaderCell className="text-right">Duration in Weeks</TableHeaderCell>
                        <TableHeaderCell className="text-right">Average Resources</TableHeaderCell>
                        <TableHeaderCell className="text-right">Code Review</TableHeaderCell>
                        <TableHeaderCell className="text-right">Test Plan review</TableHeaderCell>
                        <TableHeaderCell className="text-right">Test Case review</TableHeaderCell>
                        <TableHeaderCell className="text-right">Post Production Defects</TableHeaderCell>
                        <TableHeaderCell className="text-right">Budget</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((item, id) => (
                        <TableRow key={id}>
                            <TableCell>{item.metric}</TableCell>
                            <TableCell className="text-right">{item["Duration in Weeks"]}</TableCell>
                            <TableCell className="text-right">{item["Average Resources"]}</TableCell>
                            <TableCell className="text-right">{item["Code Review"]}</TableCell>
                            <TableCell className="text-right">{item["Test Plan review"]}</TableCell>
                            <TableCell className="text-right">{item["Test Case review"]}</TableCell>
                            <TableCell className="text-right">{item["Post Production Defects"]}</TableCell>
                            <TableCell className="text-right">{item["Budget"]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table> */}
      </Card>
      <Card decoration="top" decorationColor="teal" className="space-y-3">
        <Bold>
          Project 2 (High Quality Project)
        </Bold>
        
        {data?.map?.((item: any, id: any) =>  <Flex key={id}>
          <Text  color={colors[id % colors.length]}>{item?.['Metric']}</Text>
          <Text color={colors[id % colors.length]} >{item?.['High Velocity Project']}</Text>
        </Flex>)}
      </Card>
    </Card>
  );
}
