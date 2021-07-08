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
				title:"Predict Tesla Stock Price Movement with RNN-LSTM ML model using Twitter Sentiment",
				description: "My attempt at time series forecasting using RNN-LSTM ML model. Gathered Tesla twitter sentiment and generated features based on compound values. But, could not prevent LSTM model from overfitting maybe due to lack of data.",
				timestamp:"Nov 2020",
				techstack:"Python, Keras, NLTK, Sklearn, IEXFinance API, Pandas",
				link:"",
				image: [require('../public/images/tesla.png')]
			},
			{
				title:"Lia - A Check In App",
				description:"A very polished scheduled check in mobile application that me and my family use daily. Features -> Create groups, join groups using deep links, scheduling, real time UI updates, remote push notifications using Firebase Cloud Messaging, share images",
				timestamp:"Jul 2020 - current",
				techstack:"React Native, Javascript, Firebase, GCP Cloud Functions",
				link:"https://play.google.com/store/apps/details?id=com.j.lia",
				image: [require('../public/images/project7-0.jpg'), require('../public/images/project7-1.jpg'), require('../public/images/project7-2.jpg')]
			},
			{
				title:"Cradle",
				description:"Multi-platform (Web, Android) patient management service intended for a non-profit. Learned how to build a Spring Boot backend and built a Basic Auth secured backend exchanging data between clients with a MySQL database. Implemented the most critical feature, allow offline Android clients to send messages to Web clients using Twilio API, Javascript, Java and Android",
				timestamp:"Sept 2019 - current",
				techstack:"Twilio API, Java, Spring Boot, MySQL, Docker, Javascript, Vuejs, HTML, CSS",
				link:"",
				image: [require('../public/images/project1-3.PNG'), require('../public/images/project1-2.JPG'), require('../public/images/project1.JPG')],
			},
			{
				title:"RFD Tracker",
				description:"Full stack web app! Track new forum posts from redflagdeals forum in real time! Save keywords and get notifications for them.",
				timestamp:"Jun 2017",
				techstack:"Javascript, Nodejs/Express, MongoDB, JQuery, Bootstrap, HTML, CSS",
				link:"",
				image: [require('../public/images/project2.JPG')]
			},
			{
				title:"Movie Data Analysis",
				description:"Analyzing and predicting movie data trends using statistical and machine learning techniques",
				timestamp:"Jan 2019 - Apr 2019",
				techstack:"Python, pandas, numpy, scikit-learn, matplotlib",
				link:"",
				image: [require('../public/images/project3.jpg')]
			},
			{
				title:"Learn with Sudoku",
				description:"Android app - learn vocabulary using sudoku. Implemented sudoku solver backtracking algorithm as well as importing csv, speech recognition quiz game, game menu, and more",
				timestamp:"Jan 2019 - Apr 2019 ",
				techstack:"Java, Android, JUnit",
				link:"",
				image: [require('../public/images/project4.png')]
			},
			{
				title:"Dogs in Space",
				description:"2D browser collector game. Has animations, some math for movement and hitboxes, and some cute styling",
				timestamp:"Oct 2017 - Nov 2017",
				techstack:"Javascript, HTML, CSS",
				link:"",
				image: [require('../public/images/project5-2.JPG')]
			},
			{
				title:"Gladius",
				description:"2D side scroll shooter in Java. Has animations, some math for movement and hitboxes, and not much styling. Heavily utilized Object Oriented Design principles.",
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
