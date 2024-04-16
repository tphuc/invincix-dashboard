import { Card, CategoryBar, Legend, ListItem, Metric } from "@tremor/react";
import { List, Text } from "lucide-react";
import React, { useRef } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

export default function HiringChart() {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  var chart = useRef();

  var dataPoint;
  var total;
  const options = {
    animationEnabled: true,
    backgroundColor: "hsl(216 80.4% 10.1%)",
    data: [
      {
        type: "funnel",
        toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
        indexLabelPlacement: "inside",
        indexLabel: "{label} ({percentage}%)",
        dataPoints: [
          { y: 1400, label: "Prospects", percentage: 0 },
          { y: 1212, label: "Qualified Prospects", percentage: 0 },
          { y: 1080, label: "Proposals", percentage: 0 },
          { y: 665, label: "Negotiation", percentage: 0 },
          { y: 578, label: "Final Sales", percentage: 0 },
        ],
      },
    ],
    containerProps: {},
  };
  //calculate percentage
  dataPoint = options.data[0].dataPoints;
  total = dataPoint[0].y;
  for (var i = 0; i < dataPoint.length; i++) {
    if (i == 0) {
      options.data[0].dataPoints[i].percentage = 100;
    } else {
      options.data[0].dataPoints[i].percentage = Number(
        ((dataPoint[i].y / total) * 100).toFixed(2)
      );
    }
  }

  const styles = {
    contaner: {
        backgroundColor: "hsl(216 80.4% 10.1%)",
        padding: '1.2rem'
    },
    title: {
        fontSize: '1.14rem'
    }
  };

  return (
    <Card style={styles.contaner}>
      <p  style={styles.title}>Hiring Analysis</p>
      <CanvasJSChart options={options} onRef={(ref) => (chart = ref)} />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </Card>
  );
}
