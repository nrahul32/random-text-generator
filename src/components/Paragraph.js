import React, { Component } from "react";

class Paragraph extends Component {
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
                Number of paragraphs:
                <div>
                    <input type={"number"} value={this.state.value} name={"paras"} />
                </div>
            </div>
        )
    }
}

export default Paragraph;
