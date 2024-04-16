import { AreaChart, Card, LineChart, Title } from "@tremor/react";

// const data = [
//     {
//         "Metric": "Deployment frequency weekly",
//         "Project1": 2,
//         "Project2": 8,
//         "Project3": 4,

//         "Average": 4.67
//     },
//     {
//         "Metric": "Lead time change",
//         "Project1": 11,
//         "Project2": 9,
//         "Project3": 12,
//         "Average": 10.67
//     },
//     {
//         "Metric": "Restore services in Days",
//         "Project1": 6,
//         "Project2": 3,
//         "Project3": 2,
//         "Average": 3.67
//     },
//     {
//         "Metric": "Change failure rate",
//         "Project1": "12%",
//         "Project2": "17%",
//         "Project3": "26%",
//         "Average": "18%"
//     }
// ];

const formattedData = [
    {
        "name": "Project 1",
        "Deployment frequency weekly": 2,
        "Lead time change": 2,
        "Restore services in Days": 6,
        "Change failure rate": 12
    },
    {
        "name": "Project 2",
        "Deployment frequency weekly": 8,
        "Lead time change": 9,
        "Restore services in Days": 3,
        "Change failure rate": 17
    },
    {
        "name": "Project 3",
        "Deployment frequency weekly": 4,
        "Lead time change": 12,
        "Restore services in Days": 2,
        "Change failure rate": 26
    },
   
]

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">{category.value} bpm</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const DevOpsResearchAssessmentChart = () => {
  return (
    <>
      <Card>
        <LineChart
          className="h-72 mt-4"
          data={formattedData}
          index="name"
          categories={["Deployment frequency weekly", "Lead time change", "Restore services in Days", "Change failure rate"]}
          colors={["blue", "cyan", "indigo", "rose"]}
          yAxisWidth={40}
          showLegend

          showGridLines
          showTooltip
          showXAxis
          showYAxis

         rotateLabelX={{
                        angle:-90,
                            verticalShift:60,
                            xAxisHeight: 100
                    }}
        //   customTooltip={customTooltip}
        />
      </Card>
    </>
  );
};