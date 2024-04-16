import { cn } from '@/lib/utils'
import { BadgeDelta, Card, CategoryBar, DonutChart, Flex, Legend, List, ListItem, Metric, Text } from '@tremor/react'
import Image from 'next/image'
import RecruitmentDashboard from './Dashboard';

const colors = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

export default function Page() {
  return (
    <RecruitmentDashboard/>
  )
}
