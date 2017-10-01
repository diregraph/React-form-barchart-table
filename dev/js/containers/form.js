import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
                <button> Submit </button>
                <button> Reset </button>
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