
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
            <Container fluid={true}>
                <h2 className="bold">Projects</h2>
                    <Row>
                        {this.projects.map((proj) => {
                            return <Col xs="4"><ProjectBlock projectInfo={proj}></ProjectBlock></Col>
                        })}
                    </Row>
            </Container>
        )
    }
}