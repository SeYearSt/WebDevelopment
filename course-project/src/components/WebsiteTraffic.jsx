import React, { PureComponent } from 'react';
import { WebsiteTrafficPie } from "../components/WebsiteTrafficPie";
import { relative } from 'path';
import pinkRectangle from "../resources/images/pinkRectangle.png";
import yellowRectangle from "../resources/images/yellowRectangle.png";
import blueRectangle from "../resources/images/blueRectangle.png";

export const WebsiteTraffic = ({ icon }) => (
  <div style={ { width: 460, height: 420, backgroundColor: 'white', margin: 10, position: 'relative'} }>
    <span style={{ margin: 20 }}>Website Traffic</span>
    <span style={{ marginLeft: 250}}><img src={icon} alt="refresh"/></span>
    <WebsiteTrafficPie />
    <span style={{position: "absolute", top: 100, right: 100, color: '#78909c'}}><img src={pinkRectangle}/>Bounce</span>
    <span style={{position: "absolute", top: 130, right: 100, color: '#78909c'}}><img src={yellowRectangle}/>Visitors</span>
    <span style={{position: "absolute", top: 160, right: 75, color: '#78909c'}}><img src={blueRectangle}/>Registered</span>

    <span style={{position: "absolute", top: 150, right: 315, color: '#38a4dd'}}>Registered</span>
    <span style={{position: "absolute", top: 175, right: 320, color: '#2f3b4c', fontSize: 30}}>9012</span>
    <span style={{position: "absolute", top: 360, right: 0, color: '#78909c', textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipising elieat, sed do eiusmod tempor incididunt utmabor edolore</span>

  </div>
);
