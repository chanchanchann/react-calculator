import React from 'react';
import Button from './Button';
import AC from './AC';

class NumPad extends React.Component {

    onHandleNumber = (number) => {
        // alert(number);
        this.props.onNumber(number);

    }

    render() {
        return (
            <div>
                <div className="row">
                    <AC onPress={this.onHandleNumber}>AC</AC>
                    <Button onPress={this.onHandleNumber}>/</Button>
                </div>
                <div className="row">
                    <Button onPress={this.onHandleNumber}>7</Button>
                    <Button onPress={this.onHandleNumber}>8</Button>
                    <Button onPress={this.onHandleNumber}>9</Button>
                    <Button onPress={this.onHandleNumber}>*</Button>
                </div>
                <div className="row">
                    <Button onPress={this.onHandleNumber}>4</Button>
                    <Button onPress={this.onHandleNumber}>5</Button>
                    <Button onPress={this.onHandleNumber}>6</Button>
                    <Button onPress={this.onHandleNumber}>-</Button>
                </div>
                <div className="row">
                    <Button onPress={this.onHandleNumber}>1</Button>
                    <Button onPress={this.onHandleNumber}>2</Button>
                    <Button onPress={this.onHandleNumber}>3</Button>
                    <Button onPress={this.onHandleNumber}>+</Button>
                </div>
                <div className="row">
                    <Button onPress={this.onHandleNumber}>0</Button>
                    <Button onPress={this.onHandleNumber}>.</Button>
                    <Button onPress={this.onHandleNumber}>=</Button>
                </div>
            </div>
        );
    }
}

export default NumPad;