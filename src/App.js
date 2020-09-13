import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';
import ProjectSection from './components/ProjectSection/ProjectSection';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
	render() {
		let projects = [
			{
				title:"Herald - A Check In App",
				description:"Cross platform mobile app - Let your people know you are ok",
				timestamp:"Jul 2020 - current",
				techstack:"React Native, Javascript, Firebase, GCP Cloud Functions",
				link:"",
				image: [require('../public/images/project7-1.jpg'), require('../public/images/project7-2.jpg'), require('../public/images/project7-3.jpg')]
			},
			{
				title:"Cradle",
				description:"A patient management service for a non-profit",
				timestamp:"Sept 2019 - current",
				techstack:"Java, Spring Boot, MySQL, Docker, Javascript, Vuejs, HTML, CSS",
				link:"",
				image: [require('../public/images/project1-2.JPG'), require('../public/images/project1.JPG')],
			},
			{
				title:"RFD Tracker",
				description:"Web app - redflagdeals buddy",
				timestamp:"Jun 2017",
				techstack:"Javascript, Nodejs/Express, MongoDB, JQuery, Bootstrap, HTML, CSS",
				link:"",
				image: [require('../public/images/project2.JPG')]
			},
			{
				title:"Movie Data Analysis",
				description:"Analyzing and predicting movie data trends",
				timestamp:"Jan 2019 - Apr 2019",
				techstack:"Python, pandas, numpy, scikit-learn, matplotlib",
				link:"",
				image: [require('../public/images/project3.jpg')]
			},
			{
				title:"Learn with Sudoku",
				description:"Android app - learn vocabulary using sudoku",
				timestamp:"Jan 2019 - Apr 2019 ",
				techstack:"Java, Android, JUnit",
				link:"",
				image: [require('../public/images/project4.png')]
			},
			{
				title:"Dogs in Space",
				description:"2D browser collector game",
				timestamp:"Oct 2017 - Nov 2017",
				techstack:"Javascript, HTML, CSS",
				link:"",
				image: [require('../public/images/project5-2.JPG')]
			},
			{
				title:"Gladius",
				description:"2D side scroll shooter",
				timestamp:"Jun 2017 - Aug 2017",
				techstack:"Java, 2D Graphics",
				link:"",
				image: [require('../public/images/project6.JPG')]
			},
		];
	
	
		return (
			<div className="App">
				<Container fluid={true} className="god-container" style={{paddingLeft: 0, paddingRight: 0}}>
					<Row className="god-row" style={{marginRight: 0, marginLeft: 0}}>
						<Col md="3" className="sidebar" style={{paddingLeft: 0, paddingRight: 0}}> 
							<About></About>
						</Col>
						<Col md="9" className="not-sidebar">
							<ProjectSection projects={projects}/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
