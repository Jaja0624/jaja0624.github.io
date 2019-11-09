import React, { Component } from 'react';
import './App.css';
import ProjectSection from './components/ProjectSection/ProjectSection';
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
		];
	
	
		return (
		<div className="App">
			<ProjectSection projects={projects}/>
		</div>
		);
	}
}

export default App;
