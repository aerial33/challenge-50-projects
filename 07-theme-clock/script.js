const hourEl = document.getElementById('hours')
const secondEl = document.getElementById('seconds')
const minuteEl = document.querySelector('.min-needle')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', e => {
	const html = document.querySelector('html')
	html.classList.toggle('dark')
	html.classList.contains('dark')
		? (e.target.textContent = 'Light mode')
		: (e.target.textContent = 'Dark mode')
})

function setDate() {
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
}

setInterval(setDate, 1000)
