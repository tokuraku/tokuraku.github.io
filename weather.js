function parseKey(key) {
	return CryptoJS.enc.Utf8.parse(key);
}
window.onload = function(){
	if (location.hash == '#weather') {
		var url = '/weather.html'
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				const key = '123456';
				const md5 = CryptoJS.MD5(key).toString();
				const iv = md5.substr(0, 16);
				const data = xhr.responseText;
				const uKey = parseKey(md5);
				const uIv = parseKey(iv);
				
				let bytes = CryptoJS.AES.decrypt(text.value, uKey,
				{
					iv: uIv,
					mode: CryptoJS.mode.CBC,
					padding: CryptoJS.pad.Pkcs7
				});
				
				document.querySelector('div#weather').innerHTML = bytes.toString(CryptoJS.enc.Utf8);
			}
		}
		xhr.send();
	}
}
