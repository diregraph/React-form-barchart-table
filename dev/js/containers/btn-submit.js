import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import submitForm from "../actions/btn-submit-action";
import {connect} from 'react-redux';


class SubmitButton extends Component {
    render() {
        return(
            <button onClick={this.props.submitForm}> Submit </button>
        );
    }


}

function mapStateToProps(state) {
    return {
        btnSubmitState: state.btnSubmitState
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({submitForm: submitForm}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SubmitButton);