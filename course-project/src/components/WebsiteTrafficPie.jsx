import React, { PureComponent } from 'react';

import {
  PieChart, Pie, Sector, Cell
} from 'recharts';

const data2 = [
    { name: 'Group A', value: 700 },
    { name: 'Group B', value: 200 },
    { name: 'Group C', value: 100 }
  ];

const COLORS = ['#ffc400', '#b39ddb', '#38a4dd'];


// export const SmallCard = ({ color, caption, pretext, text, Icon }) => (

export const WebsiteTrafficPie = ({ }) => (
<div>
    <PieChart width={800} height={400}>
        <Pie
        data={data2}
        cx={100}
        cy={140}
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        >
        {
            data2.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
        </Pie>
    </PieChart>
</div>
    );