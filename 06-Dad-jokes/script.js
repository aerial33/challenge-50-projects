const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const deepEl = document.getElementById('deepl')

async function generateJoke() {
	try {
		const config = { headers: { Accept: 'application/json' } }
		const resJoke = await fetch('https://icanhazdadjoke.com', config)
		const JokeData = await resJoke.json()
		const jokeText = JokeData.joke
		jokeEl.innerHTML = jokeText
		// console.log(data)
		const resDeepl = await fetch(
			`https://api-free.deepl.com/v2/translate?auth_key=[your_auth_key]&text=${jokeText}&target_lang=FR`
		)
		const DeeplData = await resDeepl.json()
		deepEl.innerHTML = DeeplData.translations[0].text
	} catch (error) {
		console.error(error)
		jokeEl.innerHTML = 'No Joke sorry !'
	}
}

generateJoke()
jokeBtn.addEventListener('click', generateJoke)
