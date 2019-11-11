import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';
import ProjectSection from './components/ProjectSection/ProjectSection';
// import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Links from './components/Links/Links';
import 'bootstrap/dist/css/bootstrap.min.css';
import project1Image from '../public/images/project1.JPG';
import project2Image from '../public/images/project2.JPG';
import project3Image from '../public/images/project3.jpg';
import project4Image from '../public/images/project4.png'; 
import project5Image from '../public/images/project5.JPG';
import project6Image from '../public/images/project6.JPG';
import tenor from '../public/images/tenor.gif';
class App extends Component {
	render() {
		let projects = [
			{
				title:"Cradle",
				description:"A patient management service for a non-profit",
				timestamp:"Sept 2019 - current",
				link:"",
				image:project1Image
			},
			{
				title:"RFD Tracker",
				description:"description-this is project 2",
				timestamp:"Jun 2018 - current",
				link:"",
				image:project2Image
			},
			{
				title:"Movie Data Analysis",
				description:"description-this is project 3",
				timestamp:"Jan 2019 - Apr 2019",
				link:"",
				image:project3Image
			},
			{
				title:"Learn with Sudoku",
				description:"Android app - learn vocabulary using sudoku",
				timestamp:"Jan 2019 - Apr 2019 ",
				link:"",
				image:project4Image
			},
			{
				title:"Dogs in Space",
				description:"2D browser collector game",
				timestamp:"Oct 2017 - Nov 2017",
				link:"",
				image:project5Image
			},
			{
				title:"Gladius",
				description:"2D side scroll shooter",
				timestamp:"Jun 2017 - Aug 2017",
				link:"",
				image:project6Image
			},
		];
	
	
		return (
			<div className="App">
				<Container fluid={true} className="god-container" style={{paddingLeft: 0, paddingRight: 0}}>
					<Row className="god-row" style={{marginRight: 0, marginLeft: 0}}>
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
