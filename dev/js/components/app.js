import React from 'react';
import Form from '../containers/form';
import BarChart from '../containers/bar-chart';

require('../../scss/style.scss');

const App = () => (
    <div>
        <div className="halfContainer">
            <div className="componentContainer">
                <h2>Form</h2>
                <Form />

            </div>

            <div className="componentContainer">
                <h2>Bar Chart</h2>
                <BarChart />
            </div>
        </div>
        <div className="halfContainer">
            <div className="componentContainer">
                <h2>Table</h2>
            </div>
        </div>
    </div>

);

export default App;
