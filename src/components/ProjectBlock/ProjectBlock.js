
import React, { Component } from 'react'
import './style.css'
import tenor from '../../../public/images/tenor.gif'
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
                                // backgroundImage: `url(${tenor})`
                                backgroundImage: `url(${this.project.image})`
                                }}>
                        </div>
                    </a>
                </div>
                <div className="project-info">
                    <h4 style={{paddingTop: 5}}>{this.project.title}</h4>
                    <h6>{this.project.description}</h6>
                    <h6>{this.project.timestamp}</h6>
                </div>
            </div>
        )
    }
}
