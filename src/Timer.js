import React from 'react'
import DisplayTime from './DisplayTime'

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timeMs: Date.now(),
            inverval: 0,
            btnStart: "Start"
        };
    }
    /* SetInterval Function */
    timer = () => {
        this.setState({
            timeMs: this.state.timeMs + 1000,
        });
    };
    /* start click */
    start = () => {
        console.log(this.state.inverval);
        if (document.querySelector(".start").getAttribute("value") === "Start") {
            this.setState({ btnStart: "Stop", interval: setInterval(this.timer, 1000) })
        } else {
            clearInterval(this.state.interval);
            this.setState({ btnStart: "Start" });
        }
    };
    /* reset click*/
    reset = () => {
        this.setState({ btnStart: "Start" });
        this.setState({
            timeMs: 0
        });
        clearInterval(this.state.interval);
    };

    render() {
        return (
            <div className="container">
                <DisplayTime milliseconds={this.state.timeMs} />
                <div className="button-container">
                    <input type="button" value={this.state.btnStart} className="start button" onClick={() => this.start()}></input>
                    <input type="button" value="Reset" className="button" onClick={() => this.reset()}></input>
                </div>
            </div>
        )
    }

}