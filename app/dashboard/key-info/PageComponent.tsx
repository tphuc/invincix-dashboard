"use client";
import CurrentChart from "./components/CurrentChart";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectionChart from "./components/ProjectionChart";

export default function PageComponent() {
  return (
    <div className="relative min-h-screen w-full">
      <Tabs defaultValue="account" className="w-full">
        <div className="flex items-center flex-wrap justify-between gap-2">
          <p className="text-4xl font-bold pb-2 space-x-3">
            Organization Performance
          </p>
          <TabsList className="h-[50px] md:w-[500px] gap-1 px-2 bg-slate-800 rounded-sm">
            <TabsTrigger
              className="h-10 flex-1 rounded-sm data-[state=active]:bg-sky-800"
              value="account"
            >
              Current
            </TabsTrigger>
            <TabsTrigger
              className="h-10 flex-1 rounded-sm data-[state=active]:bg-sky-800"
              value="password"
            >
              Projection
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="w-full relative border-t border-slate-800 pt-6 pb-0 grid grid-cols-4 gap-4 mt-6" />

        <TabsContent className="py-2" value="account">
          {" "}
          <CurrentChart />{" "}
        </TabsContent>
        <TabsContent className="py-2" value="password">
          {" "}
          <ProjectionChart />{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
}
