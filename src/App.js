import React, { Component } from 'react';
import { Impress, Step } from './components';
//import { Impress, Step } from '../';
import './styles/_base.scss';
//import '../styles/impress-demo.css';

import demo from './demo/impress-demo';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      zoomIn: false
    };
  }

  zoom = () => {
    this.setState({
      zoomIn: !this.state.zoomIn
    })
  }

  render() {
    return (
      <Impress zoomIn={this.state.zoomIn}>
          <Step id={1} duration={1000}>
            <button onClick={this.zoom}> CLICK</button>
          </Step>
          <Step id={123} duration={1000}  
              data={
                  {
                      x:0,
                      y:0,
                      scale:1,
                      z:-3000,
                      // rotate:"90"
                  }}>
            <button onClick={this.zoom}> CLICK BACK</button>
          </Step>
      </Impress>
    );
  }
}

export default App;
