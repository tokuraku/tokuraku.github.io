window.onload = function(){
	if (location.hash == '#weather') {
		var url = '/weather'
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				const key = '123456';
				var decrypted = decrypt(CryptoJS.mode.CBC, xhr.responseText, key);
				var resHTML = document.createElement('div');
				resHTML.innerHTML = decrypted;
				//document.querySelector('div#weather').appendChild(resHTML);
				document.querySelector('div#weather').innerHTML = resHTML;
				//document.querySelector('div#weather').innerHTML = decrypted;
				rader();
			}
		}
		xhr.send();
	}
}

function rader() {
	var img = document.querySelector('img#rainrader')
	img.addEventListener('click', function (e) {
		var target = e.target;
		var pres = document.querySelectorAll('pres');
		var index = parseInt(target.getAttribute('index'));
		if (e.offsetX > target.width / 2) {
			if (index + 1 < pres.length) {
				target.src = pres[index + 1].getAttribute('src');
				target.setAttribute('index', index + 1);
			}
		} else {
			if (index - 1 >= 0) {
				target.src = pres[index - 1].getAttribute('src');
				target.setAttribute('index', index - 1);
			}
		}
	},false);
}
