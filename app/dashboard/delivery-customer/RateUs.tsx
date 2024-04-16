'use client';

import { Card, Title } from "@tremor/react";
import { useSession } from "next-auth/react";
import GaugeComponent from "react-gauge-component";
import { useGetResource } from "@/utils/http";



const data = [
    {
        "name": "Very Likely",
        "value": 67
    },
    {
        "name": "Likely",
        "value": 11
    },
    {
        "name": "Not Sure",
        "value": 18
    },
    {
        "name": "Not Likely",
        "value": 3
    },
    {
        "name": "No",
        "value": 1
    }
]

export default function RateUs() {
    const user = useSession().data?.user as any
    const {data: dataset, isLoading} = useGetResource(`/api/user/${user?.id}/dataset`)
    const data = dataset?.sheetData?.['RecommendUs']

    return <Card className="w-full grid gap-4 grid-cols-10">
        <div className="col-span-10">
            <Title className='text-3xl font-bold'>How likely would you recommend us?</Title>
        </div>
        {/* <Title className='text-3xl font-bold'>CSAT Questionaires</Title> */}

        <div className="col-span-5 md:col-span-2 flex-col flex items-center justify-center space-y-2">

            {/* <Title>Candidate Withdrawal Rate </Title> */}
            <GaugeComponent
                value={data?.find?.(item => item.name === 'Very Likely').value ?? 0}
                labels={{
                    tickLabels: {
                        type: "inner",
                        hideMinMax: true
                    }
                }}
                style={{
                    width: 260,
                    // width: 
                }}
                arc={{

                    colorArray: ["#0284c7"],
                    // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                    padding: 0.02,
                    width: 0.3,
                }}
                pointer={{
                    elastic: true,
                    animationDelay: 0,
                }}
            />
            <p className="">Very Likely</p>
        </div>
        <div className="col-span-5 md:col-span-2 flex-col flex items-center justify-center space-y-2">

            {/* <Title>Candidate Withdrawal Rate </Title> */}
            <GaugeComponent
                value={data?.find?.(item => item.name === 'Likely').value ?? 0}
                labels={{
                    tickLabels: {
                        type: "inner",
                        hideMinMax: true
                    }
                }}
                style={{
                    width: 260,
                    // width: 
                }}
                arc={{

                    colorArray: ["#059669"],
                    // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                    padding: 0.02,
                    width: 0.3,
                }}
                pointer={{
                    elastic: true,
                    animationDelay: 0,
                }}
            />
            <p className="">Likely</p>
        </div>

        <div className="col-span-5 md:col-span-2 flex-col flex items-center justify-center space-y-2">

            {/* <Title>Candidate Withdrawal Rate </Title> */}
            <GaugeComponent
                value={data?.find?.(item => item.name === 'Not Sure').value ?? 0}
                labels={{
                    tickLabels: {
                        type: "inner",
                        hideMinMax: true
                    }
                }}
                style={{
                    width: 260,
                    // width: 
                }}
                arc={{

                    colorArray: ["#65a30d"],
                    // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                    padding: 0.02,
                    width: 0.3,
                }}
                pointer={{
                    elastic: true,
                    animationDelay: 0,
                }}
            />
            <p className="">Not Sure</p>

        </div>

        <div className="col-span-5 md:col-span-2 flex-col flex items-center justify-center space-y-2">
            <GaugeComponent
                value={data?.find?.(item => item.name === 'Not Likely').value ?? 0}
                labels={{
                    tickLabels: {
                        type: "inner",
                        hideMinMax: true
                    }
                }}
                style={{
                    width: 260,
                }}
                arc={{
                    colorArray: ["#ea580c"],
                    // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                    padding: 0.02,
                    width: 0.3,
                }}
                pointer={{
                    elastic: true,
                    animationDelay: 0,
                }}
            />
            <p className="">Not Likely</p>


        </div>

        <div className="col-span-5 md:col-span-2 flex-col flex items-center justify-center space-y-2">

            {/* <Title>Candidate Withdrawal Rate </Title> */}
            <GaugeComponent
                value={data?.find?.(item => item.name === 'No').value ?? 0}
                labels={{
                    tickLabels: {
                        type: "inner",
                        hideMinMax: true
                    }
                }}
                style={{
                    width: 260,
                    // width: 
                }}
                arc={{

                    colorArray: ["#dc2626"],
                    // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
                    padding: 0.02,
                    width: 0.3,
                }}
                pointer={{
                    elastic: true,
                    animationDelay: 0,
                }}
            />
            <p className="">No</p>
        </div>


    </Card>
}