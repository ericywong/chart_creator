import React, {Component} from 'react';
import './App.css';
import {ChartHeader} from './header.js';
import {PieChartCard} from './pieChart.js';
import {LineGraphCard} from './lineGraph.js';

class App extends Component {

  render () {
    return (
      <React.Fragment>
        <ChartHeader/>
        <div>
        <PieChartCard/>
        <LineGraphCard/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
