import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {submitForm} from "../actions/btn-submit-action";
import {resetForm} from "../actions/btn-reset-action";
import {inputFieldChange} from "../actions/input-field-change-action";
import SubmitButton from '../components/btn-submit';
import ResetButton from '../components/btn-reset';
import {liveUpdateCheckboxCheck, liveUpdateCheckboxUncheck} from "../actions/live-update-checkbox-action";


class Form extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name === 'liveUpdateCheck' ? target.name : parseInt(target.name);

        if (name === 'liveUpdateCheck') {
            if (value) {
                this.props.liveUpdateCheckBoxCheck(value)
            } else {
                this.props.liveUpdateCheckBoxUncheck(value)
            }
        } else {
            this.props.inputFieldChange({id: name, value: value, liveupdate: this.props.liveUpdateCheckValue.checked});
        }
    }

    createFormItems(count) {
        return this.props.formItems.id.map((formItemID) => {
            count++;
            return (
                <div key={formItemID} className="formItemContainer">
                    <h5><span className="badge badge-secondary">{this.props.formItems.type[count - 1]}</span></h5>
                    <input name={formItemID}
                           value={this.props.formItems.newStateAmount[count - 1]}
                           type="number"
                           onChange={this.handleInputChange}/>
                </div>
            );

        });
    }

    showAlert(alertType) {
        if (alertType === "submit") {
            return (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>Barchart Rendered!</strong>
                </div>
            );
        } else if (alertType === "reset") {
            return (
                <div className="alert alert-info alert-dismissible fade show" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>Barchart Reset!</strong>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {/*<div>
                    {this.showAlert(this.props.formItems.alert)}
                </div>*/}

                <form>
                    {this.createFormItems(0)}
                </form>
                <div>
                    <a>Live Update?</a>
                    <input
                        name="liveUpdateCheck"
                        type="checkbox"
                        checked={this.props.liveUpdateCheckValue.checked}
                        onChange={this.handleInputChange}
                        className="liveUpdateCheck"/>
                </div>
                <SubmitButton
                    submitAction={() => this.props.submitForm({liveupdate: this.props.liveUpdateCheckValue.checked})}/>
                <ResetButton resetAction={() => this.props.resetForm()}/>
            </div>

        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        submitForm: submitForm,
        resetForm: resetForm,
        inputFieldChange: inputFieldChange,
        liveUpdateCheckBoxCheck: liveUpdateCheckboxCheck,
        liveUpdateCheckBoxUncheck: liveUpdateCheckboxUncheck
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        formItems: state.formItems,
        liveUpdateCheckValue: state.liveUpdateCheckValue
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Form);