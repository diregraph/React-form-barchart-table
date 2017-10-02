import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import submitForm from "../actions/btn-submit-action";
import resetForm from "../actions/btn-reset-action";
import inputFieldChange from "../actions/input-field-change-action"
import SubmitButton from '../components/btn-submit';
import ResetButton from '../components/btn-reset';
import {liveUpdateCheckboxCheck, liveUpdateCheckboxUncheck } from "../actions/live-update-checkbox-action";




class Form extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name === 'liveUpdateCheck' ? target.name : parseInt(target.name);

        if(name === 'liveUpdateCheck'){
            if(value){
                this.props.liveUpdateCheckBoxCheck(value)
            }else{
                this.props.liveUpdateCheckBoxUncheck(value)
            }
        }else{
            this.props.inputFieldChange({id:name,value:value});
        }
    }


    createFormItems(count){
        return this.props.formItems.id.map((formItemID) =>{
            count++;
            return (
                <div key={formItemID} className="formItemContainer">
                    <label>{this.props.formItems.type[count-1]}</label>
                    <input name={formItemID} value={this.props.formItems.amount[count-1]} type="number" onChange={this.handleInputChange} />
                </div>
            );

        });
    }

    render() {
        return(
            <div>
                <form>
                    {this.createFormItems(0)}
                </form>
                <div>
                    <a>Live Update?</a>
                    <input name="liveUpdateCheck"type="checkbox" checked={this.props.liveUpdateCheckValue.checked} onChange={this.handleInputChange} className="liveUpdateCheck" />
                </div>
                <SubmitButton submitAction ={() => this.props.submitForm([5,1,4,5,3,1])} />
                <ResetButton resetAction ={() => this.props.resetForm([0,0,0,0,0,0])}/>
            </div>

        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({submitForm: submitForm,
                               resetForm: resetForm,
                               inputFieldChange: inputFieldChange,
                               liveUpdateCheckBoxCheck:liveUpdateCheckboxCheck,
                               liveUpdateCheckBoxUncheck:liveUpdateCheckboxUncheck }, dispatch)
}

function mapStateToProps(state) {
    return {
        formItems : state.formItems,
        liveUpdateCheckValue : state.liveUpdateCheckValue
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(Form);