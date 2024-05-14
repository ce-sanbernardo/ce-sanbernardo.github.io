//-------------------------------------------------------------------------
//-------------------------------------------------------------------------


class base{
	constructor(){
		this.base;
		this.data;
		this.keys;
		this.values = [];
	}
	getJSON(get,directory){
		let txt = null;
		let xmlhttp = new XMLHttpRequest();
		xmlhttp.open(get,directory,false);
		xmlhttp.send();
		if(xmlhttp.status == 200){
			txt = xmlhttp.responseText;
		}else{
			xmlhttp.open(get,"js/base/error.json",false);
			xmlhttp.send();
			txt = xmlhttp.responseText;
		}
		this.base = txt;
	}
	initBase(){
		this.data = JSON.parse(this.base);
		this.keys = Object.keys(this.data);
		this.values = Object.values(this.data);
	}
	getLenKeys(){
		return this.keys.length;
	}
	getLenPrimordial(){
		return this.keys.primordial.length;
	}
	getLenAntigua(){
		return this.keys.antigua.length;
	}
	getLenCristiandad(){
		return this.keys.cristiandad.length;
	}
	getLenModerna(){
		return this.keys.moderna.length;
	}
	getValueTitle(i){
		return this.values[i].titulo;
	}
	getValueId(i){
		return this.values[i].id;
	}
	getValueText(i){
		return this.values[i].texto;
	}
	getAutor(i){
		return this.values[i].autor;
	}
	getFecha(i){
		return this.values[i].fecha;
	}
}

export {base}