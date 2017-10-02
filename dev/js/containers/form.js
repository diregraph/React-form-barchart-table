import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import submitForm from "../actions/btn-submit-action";
import resetForm from "../actions/btn-reset-action";
import inputFieldChange from "../actions/input-field-change-action"
import SubmitButton from '../components/btn-submit';
import ResetButton from '../components/btn-reset';



class Form extends Component {
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = parseInt(target.name);

        this.props.inputFieldChange({id:name,value:value});

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

                <SubmitButton submitAction ={() => this.props.submitForm([5,1,4,5,3,1])} />
                <ResetButton resetAction ={() => this.props.resetForm([0,0,0,0,0,0])}/>
            </div>

        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({submitForm: submitForm, resetForm: resetForm, inputFieldChange: inputFieldChange}, dispatch)
}

function mapStateToProps(state) {
    return {
        formItems : state.formItems
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(Form);