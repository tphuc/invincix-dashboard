import { Card, Title } from "@tremor/react";
import React from "react";
import GaugeComponent from "react-gauge-component";

export default function RevenueGaugeChart() {
  return (
    <div>
       <Card className="h-full">
      <Title>Candidate Withdrawal Rate </Title>
      <GaugeComponent
        value={38}
        type="radial"
        arc={{
          colorArray: ["#b45309"],
          // subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
          padding: 0.02,
          width: 0.3,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
      />
    </Card>
    </div>
  );
}
