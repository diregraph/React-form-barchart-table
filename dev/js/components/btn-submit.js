import React, {Component} from 'react';

class SubmitButton extends Component {
    render() {
        return (
            <button className="btn btn-primary " onClick={this.props.submitAction}> Submit </button>
        );
    }
}

export default SubmitButton;
