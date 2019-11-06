import React from 'react';


class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;
        return (
            <div className="button" onClick={() => props.onPress(props.children)}>
                {props.children}
            </div>
        );
    }
}

export default Button;