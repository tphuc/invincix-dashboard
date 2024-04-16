'use client'
import { Card, ProgressCircle } from "@tremor/react";
import { Circle, Dot } from "lucide-react";
import Image from "next/image";
import stpi from 'public/images/stpi (1).png'
import vide from 'public/images/Vide (1).png'
import salefoce from 'public/images/salesforce (1)-2.png'
import google from 'public/images/google-partner (1).png'
import startup from 'public/images/Startup-inqubator (1).png'
import A1 from 'public/images/A1.png'
import A2 from 'public/images/A2.png'
import A3 from 'public/images/A3.png'

let numbersArray = Array.from({ length: 29 }, (_, index) => index + 1);


export default function Clientele() {

    return <div className="bg-sky-900/20 p-6 py-8 space-y-4 rounded-md">
        <h1 className="text-2xl font-bold">Clients</h1>

        <div className="flex items-center justify-center gap-4 px-4 flex-wrap">

            {numbersArray?.map((item) =>  <div key={item} className="bg-white/90 flex items-center justify-center px-8 py-4 rounded-sm w-[180px] ">

                <Image src={`/client/${item}.png`} alt='' width={180} height={100} className="w-full max-h-[60px]" style={{ objectFit: "contain" }} />
            </div>)}
           


        </div>
    </div>
}