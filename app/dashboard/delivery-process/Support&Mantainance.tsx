import { Card, Title } from "@tremor/react";
import Image from "next/image";

export default function SupportNMaintenance() {

    return <div className="space-y-4">
        <Card>
            <Title>
                Enhancement and Execution Cycle
            </Title>
            <Image width={800} height={400} className="w-full p-12" alt="" style={{ objectFit: 'contain' }} src={'/images/MaintainanceProcess.svg'}></Image>
        </Card>
        <Card className="w-full space-y-2">
            {/* <h2 className="text-3xl">
                Application Maintenance Services
            </h2> */}
          

            <Title>Application Maintenance Services</Title>
            <p className="text-sm">Help Desk, L1/L2/L3 Support, Remote Onsite/Offshore models</p>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
                <div className="text-center bg-gradient-to-b py-8 rounded-md from-indigo-500/10 via-sky-500/10 to-blue-500/10" color="sky">
                    <div className="relative bg-dark-tremor-background -mt-20 w-24 h-24 mx-auto rounded-full p-1">
                        <div className="border-8 border-cyan-500 rounded-full w-full h-full p-2">
                            <Image src={'/images/UserSupport.svg'} alt='' width={200} height={200} />
                        </div>
                    </div>
                    <br />
                    <p className="text-cyan-500 font-bold text-xl">User support</p>
                    <br />
                    <div className="px-12">
                        <ul className="text-left list-disc">
                            <li>Troubleshooting</li>
                            <li> Handling changes requests </li>
                            <li> Providing answers to how-to” questions</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center bg-gradient-to-b py-8 rounded-md from-indigo-500/10 via-sky-500/10 to-blue-500/10" color="sky">
                    <div className="relative bg-dark-tremor-background -mt-20 w-24 h-24 mx-auto rounded-full p-1">
                        <div className="border-8 border-cyan-500 rounded-full w-full h-full p-2">
                            <Image src={'/images/AppSupport.svg'} alt='' width={200} height={200} />
                        </div>
                    </div>
                    <br />
                    <p className="text-cyan-500 font-bold text-xl">Application Support</p>
                    <br />
                    <div className="px-12">
                        <ul className="text-left list-disc">
                            <li>Conducting Root Cause   Analysis</li>
                            <li> Implementing Enhancements</li>
                            <li> Developing new features</li>
                            <li> Managing software release</li>
                            <li> Applying software patches</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center bg-gradient-to-b py-8 rounded-md from-indigo-500/10 via-sky-500/10 to-blue-500/10" color="sky">
                    <div className="relative bg-dark-tremor-background -mt-20 w-24 h-24 mx-auto rounded-full p-1">
                        <div className="border-8 border-cyan-500 rounded-full w-full h-full p-3">
                            <Image src={'/images/EndUserSupport.svg'} alt='' width={200} height={200} />
                        </div>
                    </div>
                    <br />
                    <p className="text-cyan-500 font-bold text-xl">End User Support</p>
                    <br />
                    <div className="px-12">
                        <ul className="text-left list-disc">
                            <li>Providing user manuals </li>
                            <li>Developing training materials </li>
                            <li>Creating a knowledge portal </li>
                            <li>Providing online help and support </li>
                            <li>Creating quick reference cards </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center bg-gradient-to-b py-8 rounded-md from-indigo-500/10 via-sky-500/10 to-blue-500/10" color="sky">
                    <div className="relative bg-dark-tremor-background -mt-20 w-24 h-24 mx-auto rounded-full p-1">
                        <div className="border-8 border-cyan-500 rounded-full w-full h-full p-3">
                            <Image src={'/images/OperationSupport.svg'} alt='' width={200} height={200} />
                        </div>
                    </div>
                    <br />
                    <p className="text-cyan-500 font-bold text-xl">Operations Support</p>
                    <br />
                    <div className="px-12">
                        <ul className="text-left list-disc">
                            <li>Conducting capacity planning</li>
                            <li>Managing network administration</li>
                            <li>Managing database administration</li>
                            <li>Performing system administration tasks</li>
                        </ul>
                    </div>
                </div>
            </div>


        </Card>
        <div className="grid grid-cols-12 gap-4">
            <Card className="col-span-full md:col-span-6">
                <Title>Software and Maintenance Challenges</Title>
                <Image width={800} height={400} className="w-full p-12" alt="" style={{ objectFit: 'contain' }} src={'/images/MaintainanceSupport.svg'}></Image>
            </Card>
            <Card className="col-span-full md:col-span-6">
                <Title>Maintenance and Support</Title>
                <Image width={800} height={400} className="w-full p-12" alt="" style={{ objectFit: 'contain' }} src={'/images/MaintainChallenge.svg'}></Image>
            </Card>
        </div>
    </div>
}