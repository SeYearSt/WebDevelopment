import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

export const ProgressBarCustom = ({percents, color}) => (
    <span>
        <ProgressBar
        percent={percents}
        filledBackground={color}
      />
    </span>
);