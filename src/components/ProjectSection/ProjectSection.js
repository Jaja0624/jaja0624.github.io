
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import ProjectBlock from '../ProjectBlock/ProjectBlock'

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
            <Container>
                <Row>
                    <Col><ProjectBlock projectInfo={this.projects[0]}/></Col>
                    <Col><ProjectBlock projectInfo={this.projects[1]}/></Col>
                </Row>
                <Row>
                    <Col><ProjectBlock projectInfo={this.projects[2]}/></Col>
                    <Col><ProjectBlock projectInfo={this.projects[0]}/></Col>
                </Row>
            </Container>
        )
    }
}