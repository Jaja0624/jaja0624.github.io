import React, { Component } from 'react'
import tenor from '../../../public/images/tenor.gif'
import Image from 'react-bootstrap/Image'
import './style.css'

export default class About extends Component {
    render () {
        return (
            <div className="about">
                <div className="about-image-div">
                    <Image src={tenor} roundedCircle className="about-image"/>
                </div>
                <div className="about-info">
                    <h4>Jackson Situ</h4>
                    <h6>Cat</h6>
                    <h6>SFU</h6>
                </div>
            </div>
        )
    }
}