
import React, { Component } from 'react'
import './style.css'
import me from '../../../public/images/me.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class ProjectBlock extends Component {
    constructor(props) {
        super(props);
        this.project = props.projectInfo;
    }
    render () {
        if (!this.props.projectInfo) {
            return (
                <div className="project-block">
                    <div className="image-info">
                        
                    </div>
                    <div className="project-info">
                      
                    </div>
                </div>
            )
        }
        return (
            <div className="project-block">
                    <div className="image-info">
                        <Carousel autoPlay>
                            {this.project.image.map(img => (
                                <a>
                                    <div className="image"
                                        style={{
                                            backgroundImage: `url(${img})`
                                            }}>
                                    </div>
                                </a>
                            ))}
                        </Carousel>    
                    </div>
                
                <div className="project-info">
                    <h4 style={{paddingTop: 5, fontFamily:'Roboto Mono'}}>{this.project.title}
                    {this.project.link.length ? <a target="_blank" style={{fontSize: 15, paddingLeft: 15, fontWeight: 'bold'}} href={this.project.link}>Play Store</a> : null}
                    </h4>
                    <h6 style={{fontFamily:'Roboto Mono'}}>{this.project.description}</h6>
                    <h6 style={{fontStyle:'italic', fontSize:13, color:'blue', fontFamily:'Roboto Mono'}}>{this.project.techstack}</h6>
                </div>
            </div>
        )
    }
}
