import { Line } from "react-chartjs-2"
import data from "../data/data.json"
export const CreateChart = () => {
  return (
    <div>
      <Line data={{
        labels:data.map((data)=>data.label),
        datasets:[
          {
            label:"Revenue",
            data:data.map((data)=>data.revenue),
            backgroundColor:"#864FF0",
            borderColor:"#867JJ7",
          },
          {
            label:"Cost",
            data:data.map((data)=>data.cost),
            backgroundColor:"#Red",
            borderColor:"#867JJ7",
          },
        ]
      }}/>
    </div>
  )
}
