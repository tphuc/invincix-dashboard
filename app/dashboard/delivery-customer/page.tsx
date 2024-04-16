import Image from 'next/image'
import ServiceSatisfaction from './ServiceSatisfaction'
import { ServiceImprovementArea } from './ServiceImprovementArea'
import RateUs from './RateUs'
import { Card, Metric, Title } from '@tremor/react'
import QuestionaireSection from './QuestionaireSection'
import CSATMetrics from './CSATMetrics'

export default function Page() {
  return (
    <div className="w-full relative space-y-8">
      <p className='text-3xl'>Customer Satisfaction Survey Dashboard</p>
      <div className='grid grid-cols-12 gap-4 w-full'>
        
        <CSATMetrics/>
        <div className='col-span-full md:col-span-6'>
          <ServiceSatisfaction />
        </div>
        <div className='col-span-full md:col-span-6'>
          <ServiceImprovementArea />
        </div>

        <div className='col-span-full md:col-span-8'>
          <RateUs />
        </div>
        <div className='col-span-full md:col-span-4'>

          <Card>
            <Title className='text-3xl font-bold'>CSAT Questionaires</Title>
            <QuestionaireSection />
          </Card>
        </div>

      </div>
      <div>

      </div>
    </div>
  )
}
