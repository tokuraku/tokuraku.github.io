window.onload = function(){
	var textEdit = document.querySelector('input#password');
	textEdit.onkeypress = function(e) {
		if (e.keyCode == 13) {
			getContent(e.target.value);
		}
	}
	
	var params = new URLSearchParams(location.search);
	var pass = params.get('key');
	if (pass != null) {
		getContent(pass)
	}
}

function getContent(key) {
	removeInput();
	var url = '/weather'
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var decrypted = decrypt(CryptoJS.mode.CBC, xhr.responseText, key);
			var resHTML = document.createElement('div');
			resHTML.innerHTML = decrypted;
			document.querySelector('div#content').appendChild(resHTML);
			//document.querySelector('div#weather').innerHTML = decrypted;
			rader();
		}
	}
	xhr.send();
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


