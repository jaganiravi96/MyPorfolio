import React, { Component } from 'react'
import SOCIALS from '../data/social'
import RaviJagani from '../assets/RaviJagani.jpg'

//here we are creating react component so it will be created by class
//here will give the same name of class as we have file name
class Social_props extends Component {
	render() {
		const { id, title, link, image } = this.props.social_prop
		return (
			<li>
				<a href={link} target='blank'>
					<img src={image} height='35' width='35' />
				</a>
			</li>
		)
	}
}
class AboutMe extends Component {
	state = { displayBio: false }

	toggleDisplayBio = () => {
		this.setState({ displayBio: !this.state.displayBio })
	}

	render() {
		return (
			<section
				id='about-me'
				className='features'
				style={{ ['margin-top']: '2%' }}
			>
				<div className='col-xs-4' style={{ left: '33%' }}>
					<div className='row'>
						<div className='col-lg-12 text-center'>
							<div className='navy-line'></div>
							<h1>
								<span data-i18n='career.my_career'>About Me</span>
							</h1>
						</div>
					</div>
					<div
						className='team-member wow zoomIn'
						style={{ visibility: 'visible', ['animation-name']: 'zoomIn' }}
					>
						<img
							src={RaviJagani}
							height='210'
							width='110'
							className='img-responsive img-circle'
							alt='Ravi'
						/>
						<h4>
							<span className='navy'>Ravi</span> Jagani
						</h4>
						<div>
							<ul className='list-inline social-icon'>
								{SOCIALS.map(SOCIAL => (
									<Social_props
										key={SOCIAL.id}
										social_prop={SOCIAL}
									></Social_props>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className='row'>
					<div
						className='col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg wow zoomIn'
						style={{ visibility: 'visible', ['animation-name']: 'zoomIn' }}
					>
						<p>
							<span data-i18n='about_me.des'>
								I am a seasoned IT professional and web development enthusiast.
								My focus has been on delivering Software solutions, specifically
								relating to Inventory and Configuration Management, Geographic
								Information Systems (GIS) and Web Application. Problem-solving
								is a passion of mine and I strive to deliver quality solutions I
								am open to new and exciting career opportunities.
							</span>
							{this.state.displayBio ? (
								<div>
									<p>
										I live in Mumbai, And code everyday. My favorite language is
										java and javascript. Also working with Framework Beside that
										I would like to listen music, and play sudoku & chess.
									</p>
									<button onClick={this.toggleDisplayBio}>Read Less</button>
								</div>
							) : (
								<div>
									<button onClick={this.toggleDisplayBio}>Read More</button>
								</div>
							)}
						</p>
					</div>
				</div>
			</section>
		)
	}
}

export default AboutMe
