import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.css';
import { getRules } from "../utils/rules";

import { LessonPanel } from '../panels/lesson';
import { TimePanel } from '../panels/time';

export class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        // LESSONS
        this.state.rules = getRules();

        // TIME

        // HTML
        this.header = this.header.bind(this);
        this.content = this.content.bind(this);

        // PANELS
        this.swp = this.swp.bind(this);
        this.state.PANELS = [
            <LessonPanel rules={this.state.rules} />,
            <TimePanel />
        ];
        this.state.panel =  this.state.PANELS[0];
    }

    swp(number) {
        let p = this.state.PANELS[number];
        if(!p) return;
        if(p === this.state.panel) return;
        this.setState(s => (s.panel = p));
    }

    header() {
        return (
            <div className="header">
                <div className="header-list" >
                    <div id="logobtn" className="header-btn"></div>
                    <div onClick={() => {this.swp(0)}} id="lessonbtn" className="header-btn"></div>
                    <div onClick={() => {this.swp(1)}} id="timebtn" className="header-btn"></div>
                    <div id="exitbtn" className="header-btn"></div>
                </div>
            </div>
        );
    }

    content() {
        return (
            <div className="main-content"> 
                {this.state.panel} 
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.header()}
                {this.content()}
            </div>
        );
    }

}