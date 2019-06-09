import React from 'react';

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label, Bar, BarChart, LabelList
} from 'recharts';

const data = [
  {
    name: '', uv: 1, pv: 2,
  },
  {
    name: '', uv: 4, pv: 5,
  },
  {
    name: '', uv: 3, pv: 4,
  },
  {
    name: '', uv: 2, pv: 3,
  },
  {
    name: '', uv: 4, pv: 5,
  },
  {
    name: '', uv: 4, pv: 5
  }
];

export const SmallCard = ({ color, caption, pretext, text, Icon }) => (
  <div style={ { width: 208, height: 100, margin: 10, display: 'flex' } }>
    <div style={{ height: '100%', width: 70, backgroundColor: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {Icon}
    </div>
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: 25 }}>
      <span style={{ color, textTransform: 'uppercase', fontSize: 15 }}>{caption}</span>
      <div>
        {pretext && <sup>{pretext}</sup>}
        {text && <span style={{ fontSize: 20 }}>{text}</span>}  
      </div>
    </div>
  </div>
);

export const SmallSquareCard = ({isTop, color, name, colorFg, colorBg}) => (
    <AreaChart
  width={240}
  height={200}
  data={data}
  backgroundColor = '#ffffff'
  margin={{
    top: 10, right: 10, left: 0, bottom: 0,
  }}
>
<text x={110} y={50} dy={0} style={ { fontSize: 15, fontFamily: "Museo Sans", lineHeight: 35, color: "#78909c" } } textAnchor="middle">{name}</text>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  {/* <XAxis dataKey="name" /> */}
  {/* <YAxis /> */}
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke={colorFg} fill={colorFg} />
  <Area type="monotone" dataKey="pv" stroke={colorBg} fill={colorBg} />
</AreaChart>
);

export const BigSquareCard = ({ src }) => (
  <div style={ { width: 460, height: 420, backgroundColor: 'white', margin: 10 } }>
    <img src={src} style={{ width: '100%', height: '100%' }} />
  </div>
);
