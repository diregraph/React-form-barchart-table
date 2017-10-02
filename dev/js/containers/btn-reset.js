import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import resetForm from "../actions/btn-reset-action";
import {connect} from 'react-redux';


class ResetButton extends Component {
    render() {
        return(
            <button onClick={this.props.resetForm}> Reset </button>
        );
    }


}

function mapStateToProps(state) {
    return {
        btnResetState : state.btnResetState
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({resetForm: resetForm}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ResetButton);