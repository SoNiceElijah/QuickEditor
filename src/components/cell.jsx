
import React from 'react';
import '../styles/cell.css';

export class Cell extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {};

        this.createButton = this.createButton.bind(this);
    }

    createButton(week,sub)
    {
        return (
            <div className="cell-vertical cell-empty">
                <div className="center-info">
                    <div className="cell-info">
                        <div className="cell-info-day">{this.props.data.day + ` (${week})`}</div>
                        <div className="cell-info-time">{this.props.data.time.s}</div>
                        <div className="cell-info-sub">{`Sub ${sub}`}</div>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="cell">
                <div className="cell-horizontal">
                    {this.createButton("U",1)}
                    {this.createButton("U",2)}
                </div>
                <div className="cell-horizontal">
                    {this.createButton("D",1)}
                    {this.createButton("D",2)}
                </div>
            </div> 
        );
    }


}