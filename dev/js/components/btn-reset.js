import React, {Component} from 'react';

class ResetButton extends Component {
    render() {
        return(
            <button onClick={this.props.resetAction}> Reset </button>
        );
    }


}

export default ResetButton;