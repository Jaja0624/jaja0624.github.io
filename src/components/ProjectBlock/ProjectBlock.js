
import React, { Component } from 'react'
import './style.scss'

export default class ProjectBlock extends Component {
    constructor(props) {
        super(props);
        this.project = props.projectInfo;
    }
    render () {
        return (
            <div className="project-block">
                <a href={this.project.link} target="_blank">
                <div className="image">
                </div>
                </a>
                <div className="project-info">
                    <h1>{this.project.title}</h1>
                    <h3>{this.project.description}</h3>
                    <h5>{this.project.timestamp}</h5>
                </div>
            </div>
        )
    }
}
