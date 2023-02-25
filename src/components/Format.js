import React, { Component } from "react";

class Format extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
        this.setState({
            value: event.target.value
        })
        console.log(this.state.value);
    }

    render() {
        return (
            <div className="output" onChange={this.onChangeValue}>
                Format:
                <div>
                    <input type={"radio"} value={"html"} name={"format"} defaultChecked /> HTML
                    <input type={"radio"} value={"text"} name={"format"} /> Text
                </div>
            </div>
        )
    }
}

export default Format;
