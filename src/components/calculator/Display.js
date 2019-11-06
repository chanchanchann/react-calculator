import React from 'react';
import Input from './Input';


class Display extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         display: ""
    //     };
    // }
    render() {
        return (
            <div>
                <div className="display">
                    <Input display={this.props.display} />
                </div>
            </div>
        );
    }
}

export default Display;