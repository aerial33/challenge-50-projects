const hourEl = document.getElementById('hours')
const secondEl = document.getElementById('seconds')
const minuteEl = document.querySelector('.min-needle')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleMode = document.querySelector('.toggle')

const months = [
	'Jan',
	'feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]
const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]
toggleMode.addEventListener('click', e => {
	const html = document.querySelector('html')
	html.classList.toggle('dark')
	html.classList.contains('dark')
		? (e.target.textContent = 'Light mode')
		: (e.target.textContent = 'Dark mode')
})

function setTime() {
	const now = new Date()

	const seconds = now.getSeconds()
	const getSecondsDegrees = (seconds / 60) * 360 + 90
	secondEl.style.transform = `rotate(${getSecondsDegrees}deg)`
	secondEl.style.transition = seconds === 0 ? 'none' : null

	const minutes = now.getMinutes()
	const getMinutesDegrees = (minutes / 60) * 360 + 90
	minuteEl.style.transform = `rotate(${getMinutesDegrees}deg)`

	const hours = now.getHours()
	const getHoursDegrees = (hours / 12) * 360 + 90
	hourEl.style.transform = `rotate(${getHoursDegrees}deg)`

	const ampm = hours >= 12 ? 'PM' : 'AM'
	timeEl.textContent = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
	const day = now.getDate()
	const month = now.getMonth()
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${day}</span>`
}

setInterval(setTime, 1000)
