import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';
import ProjectSection from './components/ProjectSection/ProjectSection';
// import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Links from './components/Links/Links';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
	render() {
		let projects = [
			{
				title:"title-project1",
				description:"description-this is project 1",
				timestamp:"timestamp-2017-2018",
				link:""
			},
			{
				title:"title-project2",
				description:"description-this is project 2",
				timestamp:"timestamp-2017-2018",
				link:""
			},
			{
				title:"title-project3",
				description:"description-this is project 3",
				timestamp:"timestamp-2017-2018",
				link:""
			},
			{
				title:"title-project4",
				description:"description-this is project 4",
				timestamp:"timestamp-2017-2018",
				link:""
			},
			{
				title:"title-project5",
				description:"description-this is project 5",
				timestamp:"timestamp-2017-2018",
				link:""
			},
			{
				title:"title-project6",
				description:"description-this is project 6",
				timestamp:"timestamp-2017-2018",
				link:""
			},
		];
	
	
		return (
			<div className="App">
				<Container fluid={true} className="god-container">
					<Row className="god-row">
						<Col xs="3" className="sidebar" style={{paddingLeft: 0, paddingRight: 0}}> 
							<About></About>
							<Links></Links>
						</Col>
						<Col className="not-sidebar">
							<ProjectSection projects={projects}/>
						</Col>
					</Row>
				</Container>
		
			</div>
		);
	}
}

export default App;
