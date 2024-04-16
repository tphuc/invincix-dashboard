import { useState } from "react";
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
  Badge,
} from "@tremor/react";

const salesPeople = [
  {
    name: "Peter Doe",
    email:"example@gmail.com",
    appliedAt: '8 Jan, 2024',
    leads: 45,
    sales: "1,000,000",
    quota: "1,200,000",
    variance: "low",
    region: "Region A",
    status: "ininiated",
    deltaType: "moderateIncrease",
  },
  {
    name: "Lena Whitehouse",
    email:"example@gmail.com",
    appliedAt: '8 Jan, 2024',
    leads: 35,
    sales: "900,000",
    quota: "1,000,000",
    variance: "low",
    region: "Region B",
    status: "qualified",
    deltaType: "unchanged",
  },
  {
    name: "Phil Less",
    email:"example@gmail.com",
    appliedAt: '8 Jan, 2024',
    leads: 52,
    sales: "930,000",
    quota: "1,000,000",
    variance: "medium",
    region: "Region C",
    status: "interviewed",
    deltaType: "moderateDecrease",
  },
  {
    name: "John Camper",
    email:"example@gmail.com",
    appliedAt: '8 Jan, 2024',
    leads: 22,
    sales: "390,000",
    quota: "250,000",
    variance: "low",
    region: "Region A",
    status: "offer sent",
    deltaType: "increase",
  },
  {
    name: "Max Balmoore",
    email:"example@gmail.com",
    appliedAt: '8 Jan, 2024',
    leads: 49,
    sales: "860,000",
    quota: "750,000",
    variance: "low",
    region: "Region B",
    status: "offer sent",
    deltaType: "increase",
  },
  {
    name: "Peter Moore",
    email:"example@gmail.com",
    appliedAt: '8 Jan, 2024',
    leads: 82,
    sales: "1,460,000",
    quota: "1,500,000",
    variance: "low",
    region: "Region A",
    status: "qualified",
    deltaType: "unchanged",
  },
  {
    name: "Joe Sachs",
    email:"example@gmail.com",
    appliedAt: '8 Jan, 2024',
    leads: 49,
    sales: "1,230,000",
    quota: "1,800,000",
    variance: "medium",
    region: "Region B",
    status: "shortlisted",
    deltaType: "moderateDecrease",
  },
];

export default function CandidateTable() {
  const [selectedNames, setSelectedNames] = useState([]);

  const isSalesPersonSelected = (salesPerson) =>
    selectedNames.includes(salesPerson.name) || selectedNames.length === 0;

  return (
    <Card className="dark:bg-gray-900/50 dark:hover:bg-gray-900">
      <MultiSelect
        onValueChange={setSelectedNames}
        placeholder="Select candidate..."
        className="max-w-xs"
      >
        {salesPeople.map((item) => (
          <MultiSelectItem key={item.name} value={item.name}>
            {item.name}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Email</TableHeaderCell>

            <TableHeaderCell className="text-right">Application Date</TableHeaderCell>
            <TableHeaderCell className="text-right">Region</TableHeaderCell>
            <TableHeaderCell className="text-right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.email}</TableCell>
                <TableCell className="text-right">{item.appliedAt}</TableCell>
                <TableCell className="text-right">{item.region}</TableCell>
                <TableCell className="text-right">
                  <Badge color={item?.status == 'qualified' ? 'green' : 'blue'} size="xs">
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}