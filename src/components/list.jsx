
import React from 'react';
import '../styles/list.css';

import { getBoundsForCells } from '../utils/day';

import { Cell } from './cell';

export class List extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {};

        this.state.cells = getBoundsForCells(props.group);
    }

    render() {
        return (
            <div className="cells-list">
                {this.state.cells.map(c => (<Cell data={c}/>))}
            </div> 
        );
    }


}