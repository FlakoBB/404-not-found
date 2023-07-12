const image = document.getElementById('image404')

const animation = () => {
	image.classList.add('animated')
	setInterval(() => {
		image.classList.toggle('animated')
	}, 2000)
}

animation()
