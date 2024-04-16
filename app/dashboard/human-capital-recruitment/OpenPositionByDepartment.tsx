'use client';
import { useEffect, useState } from "react";
import {
  BadgeDelta,
  Card,
  DeltaType,
  DonutChart,
  Select,
  SelectItem,
  Flex,
  Legend,
  List,
  ListItem,
  Title,
} from "@tremor/react";

const regions = [
  { key: "all", name: "All" },
  { key: "web", name: "Web development" },
  { key: "mobile", name: "Mobile development" },
  { key: "design", name: "Design" },
];

const cities = [
  {
    name: "React Js",
    region: "web",
    sales: 8,
    delta: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Vue Js",
    region: "web",
    sales: 9,
    delta: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "React Native",
    region: "mobile",
    sales: 5,
    delta: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "UI/UX Designer",
    region: "design",
    sales: 4,
    delta: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "DevOps",
    region: "asia",
    sales: 2,
    delta: "1.8%",
    deltaType: "moderateIncrease",
  },

];

const filterByRegion = (region, data) =>
  region === "all" ? data : data.filter((city) => city.region === region);

// const valueFormatter = (number) => `$${Intl.NumberFormat("us").format(number).toString()}`;

export default function OpenpositionByDepartment() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [filteredData, setFilteredData] = useState(cities);

  useEffect(() => {
    const data = cities;
    setFilteredData(filterByRegion(selectedRegion, data));
  }, [selectedRegion]);

  return (
    <Card className="max-w-screen-2xl mx-auto">
      <Flex className="space-x-8" justifyContent="between" alignItems="center">
        <Title>Open Position By Department</Title>
        <Select className="w-[200px]" onValueChange={setSelectedRegion} placeholder="Select">
          {regions.map((region) => (
            <SelectItem key={region.key} value={region.key}>
              {region.name}
            </SelectItem>
          ))}
        </Select>
      </Flex>
      <Legend categories={filteredData.map((item) => item.name)} className="mt-6" />
      <Flex>
        <DonutChart
          data={filteredData}
          category="sales"
          index="name"
          className="mt-6"
        />
        
        <List className="mt-6 ">
          {filteredData.map((item) => (
            <ListItem key={item.name}>
              {item.name}
              <Title >
                {item.sales}
              </Title>
            </ListItem>
          ))}
        </List>
        </Flex>
      


    </Card>
  );
}