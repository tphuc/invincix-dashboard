'use client'
import { Card, ProgressCircle } from "@tremor/react";
import { Circle, Dot } from "lucide-react";
import Image from "next/image";

export default function OperationEfficiencyIndex() {

    return <div className="p-6 py-8 space-y-4 rounded-md" style={{ background: "#1D2E3A" }}>
        <h1 className="text-2xl font-bold">Operation efficiency index</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card style={{border: 'none', background:"#102534"}} className="space-y-6 p-0 flex flex-col overflow-hidden">

                <Image
                    width={400}
                    height={400}
                    className="w-full px-12 pt-8"
                    alt=""
                    style={{ objectFit: "contain" }}
                    src={"/OEI/75.svg"}
                />
                <h3 className="text-xl text-cyan-400 text-center">Business agility</h3>
                <div style={{ background: 'linear-gradient(118.1deg, #1D2E3A -10.62%, #36424B 110.25%)' }} className="flex-1 p-8 space-y-4 text-white/80">


                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Time-to-Market acceleration </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Experimentation</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Rapid prototyping  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Flexible partnering </p>
                    </div>


                </div>
            </Card>

            <Card style={{border: 'none', background:"#102534"}} className="space-y-6 p-0 flex flex-col overflow-hidden" >
                <Image
                    width={400}
                    height={400}
                    className="w-full px-12 pt-8"
                    alt=""
                    style={{ objectFit: "contain" }}
                    src={"/OEI/85_2.svg"}
                ></Image>

                <h3 className="text-xl text-purple-400 text-center">Technical focus</h3>

                <div style={{ background: 'linear-gradient(118.1deg, #1D2E3A -10.62%, #36424B 110.25%)' }} className="flex-1 p-8 space-y-4 text-white/80">
                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p> Maximize automation  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p> Enhance API support  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Focus on architecture  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Movement to cloud  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Application scaling
                            and elasticity </p>
                    </div>



                </div>
            </Card>

            <Card style={{border: 'none', background:"#102534"}} className="space-y-6 p-0 flex flex-col overflow-hidden"  >
                <Image
                    width={400}
                    height={400}
                    className="w-full px-12 pt-8"
                    alt=""
                    style={{ objectFit: "contain" }}
                    src={"/OEI/75_2.svg"}
                ></Image>
                <h3 className="text-xl text-blue-600 text-center">Ease of development</h3>
                <div style={{ background: 'linear-gradient(118.1deg, #1D2E3A -10.62%, #36424B 110.25%)' }} className="flex-1 p-8 space-y-4 text-white/80">
                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Lightweight hybrid cloud </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Late binding deployment  </p>
                    </div>

                    <div className="flex gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Common application
                            design and operations </p>
                    </div>


                </div>
            </Card>

            <Card style={{border: 'none', background:"#102534"}} className="space-y-6 p-0 flex flex-col overflow-hidden" >
            <Image
                    width={400}
                    height={400}
                    className="w-full px-12 pt-8"
                    alt=""
                    style={{ objectFit: "contain" }}
                    src={"/OEI/85.svg"}
                ></Image>

                <h3 className="text-xl text-teal-500 text-center">Performance in
                    governance</h3>
                    <div style={{ background: 'linear-gradient(118.1deg, #1D2E3A -10.62%, #36424B 110.25%)' }} className="flex-1 p-8 space-y-4 text-white/80">
                    <div className="flex  gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Guardianship not management </p>
                    </div>

                    <div className="flex  gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p className="-mt-1">Shared metrics foundation
                            of collaboration</p>
                    </div>
                    {/* <div className="flex  gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Shared metrics foundation
                            of collaboration</p>
                    </div> */}

                    <div className="flex  gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p className="-mt-1">Accelerate adoption of new technologies</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-5 h-5 fill-gray-100 p-1.5 bg-white/10 border border-white/20 rounded-full" />
                        <p>Culture is an output, not an input</p>
                    </div>





                </div>
            </Card>
        </div>
    </div>
}