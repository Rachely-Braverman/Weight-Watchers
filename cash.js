const options = {
	method: 'GET',
	headers: {'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY', 'X-RapidAPI-Host': 'chomp.p.rapidapi.com'}
};

fetch('https://chomp.p.rapidapi.com/data/pull/nutrition.php', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));