
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------


class render{
	constructor(){
		this.titlePagine = document.getElementById("tittle");
		this.textPagine = document.getElementById("text");
	}
	renderer(title,text){
		this.titlePagine.innerHTML = title;
		this.textPagine.innerHTML = text;
	}
	getValueOriginTitle(){
		return document.getElementById("tittle").innerHTML;
	}
	getValueOriginText(){
		return document.getElementById("text").innerHTML;
	}
}

export {render}