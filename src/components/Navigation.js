import React, { Component } from 'react'

class Navigation extends Component {
	render() {
		return (
			<div className='navbar-wrapper'>
				<nav
					className='navbar navbar-default navbar-fixed-top'
					role='navigation'
				>
					<div className='container'>
						<div className='navbar-header page-scroll'>
							<a className='navbar-brand' href='#page-top' id='i18_title'>
								<span data-i18n='website.title'>Ravi Jagani</span>
							</a>
						</div>
						<div id='navbar' className='navbar-collapse collapse'>
							<ul className='nav navbar-nav navbar-right' id='i18_navbar'>
								<li className=''>
									<a className='navbar-brand' id='i18_title' href='#about-me'>
										<span data-i18n='nav.about_me'>About</span>
									</a>
								</li>
								<li className=''>
									<a className='navbar-brand' id='i18_title' href='#career'>
										<span data-i18n='nav.career'>Career</span>
									</a>
								</li>
								<li className=''>
									<a className='navbar-brand' id='i18_title' href='#education'>
										<span data-i18n='nav.education'>Education</span>
									</a>
								</li>
								<li className=''>
									<a className='navbar-brand' id='i18_title' href='#skills'>
										<span data-i18n='nav.skills'>Skills</span>
									</a>
								</li>
								<li className=''>
									<a className='navbar-brand' id='i18_title' href='#projects'>
										<span data-i18n='nav.projects'>Projects</span>
									</a>
								</li>
								<li className=''>
									<a className='navbar-brand' id='i18_title' href='#links'>
										<span data-i18n='nav.link'>Links</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navigation
