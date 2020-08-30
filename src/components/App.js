import React, { Component } from 'react'
import Navigation from './Navigation'
import AboutMe from './AboutMe'
import Career from './Career'
import Education from './Education'
import Skill from './Skill'
import Project from './Project'
import Link from './Link'

class App extends Component {
	render() {
		return (
			<div>
				<div style={{ ['text-align']: 'center' }}>
					<Navigation />
					<AboutMe />
				</div>
				<Career />
				<Education />
				<Skill />
				<Project />
				<Link />
			</div>
		)
	}
}

export default App
