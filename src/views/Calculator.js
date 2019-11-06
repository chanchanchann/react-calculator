import React from 'react';
import NumPad from '../components/calculator/NumPad';
import Display from '../components/calculator/Display';
import * as math from 'mathjs';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            operator: ["+","-","*","/","."]
        }
    }

    onProcessNumPad = (number) => {
        // this.state.number[this.state.number.length - 1] === "*"
        
        this.setState({ number: this.state.number + number })
        console.log(number);
        console.log('state'+this.state.number);
        
        
        if (number === "AC") {
            this.setState({ number: "" })
        }
        else if (number === "=") {
            this.setState({ number: math.evaluate(this.state.number) })
        }
        this.state.operator.map((item1,index)=>{
            this.state.operator.map((item2,index)=>{
                if(number === item1 && this.state.number[this.state.number.length - 1] === item2)
                return this.setState({ number: this.state.number })
            })
        })

        // else if (number === "+" && this.state.number[this.state.number.length - 1] === "+"||
        // number === "-" && this.state.number[this.state.number.length - 1] === "-"||
        // number === "*" && this.state.number[this.state.number.length - 1] === "*"||
        // number === "/" && this.state.number[this.state.number.length - 1] === "/"||
        // number === "." && this.state.number[this.state.number.length - 1] === ".") {
        //     alert('operator');
        //     this.setState({ number: this.state.number })
        // }
        

    }


    render() {
        return (
            <div className="calculator">
                <Display display={this.state.number} />
                <NumPad onNumber={this.onProcessNumPad} />

            </div>
        );
    }
}

export default Calculator;