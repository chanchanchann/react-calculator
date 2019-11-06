import React from 'react';

// export const Input = props => props.display;

class Input extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        return <div style={{ color: 'wheat' }}>{props.display}</div>;
        
    }
}
export default Input;