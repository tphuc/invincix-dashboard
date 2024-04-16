import Image from "next/image";

import Log from 'public/images/logistic.svg'
import FNB from 'public/images/food&beverage.svg'
import Pharma from 'public/images/pharma.svg'
import PD from 'public/images/product-dev.svg'

import NP from 'public/images/non-profit.svg'
import Tech from 'public/images/technology.svg'
import ER from 'public/images/education&research.svg'
import HS from 'public/images/hospitality&service.svg'
import HC from  'public/images/healthcare.svg'
import Ecom from  'public/images/e-com.svg'
import Energy from  'public/images/energy.svg'
import Gov from  'public/images/government.svg'

export default function IndustryWeServe(){
    return <div className="space-y-6 py-6">
        <p className="text-xl font-bold text-center">Industry We Serve</p>
        <div className="grid grid-cols-4 gap-2">
            
            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={Log} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Logistics</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={FNB} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Food & Beverages</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={Pharma} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Pharmaceutical</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={PD} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Product Development</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={NP} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Non-Profit</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={Tech} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Technology</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={ER} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Education & Research</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={HS} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Hospitality Services</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={HC} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Health Care</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={Ecom} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">e-Commerce</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={Energy} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Energy</p>
            </div>

            <div className="bg-gradient-to-b from-sky-500/10 text-center via-teal-500/10 to-blue-500/10 space-y-2 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                <div className="w-full px-12 py-2">
                    <Image src={Gov} width={100} height={100} className='w-full aspect-square' alt='' />
                </div>
                <p className="text-lg">Government</p>
            </div>

            



            
        </div>
    </div>
}