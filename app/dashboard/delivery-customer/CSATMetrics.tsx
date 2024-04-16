'use client';
import ServiceSatisfaction from './ServiceSatisfaction'
import { ServiceImprovementArea } from './ServiceImprovementArea'
import RateUs from './RateUs'
import { Card, Metric, Title } from '@tremor/react'
import QuestionaireSection from './QuestionaireSection'
import { useGetResource } from '@/utils/http';
import { useSession } from 'next-auth/react';



export default function CSATMetrics(){
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['CSATMetrics']

    return <div className='col-span-12 grid grid-cols-1 md:grid-cols-3 gap-2'>
        <Card decoration='top' decorationColor='cyan'>
          <Title>Total Customers</Title>
          <Metric>{data?.find(item => item.name === 'Total Customers')?.value}</Metric>
        </Card>
        <Card decoration='top' decorationColor='blue'>
          <Title>CSAT Conducted</Title>
          <Metric>{data?.find(item => item.name === 'CSAT Conducted')?.value}</Metric>
        </Card>
        <Card decoration='top' decorationColor='rose'>
          <Title>CSAT Not Conducted</Title>
          <Metric>{data?.find(item => item.name === 'CSAT Not Conducted')?.value}</Metric>
        </Card>
    </div>
}