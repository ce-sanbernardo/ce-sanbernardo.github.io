//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
import * as base from './base.js';

class baseManager{
	constructor(){
		this.data = new base.base();
		this.dataJSON;
		this.title;
		this.text;
		this.length;
	}
	selectArticle(directoryBase){
		this.data.getJSON("GET",directoryBase);
		this.data.initBase();
		this.length = this.data.getLenKeys();
	}
	initArticle(i){
		this.title = this.data.getValueTitle(i);
		this.text = this.data.getValueText(i);
		this.text = this.text.join("<br><br>") + "<br><br>";
		this.text += this.data.getAutor(i) + "<br>" + this.data.getFecha(i);
	}
}


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

export {baseManager}