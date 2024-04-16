import Image from 'next/image'
import ResourceExperiences from './ResourceExperiences'
import CountryWiseExperience from './ContryWiseExperience'
import SkillMatrixExperiences from './SkillMatrixByCountry'
import SkillMatrixChart from './SkillMatrixByCountry2'

export default function Page() {
  return (
    <div className="w-full px-4 space-y-4">
 <p className="text-4xl font-bold pb-2 space-x-3">Human Capability</p>

<div className="w-full relative border-t border-slate-800 pt-6 pb-0 grid grid-cols-4 gap-4 mt-6" />
      <div className='w-full grid grid-cols-12 gap-4'>
        <div className='col-span-full md:col-span-4'>
          <ResourceExperiences />
        </div>
        <div className='col-span-full md:col-span-8'>
          <CountryWiseExperience />
        </div>
      </div>
      <div className='w-full grid gap-4 grid-cols-12'>
        <div className='col-span-full md:col-span-4'>
          <SkillMatrixChart/>
        </div>
        <div className='col-span-full md:col-span-8'>
          <SkillMatrixExperiences/>
        </div>
      </div>
    </div>
  )
}
