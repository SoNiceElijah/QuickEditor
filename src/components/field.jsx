
import React from 'react';
import '../styles/field.css';

import { List } from './list';
import { getBoundsForField } from '../utils/day';
import { getGroups } from '../utils/groups';


export class Field extends React.Component {


    constructor(props) 
    {
        super(props);
        this.state = {};
        this.state.groups = getGroups(0);
        this.state.time = getBoundsForField();       

        this.createGroupTop = this.createGroupTop.bind(this);
        this.createTimeLine = this.createTimeLine.bind(this);
        this.scrollContorlls = this.scrollContorlls.bind(this);
    }

    createGroupTop(ctx) {
        return (
            <div className="group-top">
                <div className="group-top-code">{ctx.code}</div>
                <div className="group-top-name">{ctx.name}</div>
            </div>
        );
    }

    createTimeLine(ctx) {

        let fromTime = (t) => {
            return (
                <div className="time-line-list-item">
                    <div className="time-container">
                        <div>{t.s}</div>
                        <div>{t.f}</div>
                    </div>
                </div>
            );
         }

        return (
            <div className="time-line-block">
                <div className="time-line-name"><div className="name-ajast">{ctx.name}</div></div>
                <div className="time-line-list">
                    { ctx.time.map(t => fromTime(t))}
                </div>
            </div>
        );
    }

    scrollContorlls() 
    {
        this.leftConotroll.scrollTop  = this.mainControll.scrollTop;
        this.topControll.scrollLeft = this.mainControll.scrollLeft;
    }

    componentDidMount() 
    {
        this.topControll = document.getElementById('topControll');
        this.leftConotroll =  document.getElementById('leftControll');

        this.mainControll = document.getElementById('field');
    }

    render() {
        return (
            <div className="field-big">
                <div className="group-gap"></div>
                <div id="topControll" className="field-group-top">
                    <div className="field-group-top-wrapper">
                        {this.state.groups.map(g => this.createGroupTop(g))}
                    </div>
                </div>
                <div id="leftControll" className="field-time-line">
                    <div className="field-time-line-wrapper">
                        {this.state.time.map(t => this.createTimeLine(t))}
                    </div>
                </div>
                <div id="field" className="field-itself" onScroll={this.scrollContorlls}>
                    <div className="field-itself-wrapper">
                        { this.state.groups.map( g => <List group={g}  />)}
                    </div>
                </div>
                
            </div> 
        );
    }


}