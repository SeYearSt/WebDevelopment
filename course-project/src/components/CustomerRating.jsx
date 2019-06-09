import React from 'react';
import {CustomerRatingProgressBar} from './CustomerRatingProgressBar';

import faceHappy from "../resources/images/faceHappy.png";
import faceUnHappy from "../resources/images/faceUnHappy.png";
import faceNormal from "../resources/images/faceNormal.png";
import faceAngry from "../resources/images/faceAngry.png";
import refresh from "../resources/images/refresh.png";

export const CustomerRating = ({  }) => (
    // <div style={ {  margin: 10, display: 'flex' } }>
    <div style={ {  margin: 10 } }>
       <div style={{ margin: 20}}>
           <span>Customer Ratings</span>
           <span style={{ marginLeft: 510}}>2,45,567 Votes</span>
           <img src={refresh} alt="Refresh" style={{ marginLeft: 30}}/>
        </div>
        <div>
            <CustomerRatingProgressBar
            icon = {faceHappy}
            meaning = "The product is Awesome&nbsp;&nbsp;"
            percents = {67}
            color="#5ec7bd"
            />
        </div>
        <div>
            <CustomerRatingProgressBar
             icon = {faceNormal}
             meaning = "Yeh I'm Satisfied with it&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
             percents = {25}
             color={"#38a4dd"}
            />
        </div>
        <div>
            <CustomerRatingProgressBar
            icon = {faceUnHappy}
            meaning = "Average, product, not bad"
            percents = {25}
            color={"#ffc400"}
            />
        </div>
        <div>
            <CustomerRatingProgressBar
             icon = {faceAngry}
             meaning = "Not usefull at all it Sucks&nbsp;&nbsp;&nbsp;"
             percents = {15}
            color={"#ff7043"}
            />
        </div>
     </div>
  );