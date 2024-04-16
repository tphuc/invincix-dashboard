import Image from "next/image";

import P1 from './p1.svg'
import stpi from 'public/images/stpi (1).png'
import vide from 'public/images/Vide (1).png'
import salefoce from 'public/images/salesforce (1)-2.png'
import google from 'public/images/google-partner (1).png'
import startup from 'public/images/Startup-inqubator (1).png'
import A1 from 'public/images/A1.png'
import A2 from 'public/images/A2.png'
import A3 from 'public/images/A3.png'

export default function PartnerShip(){
    return <div className="bg-gradient-to-b from-violet-500/10  to-slate-200/20 rounded-md text-center space-y-8 rounded-xs py-2 h-full px-2 aspect-square flex flex-col items-center justify-center">
                
        <h1 className="font-bold text-xl">Partnership</h1>

        <div className="flex flex-items-center justify-center gap-4 px-4 flex-wrap">
         
            <div className="bg-white/80 px-6 py-2 rounded-md min-w-[140px]">
                <Image alt='' src={stpi} width={200} height={100} className="w-full"  style={{objectFit:"contain"}}/>
            </div>

            <div className="bg-white/80 px-6 py-2 rounded-md min-w-[140px]">
                <Image alt='' src={salefoce} width={200} height={100} className="w-full"  style={{objectFit:"contain"}}/>
            </div>


            

            <div className="bg-white/80 px-6 py-2 rounded-md min-w-[140px]">
                <Image alt='' src={startup} width={200} height={100} className="w-full"  style={{objectFit:"contain"}}/>
            </div>

            <div className="bg-white/80 px-6 py-2 rounded-md min-w-[140px]">
                <Image alt='' src={vide} width={200} height={100} className="w-full"  style={{objectFit:"contain"}}/>
            </div>

          

            <div className="bg-white/80 px-6 py-2 rounded-md min-w-[140px]">
                <Image alt='' src={google} width={200} height={100} className="w-full"  style={{objectFit:"contain"}}/>
            </div>


        </div>

        <h1 className="font-bold text-xl">Certificates</h1>

        <div className="flex flex-items-center justify-center gap-4 px-4 flex-wrap">
        

            

            <div className="bg-white/80 px-6 py-2 rounded-md min-w-[120px]">
                <Image alt='' src={A1} width={200} height={100} className="w-full"  style={{objectFit:"contain"}}/>
            </div>

            <div className="bg-white/80 px-6 py-2 rounded-md min-w-[120px]">
                <Image alt='' src={A2} width={200} height={100} className="w-full"  style={{objectFit:"contain"}}/>
            </div>

            <div className="bg-white/80 px-6 py-2 rounded-md min-w-[120px]">
                <Image alt='' src={A3} width={200} height={100} className="w-full"  style={{objectFit:"contain"}}/>
            </div>


        </div>

            


            
    
    </div>
}