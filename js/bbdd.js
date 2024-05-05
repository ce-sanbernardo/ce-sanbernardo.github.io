const article = readText("js/bbdd.json");

function readText(nameJSON)
{
	let txt = null;
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",nameJSON,false);
	xmlhttp.send();
	if(xmlhttp.status == 200){
		txt = xmlhttp.responseText;
	}
	return txt;
}


export {article}