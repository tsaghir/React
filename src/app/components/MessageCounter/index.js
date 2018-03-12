import React, {Component} from 'react';
import './css/index.css';

export default class MessageCounter extends Component{
    render(){
        return(
            <div className="totalCounter">
                {this.props.totalCount} items
            </div>
        );
    }
}