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
        }, function () {
            this.props.onChange(this.state.value)
        })
    }

    render() {
        return (
            <div className="output" onChange={this.onChangeValue}>
                Format:
                <div>
                    <input type={"radio"} value={"html"} name={"format"} defaultChecked={this.props.value === "html"} /> HTML
                    <input type={"radio"} value={"text"} name={"format"} defaultChecked={this.props.value !== "html"} /> Text
                </div>
            </div>
        )
    }
}

export default Format;
