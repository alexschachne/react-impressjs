import React, { Component } from 'react';
import { Line } from 'rc-progress';

export default class Progress extends Component {
    render() {
        const { stepsData, activeStep, stepsTotal } = this.props;
        const color_gold = '#e5b560',
              color_gray = '#3e4852';
        let currentStepIndex = Object.keys(stepsData).findIndex((s)=> s === activeStep.id) + 1;
        let progress = parseInt(currentStepIndex/stepsTotal * 100, 10);
        
        return (
            <aside style={{position:'absolute', bottom:0, width:'100%', height:3}}>
                <div style={{position: 'relative'}}>
                    <Line percent={progress} 
                          strokeLinecap='square'
                          strokeWidth={1} strokeColor={ color_gold }
                          trailWidth={1} trailColor={ color_gray } />
                    <p style={{position:'absolute', bottom:27, fontSize:20, color: color_gray, width:'100%', textAlign:'center', opacity: .4}}>
                        <span>
                            { currentStepIndex }
                            <span style={{paddingLeft:1, fontSize:13}}>{'/' + stepsTotal}</span>
                        </span>
                    </p>
                </div>
            </aside>
        );
    }
}