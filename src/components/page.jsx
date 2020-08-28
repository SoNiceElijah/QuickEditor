
import React from 'react';
import '../styles/page.css';

import { Field } from './field';

export class Page extends React.Component {

    render() {
        return (
            <div className="the-most-big-one">
                <div className="header"> QUICK<span>EDITOR</span> </div>
                <Field />   
            </div> 
        );
    }


}