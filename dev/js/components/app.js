import React from 'react';
import Form from '../containers/form';
import BarChart from '../containers/bar-chart';
import Table from '../containers/table';

require('../../scss/style.scss');

const App = () => (
    <div className="app-container">
        <div className="halfContainer-left">
            <div className="componentContainer">
                <h3>Form</h3>
                <Form/>
            </div>

            <div className="componentContainer">
                <h3>Bar Chart</h3>
                <BarChart/>
            </div>
        </div>
        <div className="halfContainer-right">
            <div className="componentContainer-table">
                <h3>Table</h3>
                <Table/>
            </div>
        </div>
    </div>

);

export default App;
