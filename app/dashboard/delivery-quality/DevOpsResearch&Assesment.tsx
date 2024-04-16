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
} from "@tremor/react";
import { useSession } from "next-auth/react";
import { useGetResource } from "@/utils/http";

const data = [
  {
    Metric: "Deployment frequency per week",
    Project1: 2,
    Project2: 8,
    Project3: 4,
    Average: 4.67,
  },
  {
    Metric: "Lead time for change",
    Project1: 11,
    Project2: 9,
    Project3: 12,
    Average: 10.67,
  },
  {
    Metric: "Time to restore services in Days",
    Project1: 6,
    Project2: 3,
    Project3: 2,
    Average: 3.67,
  },
  {
    Metric: "Change failure rate",
    Project1: "12%",
    Project2: "17%",
    Project3: "26%",
    Average: "18%",
  },
];

export default function DevOpsResearchAssessment() {
  const user = useSession().data?.user as any
  const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
  const data = dataset?.sheetData?.['DevOpsResearch&Assessment']
  return (
    <Table>
      <TableHead>
        <TableRow style={{ borderBottom: '1px' }}>
          <TableHeaderCell className="text-right"></TableHeaderCell>
          <TableHeaderCell className="text-right">Project 1</TableHeaderCell>
          <TableHeaderCell className="text-right">Project 2</TableHeaderCell>
          <TableHeaderCell className="text-right">Project 3</TableHeaderCell>
          <TableHeaderCell className="text-right">Average</TableHeaderCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data?.map?.((item, id) => (
          <TableRow key={id}>
            <TableCell>{item?.Metric}</TableCell>
            <TableCell className="text-right">{item?.Project1}</TableCell>
            <TableCell className="text-right">{item?.Project2}</TableCell>
            <TableCell className="text-right">{item?.Project3}</TableCell>
            <TableCell className="text-right">{item?.Average}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
