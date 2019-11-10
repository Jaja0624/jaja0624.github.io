import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default class Links extends Component {
    render () {
        return (
            <div className="links">
                <ButtonGroup className="link-btn-group" size="lg" >
                    <Button className="link-btn" variant="dark" style={{borderRadius: 0}}>Github</Button>
                    <Button className="link-btn" variant="dark">LinkedIn</Button>
                    <Button className="link-btn" variant="dark" style={{borderRadius: 0}}>Resume</Button>
                </ButtonGroup>
            </div>
        )
    }
}