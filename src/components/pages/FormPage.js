import React, { Component } from 'react';
import InputDisplay from "../InputDisplay";
import InputForm from "../InputForm";
import * as requestUtil from "../../Util/util";

class FormPage extends Component {
    state = {};

    handleInput1Change = event => {
        this.setState({ input1: event.target.value });
    };

    handleInput2Change = event => {
        this.setState({ input2: event.target.value });
    };

    handleInput3Change = event => {
        this.setState({ input3: event.target.value });
    };

    handleFormSubmit = async () => {
        const response = await requestUtil.sendData(
            this.state.input1,
            this.state.input2,
            this.state.input3
        );
        console.log(response);
    };

    render() {
        return (
            <div>
                <InputForm
                    handleInput1Change={this.handleInput1Change}
                    handleInput2Change={this.handleInput2Change}
                    handleInput3Change={this.handleInput3Change}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <InputDisplay
                    input1={this.state.input1}
                    input2={this.state.input2}
                    input3={this.state.input3}
                />
            </div>
        );
    }
}

export default FormPage;