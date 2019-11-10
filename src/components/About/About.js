import React, { Component } from 'react'
import tenor from '../../../public/images/tenor.gif'
import giphy from '../../../public/images/giphy.gif'
import Image from 'react-bootstrap/Image'
import './style.css'

export default class About extends Component {
    render () {
        return (
            <div className="about">
                <div className="about-image-div">
                    <Image roundedCircle className="about-image"
                    // onMouseOver={e => (e.currentTarget.src = giphy)}
                    // onMouseOut={e => (e.currentTarget.src = tenor)}
                    />
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