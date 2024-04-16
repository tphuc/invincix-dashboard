import { Card, Title } from "@tremor/react";
import Image from "next/image";

export default function Development() {
  return (
    <div className="flex flex-col">
      <Card className="col-span-12 min-h-[300px]">
        <Title>Implementation Development Process</Title>
        <Image
          width={800}
          height={400}
          className="w-full p-12"
          alt=""
          style={{ objectFit: "contain" }}
          src={"/images/ScrumModel.svg"}
        ></Image>
      </Card>

      <div className="w-full gap-4 grid grid-cols-12 mt-4">
        <Card className="col-span-full md:col-span-6 min-h-[300px]">
          <Title>Spiral Model</Title>
          <Image
            width={800}
            height={400}
            className="w-full p-12"
            alt=""
            style={{ objectFit: "contain" }}
            src={"/images/SpiralModel.svg"}
          ></Image>
        </Card>
        <Card className="col-span-full md:col-span-6 min-h-[300px]">
          <Title>Prototype Model</Title>
          <Image
            width={800}
            height={400}
            className="w-full p-12"
            alt=""
            style={{ objectFit: "contain" }}
            src={"/images/PrototypeModel.svg"}
          ></Image>
        </Card>
        <Card className="col-span-full md:col-span-6 min-h-[300px]">
          <Title>V Model</Title>
          <Image
            width={800}
            height={400}
            className="w-full p-12"
            alt=""
            style={{ objectFit: "contain" }}
            src={"/images/VModel.svg"}
          ></Image>
        </Card>

        <div className="col-span-full md:col-span-6 space-y-4">
          <Card className="col-span-6 min-h-[300px]">
            <Title>Scrum Model</Title>
            <Image
              width={800}
              height={400}
              className="w-full p-12"
              alt=""
              style={{ objectFit: "contain" }}
              src={"/images/Scrum.svg"}
            ></Image>
          </Card>
          <Card className="col-span-6 min-h-[300px]">
            <Title>Agile Methodology</Title>
            <Image
              width={800}
              height={400}
              className="w-full p-12"
              alt=""
              style={{ objectFit: "contain" }}
              src={"/images/Agile.svg"}
            ></Image>
          </Card>
        </div>
        <Card className="col-span-full md:col-span-6 min-h-[300px]">
          <Title>Incremental Model</Title>
          <Image
            width={800}
            height={400}
            className="w-50 p-8"
            alt=""
            style={{ objectFit: "contain" }}
            src={"/images/IncrementalModel.svg"}
          ></Image>
        </Card>
        {/* <Card className="col-span-6 min-h-[300px]">
          <Title>Interactive Model</Title>

        <Image
            width={800}
            height={400}
            className="w-50 p-8"
            alt=""
            style={{ objectFit: "contain" }}
            src={"/images/InteractiveModel.svg"}
          ></Image>
        </Card> */}
      </div>
    </div>
  );
}
