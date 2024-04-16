import { Card, Title } from "@tremor/react";
import Image from "next/image";

export default function ReEngineering() {
  return (
    <div className="w-full gap-4 grid grid-cols-12">
      <Card className="col-span-full md:col-span-8 min-h-[300px]">
        <Title>Business Process Re-Engineering</Title>
        <Image
          width={800}
          height={400}
          className="w-70 p-20"
          alt=""
          style={{ objectFit: "contain" }}
          src={"/images/ProcessReengineering.svg"}
        ></Image>
      </Card>
    </div>
  );
}
