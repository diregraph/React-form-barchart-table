import React, {Component} from 'react';
import {Alert, Button} from "react-bootstrap";
import {connect} from "react-redux";

class AlertDismissable extends Component{
    render() {
        if(this.props.showAlert.alertVisible){
            return (
                <Alert bsStyle="success" onDismiss={this.props.alertDissmiss}>
                    <h6>Barchart Rendered</h6>
                    <Button bsStyle="primary" bsSize="xsmall" onClick={this.props.alertDissmiss}>Hide Alert</Button>
                </Alert>
            );
        }else{
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
        showAlert: state.showAlert
    };
}

export default connect(mapStateToProps)(AlertDismissable);

