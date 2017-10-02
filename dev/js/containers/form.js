import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import submitForm from "../actions/btn-submit-action";
import resetForm from "../actions/btn-reset-action";
import SubmitButton from '../components/btn-submit';
import ResetButton from '../components/btn-reset';



class Form extends Component {

    createFormItems(){
        return this.props.formItems.map((formItem) =>{
            return (
                <div key={formItem.id} className="formItemContainer">
                    <label>{formItem.type}</label>
                    <input defaultValue={formItem.amount} type="text" />
                </div>
            );
        });
    }

    render() {
        let formData = [];
        this.props.formItems.map((formItem) => {
            {formData.push(formItem.amount)}
        });
        return(
            <div>
                <div>
                    {this.createFormItems()}
                </div>

                <SubmitButton submitAction ={() => this.props.submitForm(formData)} />
                <ResetButton resetAction ={() => this.props.resetForm([1,1,1,1,1,1])}/>
            </div>

        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({submitForm: submitForm, resetForm: resetForm}, dispatch)
}

function mapStateToProps(state) {
    return {
        formItems : state.formItems
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(Form);