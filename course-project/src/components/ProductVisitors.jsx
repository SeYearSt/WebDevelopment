import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label, Bar, BarChart, LabelList
} from 'recharts';

const data = [
  {
    name: 'JAN', uv: 40
  },
  {
    name: 'FEB', uv: 30
  },
  {
    name: 'MAR', uv: 35
  },
  {
    name: 'APR', uv: 40
  },
  {
    name: 'MAY', uv: 50
  },
  {
    name: 'JUN', uv: 30
  }
];

export const ProductVisitors = () => (
<AreaChart
  width={700}
  height={420}
  data={data}
  margin={{
    top: 80, right: 10, left: 0, bottom: 0,
  }}
>
{/* font-size: 25px;
line-height: 35px;
color: #2f3b4c;
font-family: ""; */}

<text x={120} y={50} dy={0} style={ { fontSize: 25, fontFamily: "Museo Sans",
lineHeight: 35, color: "#2f3b4c"} } textAnchor="middle">{"Product Visitiors"}</text>
  <div>Product Visitors</div>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#4cbeff" fill="#4cbeff" />
</AreaChart> 
)

// export default class Example extends PureComponent {

//   render() {
    
  // }
// }
