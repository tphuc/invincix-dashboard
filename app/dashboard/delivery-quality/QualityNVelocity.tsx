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
        "metric": "Quality",
        "Duration in Weeks": 34,
        "Average Resources": 9,
        "Code Review": 8,
        "Test Plan review": 2,
        "Test Case review": 11,
        "Post Production Defects": 9,
        Budget: 1
    },
    {
        "metric": "Velocity",
        "Duration in Weeks": 26,
        "Average Resources": 8,
        "Code Review": 3,
        "Test Plan review": 1,
        "Test Case review": 4,
        "Post Production Defects": 38,
        Budget: 1.27
  
    },
   
]


export default function QualityNVelocity() {
    return <Table className="mt-6">
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
    </Table>
}