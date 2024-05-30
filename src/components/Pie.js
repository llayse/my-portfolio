import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react"
 



export const Pie = (props) => {
    let text = props.text;
    let percentage = props.percentage;

    return (
        <div>
          <div style={{ width: "135px" }}>
            <VisibilitySensor>
              {({ isVisible }) => {
                const percentage_shown = isVisible ? percentage : 0;
                return (
                  <CircularProgressbar
                    value={percentage_shown}
                    text={`${percentage_shown}%`}
                    background={false}
                    strokeWidth={10}
                    styles={buildStyles({
                        rotation: 0.25,
                    })}
                  >
                  </CircularProgressbar>
                );
              }}
            </VisibilitySensor>
            <h5>{text}</h5>
          </div>
        </div>
      )
}