import React, {Component} from 'react';

class SubmitButton extends Component {
    render() {
        return(
            <button onClick={this.props.submitAction}> Submit </button>
        );
    }
}

export default SubmitButton;
