# Blurry Loading

In this project, I have build a loading page with an image.
Here the image starts blurred (30 pixels and it's going to 0 pixels) and text with 0% that goes up 100%.

We could use it to load a gallery of images or you could load your website.

For this project I use a **function scale()** from this [link](https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers) of StackOverflow.

```js
const scale = (number, inMin, inMax, outMin, outMax) => {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
```
