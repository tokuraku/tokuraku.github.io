function parseKey(key) {
	return CryptoJS.enc.Utf8.parse(key);
}
function decrypt(mode, cipherText, key) {
	const md5 = CryptoJS.MD5(key).toString();
	const iv = md5.substr(0, 16);
	const uKey = parseKey(md5);
	const uIv = parseKey(iv);

	let bytes = CryptoJS.AES.decrypt(cipherText, uKey, {
		iv: uIv,
		mode: mode,
		padding: CryptoJS.pad.Pkcs7
	});
	return bytes.toString(CryptoJS.enc.Utf8);
}
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
				document.querySelector('div#weather').appendChild(resHTML);
				//document.querySelector('div#weather').innerHTML = decrypted;
				rader();
			}
		}
		xhr.send();
	}
}

function rader() {
	var img = document.querySelector('img#rainrader')
	var pres = document.querySelectorAll('pres');
	img.addEventListener('click', function (e) {
		var target = e.target;
		var index = parseInt(target.getAttribute('index'));
		if (e.offsetX > target.width / 2) {
			if (index + 1 < imgs.length) {
				target.src = imgs[index + 1];
				target.setAttribute('index', index + 1);
			}
		} else {
			if (index - 1 >= 0) {
				target.src = imgs[index - 1];
				target.setAttribute('index', index - 1);
			}
		}
	},false);
}
