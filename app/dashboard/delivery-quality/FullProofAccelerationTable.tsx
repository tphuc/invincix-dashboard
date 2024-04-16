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


const data = [
    {
        "year": 2017,
        "AutomationCoverage": 20,
        "VulnerabilityPercentage": 80,
        "AutoscaleFrequency": 0
    },
    {
        "year": 2018,
        "AutomationCoverage": 30,
        "VulnerabilityPercentage": 80,
        "AutoscaleFrequency": 0
    },
    {
        "year": 2019,
        "AutomationCoverage": 30,
        "VulnerabilityPercentage": 85,
        "AutoscaleFrequency": 0
    },
    {
        "year": 2020,
        "AutomationCoverage": 50,
        "VulnerabilityPercentage": 85,
        "AutoscaleFrequency": 20
    },
    {
        "year": 2021,
        "AutomationCoverage": 60,
        "VulnerabilityPercentage": 88,
        "AutoscaleFrequency": 25
    },
    {
        "year": 2022,
        "AutomationCoverage": 86,
        "VulnerabilityPercentage": 90,
        "AutoscaleFrequency": 18
    },
    {
        "year": 2023,
        "AutomationCoverage": 88,
        "VulnerabilityPercentage": 92,
        "AutoscaleFrequency": 12
    }
]


export default function FullProofAccelerationTable() {
    return <Table className="mt-6">
        <TableHead>
            <TableRow>
                <TableHeaderCell >Year</TableHeaderCell>
                <TableHeaderCell className="text-right">Automation Coverage (%)</TableHeaderCell>
                <TableHeaderCell className="text-right">Vulnerability Percentage (%)</TableHeaderCell>
                <TableHeaderCell className="text-right">Autoscale Frequency (%)</TableHeaderCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {data.map((item, id) => (
                <TableRow key={id}>
                    <TableCell>{item.year}</TableCell>
                    <TableCell className="text-right">{item.AutomationCoverage}</TableCell>
                    <TableCell className="text-right">{item.VulnerabilityPercentage}</TableCell>
                    <TableCell className="text-right">{item.AutoscaleFrequency}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
}