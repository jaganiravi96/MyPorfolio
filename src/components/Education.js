import React, { Component } from 'react'
import EDUS from '../data/education_data'

class Edu_props extends Component {
	render() {
		const { id, image, time, branch, college } = this.props.edu_prop
		return (
			<div class='vertical-timeline-block'>
				<div
					className='vertical-timeline-icon navy-bg wow rotateIn'
					style={{ visibility: 'visible', ['animation-name']: 'rotateIn' }}
				>
					<img src={image} height='50' width='50' />
				</div>
				<div
					className='vertical-timeline-content dark-timeline wow rotateInUpRight'
					style={{
						visibility: 'visible',
						['animation-name']: 'rotateInUpRight'
					}}
				>
					<h2>
						<span data-i18n='education.education_a'>{college}</span>
					</h2>
					<span className='vertical-date'>
						<span data-i18n='education.education_a_date'>{time}</span>
						<br />
						<small>
							<span data-i18n='education.education_a_job'>{branch}</span>
						</small>
					</span>
				</div>
			</div>
		)
	}
}
class Education extends Component {
	render() {
		return (
			<section
				id='education'
				className='features timeline'
				style={{ ['margin-top']: '0' }}
			>
				<div className='container' id='i18_education'>
					<div className='row'>
						<div className='col-lg-12 text-center'>
							<div className='navy-line'></div>
							<h1>
								<span data-i18n='education.my_education'>My Education</span>
							</h1>
						</div>
					</div>
					<div className='row features-block'>
						<div className='col-lg-12'>
							<div
								id='vertical-timeline'
								className='vertical-container light-timeline center-orientation'
							>
								{EDUS.map(EDU => (
									<Edu_props key={EDU.id} edu_prop={EDU}></Edu_props>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Education
