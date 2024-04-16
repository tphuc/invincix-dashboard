"use client";

import React, { useRef } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function RevenueBubbleChart() {
  var chart = useRef();

  const options = {
	animationEnabled: true,
	title:{
		text: "Rail Roads vs Land Area and Population"
	},
	axisX: {
		title:"Revenue",
		maximum: 30,
		minimum: 0,
        interval: 5
	},
	axisY:{
		title: "Profit",
		gridColor: "lightgrey",
		tickColor: "lightgrey",
		lineThickness: 0,
		// valueFormatString:"#,##0 km,.",
        maximum: 60,
		minimum: -50,
        interval: 10
	},
	data: [{        
		type: "bubble",
		markerType: "triangle",
		toolTipContent: "<b>{label}</b><br/><b>Revenue:</b> {x}% <br/><b>Profit:</b> {y}%",
		dataPoints: [
			{ x: 40, y: 40, z: 1000, label:"Asia" },
            { x: 25, y: 23, z: 1000, label:"North America" },
            { x: 15, y: 10, z: 1000, label:"Europe" },
			{ x: 15, y: 52, z: 1000, label:"Africa" },
			{ x: 5, y: 11, z: 1000, label:"Oceania" },
			// { x: 25, y: 30, z:34.12, label:"Canada" },
			// { x: 30, y: 35, z:194.94, label:"Brazil" },
			
		]
	}]
}
  const styles = {
    contaner: {
      backgroundColor: "hsl(216 80.4% 10.1%)",
      padding: "1.2rem",
    },
    title: {
      fontSize: "1.14rem",
    },
  };

  return (
    <div style={styles.contaner}>
      <p style={styles.title}>
        Revenue by Continent
      </p>
      <div className="mt-6">
        <CanvasJSChart options={options} onRef={(ref) => (chart = ref)} />
      </div>
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}
