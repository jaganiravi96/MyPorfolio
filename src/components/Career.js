import React, { Component } from 'react'
import CAREERS from '../data/career_data'

class Career_props extends Component {
	render() {
		const {
			id,
			image,
			time,
			position,
			organization,
			summery
		} = this.props.career_prop
		return (
			<div className='vertical-timeline-block'>
				<div
					className='vertical-timeline-icon navy-bg wow rotateIn'
					style={{ visibility: 'visible', ['animation-name']: 'rotateIn' }}
				>
					<img src={image} height='50' width='50' />
				</div>
				<div
					className='vertical-timeline-content wow rotateInUpRight'
					style={{
						visibility: 'visible',
						['animation-name']: 'rotateInUpRight'
					}}
				>
					<h2>
						<span data-i18n='career.wm'>{organization}</span>
					</h2>
					<p>
						<span data-i18n='career.wm_desc'>{summery}</span>
					</p>
					<span className='vertical-date'>
						<span data-i18n='career.wm_date'>{time}</span>
						<br />
						<small>
							<span data-i18n='career.wm_job'>{position}</span>
						</small>
					</span>
				</div>
			</div>
		)
	}
}
class Career extends Component {
	render() {
		return (
			<section
				id='career'
				class='features gray-section timeline'
				style={{ ['margin-top']: '0' }}
			>
				<div className='container' id='i18_career'>
					<div className='row'>
						<div className='col-lg-12 text-center'>
							<div className='navy-line'></div>
							<h1>
								<span data-i18n='career.my_career'>My Career</span>
							</h1>
						</div>
					</div>
					<div className='row features-block'>
						<div className='col-lg-12'>
							<div
								id='vertical-timeline'
								className='vertical-container light-timeline center-orientation'
							>
								{CAREERS.map(CAREER => (
									<Career_props
										key={CAREER.id}
										career_prop={CAREER}
									></Career_props>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Career
