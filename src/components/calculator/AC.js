import React from 'react';

class AC extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className="buttonAC" onClick={() => props.onPress(props.children)}>
                {props.children}
            </div>
        );
    }
}

export default AC;