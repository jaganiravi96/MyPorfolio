import React, { Component } from 'react'
import PROJECTS from '../data/Project_data'

const API_ADDRESS = 'https://api.github.com/repos/jaganiravi96'

class Project_props extends Component {
	// state = { flag: true, RepoName: null, repository: [] }

	// updateState = repo_name => {
	// 	this.setState({ RepoName: repo_name })
	// 	searchRepo = this.state.RepoName
	// }

	// searchRepo = RepoName => {
	// 	fetch(`${API_ADDRESS}/${RepoName}`)
	// 		.then(response => response.json())
	// 		.then(json => {
	// 			console.log(json)
	// 			if (json.id !== null) {
	// 				this.setState({ repository: json })
	// 				console.log(json)
	// 			}
	// 		})
	// 		.catch(error => alert(error.message))
	// }
	render() {
		const {
			id,
			image,
			RepoName,
			link,
			description,
			class_name
		} = this.props.project_prop
		console.log(id, RepoName)
		return (
			<div>
				<div
					className={class_name}
					style={{ visibility: 'visible', ['animation-name']: 'fadeInLeft' }}
				>
					<div className='team-member'>
						<a href={link} target='_blank'>
							<img src={image} height='110' width='110' />
							<h4>
								<span className='navy'>{RepoName}</span>
							</h4>
						</a>
						<p>
							<span data-i18n='projects.annomage'>{description}</span>
						</p>
					</div>
				</div>
			</div>
		)
	}
}
class Project extends Component {
	render() {
		return (
			<section
				id='projects'
				className='features project'
				style={{ ['margin-top']: '0' }}
			>
				<div className='container' id='i18_projects'>
					<div className='row m-b-lg'>
						<div className='col-lg-12 text-center'>
							<div className='navy-line'></div>
							<h1>
								<span data-i18n='projects.my_projects'>My Projects</span>
							</h1>
						</div>
					</div>
					<div className='row'>
						{PROJECTS.map(PROJECT => (
							<Project_props
								key={PROJECT.id}
								project_prop={PROJECT}
							></Project_props>
						))}
					</div>
				</div>
				<br />
			</section>
		)
	}
}

export default Project
