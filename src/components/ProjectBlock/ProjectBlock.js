
import React, { Component } from 'react'
import './style.css'
import tenor from './tenor.gif'
export default class ProjectBlock extends Component {
    constructor(props) {
        super(props);
        this.project = props.projectInfo;
    }
    render () {
        return (
            <div className="project-block">
                <div className="image-info">
                    <a href={this.project.link} target="_blank">
                        <div className="image"
                            style={{
                                width:450,
                                height:350,
                                backgroundImage: `url(${tenor})`
                                }}>
                        </div>
                    </a>
                </div>
                
                <div className="project-info">
                    <h1>{this.project.title}</h1>
                    <h3>{this.project.description}</h3>
                    <h5>{this.project.timestamp}</h5>
                </div>
            </div>
        )
    }
}
