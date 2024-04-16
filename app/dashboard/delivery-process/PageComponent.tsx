'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Development from "./Development";
import ReEngineering from "./ReEngineering";
import SupportNMaintenance from "./Support&Mantainance";



// development
// reengineering
// support & maintenance

export default function PageComponent() {
    return <div className="relative min-h-screen w-full">
        <Tabs defaultValue="1" className="w-full">
            <div className="flex items-center flex-wrap justify-between gap-2">
                <p className="text-4xl font-bold pb-2 space-x-3">Delivery Process</p>
                <TabsList className="min-h-[50px] w-full md:w-[600px] overflow-x-scroll scrollbar-hide gap-1 bg-slate-800 rounded-sm">
                    <TabsTrigger className="h-10  flex-1 py-2 rounded-sm data-[state=active]:bg-sky-700" value="1">Development</TabsTrigger>
                    <TabsTrigger className="h-10  flex-1 py-2 rounded-sm data-[state=active]:bg-sky-700" value="2">Re-Engineering</TabsTrigger>
                    <TabsTrigger className="h-10  flex-1 py-2  rounded-sm data-[state=active]:bg-sky-700" value="3">Support & Maintenance</TabsTrigger>
                </TabsList>
            </div>

            <div className="w-full relative border-t border-slate-800 pt-6 pb-0 grid grid-cols-4 gap-4 mt-6" />


            <TabsContent className="py-2" value="1">  <Development/> </TabsContent>
            <TabsContent className="py-2" value="2"> <ReEngineering/> </TabsContent>
            <TabsContent className="py-2" value="3"> <SupportNMaintenance/>   </TabsContent>
        </Tabs>

    </div>
}