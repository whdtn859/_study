$(function(){

	/* darkmode */
	const darkCheck = document.getElementById('darkMode');
	const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	const isDarkMode = localStorage.getItem('color-theme');

	if(isDarkMode == 'dark'){
		document.documentElement.setAttribute('color-theme', 'dark');
		localStorage.setItem('color-theme', 'dark');
		darkCheck.setAttribute('checked', true);
	}else{
		document.documentElement.setAttribute('color-theme', 'light');
		localStorage.setItem('color-theme', 'light');
	}

	function darkModeHandler(e){
		if(e.target.checked){
			document.documentElement.setAttribute('color-theme', 'dark');
			localStorage.setItem('color-theme', 'dark');
		}else{
			document.documentElement.setAttribute('color-theme', 'light');
			localStorage.setItem('color-theme', 'light');
		}
	}

	darkCheck.addEventListener('click', darkModeHandler);


});