import React, { Component } from 'react'
import LINKS from '../data/link_data'

class Link_props extends Component {
	render() {
		const { id, title, image, link } = this.props.link_prop
		return (
			<li>
				<a href={link} target='blank'>
					<img src={image} height='35' width='35' />
				</a>
			</li>
		)
	}
}

class Link extends Component {
	render() {
		return (
			<section
				id='links'
				className='features gray-section contact'
				style={{ ['margin-top']: '0' }}
			>
				<div className='container' id='i18_link'>
					<div className='row m-b-lg'>
						<div className='col-lg-12 text-center'>
							<div className='navy-line'></div>
							<h1>
								<span data-i18n='link.link'>Link</span>
							</h1>
						</div>
					</div>
					<div className='row'>
						<div>
							<div className='team-member'>
								<h4>
									<span className='navy'>Jagani</span> Ravi
								</h4>
								<p>Computer Programmer, Gamer, Bibliophile, Theatric</p>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg'>
							<p id='jalpc_site_pv'>
								<strong>© 2020 Ravi Jagani</strong>
							</p>
							<ul className='list-inline social-icon'>
								{LINKS.map(LINK => (
									<Link_props key={LINK.id} link_prop={LINK}></Link_props>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Link
