import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SubmitButton from './btn-submit';
import ResetButton from './btn-reset';



class Form extends Component {

    createFormItems(){
        return this.props.formItems.map((formItem) =>{
            return (
                <div key={formItem.id} className="formItemContainer">
                    <label>{formItem.type}</label>
                    <input defaultValue={formItem.amount} type="text"/>
                </div>
            );
        });
    }

    render() {
        return(
            <div>
                <div>
                    {this.createFormItems()}
                </div>
                <SubmitButton />
                <ResetButton />
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        formItems : state.formItems
    };
}

export default connect(mapStateToProps)(Form);