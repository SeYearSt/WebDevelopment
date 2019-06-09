import React from 'react';
import { ProgressBarCustom } from './ProgressBar';

export const CustomerRatingProgressBar = ({ icon, meaning, color, percents}) => (
    <div style={ { margin: 10, display: 'flex' } }>
       <div style={{ }}> 
       <img src={icon}/>
       {/*  */}
       <div style={{ display: 'flex' }}>
       <span style={{ marginLeft: 20, color: {color} }}>{meaning}</span>
        <span style={{ marginLeft: 110, minWidth: 420}}><ProgressBarCustom percents={percents} color={color}/></span>   
        <span style={{ marginLeft: 80, marginRight: 30}}>{percents}%</span>
       </div>
        </div>
        {/* <div></div> */}
    </div>
  );