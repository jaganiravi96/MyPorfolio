import React, { Component } from 'react'
import Chart from 'react-google-charts'

const data = [
	['Skill', 'Level', { role: 'style' }],
	['Java', 8.5, '#1aa3ff'],
	['J2EE', 7, '#4db8ff'],
	['Hibernate Spring', 6, '#4da6ff'],
	['Oracle SQL', 7, '#80bfff'],
	['HTML CSS', 5.5, '#b3d9ff'],
	['Java Script', 7, '#b3e6ff']
]

const options = {
	title: 'Skills & Technology',
	hAxis: { title: 'Technology' },
	vAxis: { title: 'Level', viewWindow: { min: 0, max: 10 } },
	legend: 'none'
}
class Skill extends Component {
	render() {
		return (
			<section
				id='skills'
				className='features gray-section team'
				style={{ ['margin-top']: '0' }}
			>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12 text-center' id='i18_skills'>
							<div className='navy-line'></div>
							<h1>
								<span data-i18n='skills.my_skills'>My Skills</span>
							</h1>
						</div>
					</div>
					<div className='row features-block'>
						<div className='col-lg-1' style={{ ['margin-left']: '15%' }}>
							<Chart
								chartType='ColumnChart'
								height='300px'
								width='700px'
								data={data}
								options={options}
							></Chart>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Skill
