import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Links from '../Links/Links'
import ContactForm from '../Contact/ContactForm'
import Button from 'react-bootstrap/Button'

import './style.css'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContactForm: false
        }
    }
    
    render () {
        return (
            <div className="about">

                <div className="about-welcome">
                    <h6>Welcome to My Page :)</h6>
                </div>
                <div className="about-image-div">
                    <Image roundedCircle className="about-image"
                    />
                </div>

                <div className="about-info">
                    <h4 style={{fontWeight: "bold"}}>Jackson Situ</h4>
                    <h6>comp sci student</h6>
                    <h6>SFU</h6>
                </div>
                {this.state.showContactForm ? 
                <ContactForm></ContactForm> 
                : 
                <Button className="link-btn" variant="dark" style={{borderRadius: 0}} onClick={() => this.setState({showContactForm: true})}>
                    <p className="link-text">Contact Me</p>
                </Button>
                }

                <div id="linksContainer" style={{paddingTop: 25}}>
                    <Links></Links>
                </div>
                
                <div >
                    <p className="bur">Currently playing with<a className="bur-link" href="https://flutter.dev/" style={{fontWeight: 'bold'}}> Flutter</a></p>
                    <p className="bur">and <a className="bur-link" href="https://developer.apple.com/augmented-reality/arkit/" style={{fontWeight: 'bold'}}> iOS ARKit</a></p>
                    <p className="bur">Also curious about <a className="bur-link" href="https://github.com/keyvanakbary/learning-notes/blob/master/books/designing-data-intensive-applications.md" style={{fontWeight: 'bold'}}> Databases</a></p>
                </div>

                <div className="footer">
                    <p className="bur">-- Built using <a className="bur-link" href="https://reactjs.org/">Reactjs</a></p>
                    <p className="date">Sept 2020</p>
                </div>


            </div>
        )
    }
}