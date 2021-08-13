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

function removeInput() {
	var textEdit = document.querySelector('input#password');
	if (textEdit != null) {
		textEdit.parentElement.removeChild(textEdit);
	}
}

function showSecret() {
	var keyInput = document.querySelector('input#password');
	var secret = document.querySelector('div#secret');
	console.log(secret)
	if (keyInput != null) {
		var dec = decrypt(CryptoJS.mode.CBC, secret.innerHTML, keyInput.value);
		secret.style.display = 'block';
		secret.innerHTML = dec;
	}
}
