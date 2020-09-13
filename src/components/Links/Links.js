import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import resumePdf from '../../files/resume.pdf'
import linkedinlogo from '../../../public/images/linkedin-2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default class Links extends Component {
    render () {
        return (
            <div className="links">
                <ButtonGroup className="link-btn-group" size="lg" >
                    <Button className="link-btn" variant="dark" style={{borderRadius: 0}} href="https://github.com/Jaja0624" target="_blank">
                        <p className="link-text">Github</p>
                    </Button>
                    <Button className="link-btn" variant="dark" href="https://linkedin.com/in/jackson-situ-88953216a" target="_blank">
                        <p className="link-text">LinkedIn</p>
                    </Button>
                    <Button className="link-btn" variant="dark" style={{borderRadius: 0}} href={resumePdf} target="_blank">
                        <p className="link-text">Resume</p>
                    </Button>
                </ButtonGroup>
                <div className="links-footer">
                    <p className="bur">-- Built using <a className="bur-link" href="https://reactjs.org/">Reactjs</a></p>
                    <p className="date">Sept 2020</p>
                </div>
                

            </div>
        )
    }
}