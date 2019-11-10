
import React, { Component } from 'react'
import About from '../About/About'
// import './style.css'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        // this.project = props.projectInfo;
    }
    render () {
        return (
            <div className="sidebar">
                <About></About>
            </div>
        )
    }
}