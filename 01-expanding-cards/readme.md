## Expanding Cards

In this project we build an expanding cards.

We will create some panels class with background image and a heading.
With "Flex" we 'll align all elements.
With Javascript we'll change the class to active and expand's panel image.

Ideas with this kind of card:

- heading with background image
- Testimonials

```javascript
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active')
	})
}
```

script.js
