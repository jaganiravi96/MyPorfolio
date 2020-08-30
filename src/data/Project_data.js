import Image_Processing from '../assets/Image_Processing.png'
import Music_Master from '../assets/Music_Master.png'
import Budgety from '../assets/Budgety.png'
import Chikitsa from '../assets/Chikitsa.png'
import Pig_Game from '../assets/Pig_Game.png'

const Project_data = [
	{
		id: 1,
		image: Image_Processing,
		RepoName: 'Image_Processing_with_Multithreading',
		link:
			'https://github.com/jaganiravi96/Image_Processing_with_Multithreading',
		description:
			'Web Page which can convert the image by reading RGB color value, pixel by pixel with multiple thread an convert it by choice of color we select.',
		class_name: 'col-sm-6 wow fadeInLeft'
	},
	{
		id: 2,
		image: Chikitsa,
		RepoName: 'Chikitsa',
		link: 'https://github.com/jaganiravi96/Chikitsa',
		description:
			'A hospital management Application for The Rural Area. Can Provide the service with a single click from professional staff with the flexibility of ticket management',
		class_name: 'col-sm-6 wow fadeInRight'
	},
	{
		id: 3,
		image: Budgety,
		RepoName: 'Budgety',
		link: 'https://github.com/jaganiravi96/Budgety',
		description:
			'JavaScript Budget App to store expenses and income with details',
		class_name: 'col-sm-6 wow fadeInLeft'
	},
	{
		id: 4,
		image: Music_Master,
		RepoName: 'Music_Master',
		link: 'https://github.com/jaganiravi96/Music_master',
		description: 'Music player application with reactjs using spotify api',
		class_name: 'col-sm-6 wow fadeInRight'
	},
	{
		id: 5,
		image: Pig_Game,
		RepoName: 'Pig_Game',
		link: 'https://github.com/jaganiravi96/Pig_Game',
		description:
			'Dice rolling game, making use of DOM and Javascript basics to create an interactive game',
		class_name: 'col-sm-6 wow fadeInLeft col-sm-offset-3'
	}
]

export default Project_data
