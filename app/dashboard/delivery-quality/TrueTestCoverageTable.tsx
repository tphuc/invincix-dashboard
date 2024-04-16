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
        "BuildQuarter": "Buid-1-YQ1",
        "UnitTest": 45,
        "RegressionTest": 23,
        "FunctionalTest": 37,
        "UAT": 63,
        // "Total": 168
      },
      {
        "BuildQuarter": "Buid-1-YQ2",
        "UnitTest": 57,
        "RegressionTest": 26,
        "FunctionalTest": 29,
        "UAT": 52,
        // "Total": 164
      },
      {
        "BuildQuarter": "Buid-1-YQ3",
        "UnitTest": 64,
        "RegressionTest": 24,
        "FunctionalTest": 27,
        "UAT": 39,
        // "Total": 147
      },
      {
        "BuildQuarter": "Buid-1-YQ4",
        "UnitTest": 77,
        "RegressionTest": 22,
        "FunctionalTest": 24,
        "UAT": 28,
        // "Total": 151
      }
]


export default function TrueTestCoverageTable() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['TrueTestCoverage']
    return <Table className="mt-6">
        <TableHead>
            <TableRow>
                <TableHeaderCell >Build Quarter</TableHeaderCell>
                <TableHeaderCell className="text-right">Unit Test</TableHeaderCell>
                <TableHeaderCell className="text-right">Regression Test</TableHeaderCell>
                <TableHeaderCell className="text-right">Functional Test</TableHeaderCell>
                <TableHeaderCell className="text-right">UAT</TableHeaderCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {data?.map?.((item, id) => (
                <TableRow key={id}>
                    <TableCell>{item?.['BuildQuarter']}</TableCell>
                    <TableCell className="text-right">{item?.['Unit Test']}</TableCell>
                    <TableCell className="text-right">{item?.['Regression Test']}</TableCell>
                    <TableCell className="text-right">{item?.['Functional Test']}</TableCell>
                    <TableCell className="text-right">{item?.['UAT']}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
}