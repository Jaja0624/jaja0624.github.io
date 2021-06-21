
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectBlock from '../ProjectBlock/ProjectBlock'
import './style.css'

/**
 * Consists of the entire project section (all rows and cols)
 */
export default class ProjectSection extends Component {
    constructor(props) {
        super(props);
        this.projects = props.projects;
    }

    render () {
        return (
            <Container fluid={true} className="container-project">
                <h2 className="project-section-title">Projects</h2>
                    <Row className="project-row">
                        <Col xs="12" md="4"><ProjectBlock projectInfo={this.projects[0]}></ProjectBlock></Col>
                        <Col xs="12" md="4"><ProjectBlock projectInfo={this.projects[1]}></ProjectBlock></Col>
                        <Col xs="12" md="4"><ProjectBlock projectInfo={this.projects[2]}></ProjectBlock></Col>
                    </Row>
                    <Row className="project-row align-items-center">
                        <Col xs="12" md="4"><ProjectBlock projectInfo={this.projects[3]}></ProjectBlock></Col>
                        <Col xs="12" md="4"><ProjectBlock projectInfo={this.projects[4]}></ProjectBlock></Col>
                        <Col xs="12" md="4"><ProjectBlock projectInfo={this.projects[5]}></ProjectBlock></Col>
                    </Row>
                    <Row className="project-row align-items-center">
                        <Col xs="12" md="4"><ProjectBlock projectInfo={this.projects[6]}></ProjectBlock></Col>
                        <Col xs="12" md="4"><ProjectBlock></ProjectBlock></Col>
                        <Col xs="12" md="4"><ProjectBlock></ProjectBlock></Col>
                    </Row>
            </Container>
        )
    }
}