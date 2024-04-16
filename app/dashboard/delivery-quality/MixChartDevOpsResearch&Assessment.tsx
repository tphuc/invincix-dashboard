
'use client'

import dynamic from "next/dynamic";
import React, { Component } from "react";
// import Chart from "react-apexcharts";

const Chart = dynamic(
    () => import('react-apexcharts').then((mod) => mod.default),
    {
      ssr: false,
      suspense: true,
      loading: () => <p>Loading...</p>
    }
  )
class MyChartComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {

                "chart": {
                    "height": 350,
                    "type": "line",
                    "toolbar": {
                        "show": false
                    }
                },
                "stroke": {
                    "width": [0, 4, 4, 4],
                    "curve": "smooth"
                },
                "plotOptions": {
                    "bar": {
                        "columnWidth": "50%"
                    }
                },
                "fill": {
                    "opacity": [1, 1, 1, 1],
                    "gradient": {
                        "inverseColors": false,
                        "shadeIntensity": 1,
                        "opacityFrom": 0.7,
                        "opacityTo": 0.3,
                        "stops": [0, 100, 100, 100]
                    }
                },
                "labels": ["Project 1", "Project 2", "Project 3"],
                "markers": {
                    "size": 0
                },
                "xaxis": {
                    "type": "category"
                },
                "yaxis": [
                    {
                        "title": {
                            "text": "Frequency / Time (Weekly/Days)"
                        }
                    },
                    {
                        "title": {
                            "text": "Change failure rate (%)"
                        },
                        "opposite": true
                    }
                ]
            },
            "series": [
                {
                    "name": "Deployment frequency weekly",
                    "type": "column",
                    "data": [2, 8, 4]
                },
                {
                    "name": "Lead time change",
                    "type": "column",
                    "data": [2, 9, 12]
                },
                {
                    "name": "Restore services in Days",
                    "type": "column",
                    "data": [6, 3, 2]
                },
                {
                    "name": "Change failure rate",
                    "type": "line",
                    "data": [12, 17, 26]
                }
            ]
        }
    }

    render() {
        return (
            <Chart
                options={this.state?.['options']}
                series={this.state?.['series']}
                type="bar"
                width="500"
            />
        );
    }
}

export default MyChartComponent;