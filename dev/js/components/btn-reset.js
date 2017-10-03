import React, {Component} from 'react';

class ResetButton extends Component {
    render() {
        return(
            <button className="btn btn-danger" onClick={this.props.resetAction}> Reset </button>
        );
    }


}

export default ResetButton;