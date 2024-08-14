//peticion http
function getBody(type,directory){
	let text = null;
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open(type,directory,false);
	xmlhttp.send();
	if(xmlhttp.status == 200){
		text = xmlhttp.responseText;
	}else{ console.log("Error al enviar"); text = xmlhttp.responseText; }
	return text;
}
export{getBody}
