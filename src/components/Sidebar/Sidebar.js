
import React, { Component } from 'react'
// import './style.css'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        // this.project = props.projectInfo;
    }
    render () {
        return (
            <div className="sidebar">
                <h4>Jackson Situ</h4>
                <h5>Aspiring software developer</h5>
            </div>
        )
    }
}