import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import submitForm from "../actions/btn-submit-action";
import resetForm from "../actions/btn-reset-action";
import SubmitButton from '../components/btn-submit';
import ResetButton from '../components/btn-reset';



class Form extends Component {

    createFormItems(count){

        return this.props.formItems.id.map((formItemID) =>{
            count++;
            return (
                <div key={formItemID} className="formItemContainer">
                    <label>{this.props.formItems.type[count]}</label>
                    <input defaultValue={this.props.formItems.amount[count]} type="text" />
                </div>
            );

        });
    }

    render() {
        return(
            <div>
                <div>
                    {this.createFormItems(0)}
                </div>

                <SubmitButton submitAction ={() => this.props.submitForm([5,1,4,5,3,1])} />
                <ResetButton resetAction ={() => this.props.resetForm([0,0,0,0,0,0])}/>
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