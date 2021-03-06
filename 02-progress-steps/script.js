const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
function updateCircle() {
	circles.forEach((circle, index) => {
		index < currentActive
			? circle.classList.add('active')
			: circle.classList.remove('active')
	})
}

next.addEventListener('click', () => {
	currentActive += 1
	if (currentActive > circles.length) currentActive = circles.length
	updateCircle()
})

prev.addEventListener('click', () => {
	currentActive -= 1
	if (currentActive < 1) currentActive = 1
	updateCircle()
})

const actives = document.querySelectorAll('.active')
progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`
// console.log(actives.length/circles.length *100)
// console.log((actives.length/circles.length) *100 )

if (currentActive === 1) {
	prev.disabled = true
} else if (currentActive === circles.length) {
	next.disabled = true
} else {
	prev.disabled = false
	next.disabled = false
}
