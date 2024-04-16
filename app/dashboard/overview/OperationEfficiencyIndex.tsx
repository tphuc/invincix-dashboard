'use client'
import { Card, ProgressCircle } from "@tremor/react";
import { Circle, Dot } from "lucide-react";

export default function OperationEfficiencyIndex() {

    return <div className="bg-sky-900/20 p-6 py-8 space-y-4 rounded-md">
        <h1 className="text-2xl font-bold">Operation Efficiency Index</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="space-y-6 ">
                <ProgressCircle strokeWidth={14} className="w-full" size="xl" value={75} color={'blue'}>
                    <span className="w-full aspect-square rounded-full flex items-center justify-center text-xl text-blue-500 font-medium">
                        75%
                    </span>
                </ProgressCircle>

                <h3 className="text-xl text-center">Business Agility</h3>

                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-blue-600 text-blue-600" />
                        <p>Time-to-Market acceleration </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-blue-600 text-blue-600" />
                        <p>Experimentation</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-blue-600 text-blue-600" />
                        <p>Rapid prototyping  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-blue-600 text-blue-600" />
                        <p>Flexible partnering </p>
                    </div>

                </div>
            </Card>

            <Card className="space-y-6" >
                <ProgressCircle strokeWidth={14} className="w-full" size="xl" value={90} color={'green'}>
                    <span className="w-full aspect-square rounded-full flex items-center justify-center text-xl text-green-500 font-medium">
                        90%
                    </span>
                </ProgressCircle>

                <h3 className="text-xl text-center">Technical Focus</h3>

                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-green-600 text-green-600" />
                        <p> Maximize automation  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-green-600 text-green-600" />
                        <p> Enhance API support  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-green-600 text-green-600" />
                        <p>Focus on architecture  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-green-600 text-green-600" />
                        <p>Movement to cloud  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-green-600 text-green-600" />
                        <p>Application scaling
                            and elasticity </p>
                    </div>



                </div>
            </Card>

            <Card className="space-y-6" >
                <ProgressCircle strokeWidth={14} value={75} size='xl' color={'amber'}>
                    <span className="w-full aspect-square rounded-full flex items-center justify-center text-xl text-amber-500 font-medium">
                        75%
                    </span>
                </ProgressCircle>
                <h3 className="text-xl text-center">Ease of Development</h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-amber-600 text-amber-600" />
                        <p>Lightweight hybrid cloud </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-amber-600 text-amber-600" />
                        <p>Late binding deployment  </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-amber-600 text-amber-600" />
                        <p>Common application
                            design and operations </p>
                    </div>


                </div>
            </Card>

            <Card className="space-y-6" >
                <ProgressCircle strokeWidth={14} value={85} size='xl' color={'indigo'}>
                    <span className="w-full aspect-square rounded-full flex items-center justify-center text-xl text-indigo-500 font-medium">
                        85%
                    </span>
                </ProgressCircle>

                <h3 className="text-xl text-center">Performance in
                    Governance</h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-indigo-600 text-indigo-600" />
                        <p>Guardianship not management </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-indigo-600 text-indigo-600" />
                        <p>Shared metrics foundation
                            of collaboration</p>
                    </div>
                    {/* <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-indigo-600 text-indigo-600" />
                        <p>Shared metrics foundation
                            of collaboration</p>
                    </div> */}

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-indigo-600 text-indigo-600" />
                        <p>Accelerate adoption of new technologies</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Circle className="w-4 h-4 fill-indigo-600 text-indigo-600" />
                        <p>Culture is an output, not an input</p>
                    </div>



                    

                </div>
            </Card>
        </div>
    </div>
}