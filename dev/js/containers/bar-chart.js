import React, {Component} from 'react';
import {connect} from 'react-redux';

class BarChart extends Component {
    render(){
        let self = this,
            data = this.props.barChartData,
            colors = ['#F44336', '#673AB7', '#03A9F4', '#4CAF50', '#607D8B','#FF5722'],
            label = ['A','B','C','D','E','F']   ,
            max = 0;

        for (let i = data.length; i--; ) {
            if (data[i] > max) {
                max = data[i];
            }
        }


        return (
            <div className="Charts">
                { data.map((item, itemIndex) => {
                    let color = colors[itemIndex],
                        style,
                        size = item / max * 100;
                    style = {
                        backgroundColor: color,
                    };
                    style['height'] = size + '%';
                    return (
                        <div className="Charts--series"
                             style={{
                                 height: 250,
                                 width:50
                             }}
                             key={itemIndex}
                        >
                            <label>{label[itemIndex]}</label>
                            <div
                                className={ 'Charts--item'}
                                style={ style }
                                key={ itemIndex }
                            >
                                <b style={{ color: color }}>{ item }</b>
                            </div>
                        </div>
                    );
                }) }
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        barChartData : state.formItems.amount
    };
}

export default connect(mapStateToProps)(BarChart);