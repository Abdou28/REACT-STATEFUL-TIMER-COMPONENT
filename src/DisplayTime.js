import React from 'react'

const arr = [3600000, 60000, 1000]; /*1000 milliseconds = 1 second ; 60000 milliseconds = 1 minute ; 3600000 milliseconds = 1 hour */

export default class DisplayTime extends React.Component {
    conversion(timeMilliseconds) {
        timeMilliseconds = timeMilliseconds % 360000000
        let arrayTime = [];
        for (let i = 0; i < arr.length; i++) {
            arrayTime.push(Math.floor(timeMilliseconds / arr[i]));
            timeMilliseconds = timeMilliseconds % arr[i];
        }
        return arrayTime.map(x =>
            x < 10 ? "0".repeat(1) + x : x
        );
    }

    render() {
        return (
            <div className="time">{this.conversion(this.props.milliseconds).join(":")}</div>
        )
    }

}