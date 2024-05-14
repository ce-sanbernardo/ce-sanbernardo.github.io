




import * as base from './base.js';

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

class ManagerSubMenu{
	constructor(){
		this.data = new base.base();
		this.data.getJSON("GET","js/base/list_articles.json");
		this.data.initBase();
		this.submenu = [
				document.getElementById("primordial"),
				document.getElementById("antigua"),
				document.getElementById("cristiandad"),
				document.getElementById("moderna")
			];
		this.keys = [
				Object.keys(this.data.data.primordial),
				Object.keys(this.data.data.antigua),
				Object.keys(this.data.data.cristiandad),
				Object.keys(this.data.data.moderna)
			];
		this.values = [
				Object.values(this.data.data.primordial),
				Object.values(this.data.data.antigua),
				Object.values(this.data.data.cristiandad),
				Object.values(this.data.data.moderna)
			];
		this.menufloat = document.getElementById("menufloat");
		this.subtitles = [];
		this.ID = [];
		this.Nsubgeneros;
		this.iden = [];
	}
	initSubMenu(){
		for(let i=0; i<Object.keys(this.data.data).length; i++){
			this.subtitles[i] = `<li id="${this.keys[i][0]}"><a>${this.keys[i][0]}</a></li>\n`;
			for(let j=1; j<this.keys[i].length; j++){
				this.subtitles[i] += `<li id="${this.keys[i][j]}"><a>${this.keys[i][j]}</a></li>\n`;
			}
		}
	}
	addSubMenu(){
		for(let i=0; i<Object.keys(this.data.data).length; i++){
			this.submenu[i].innerHTML = this.subtitles[i];
		}
	}
	searchID(){
		this.Nsubgeneros = 0;
		for(let i=0; i<Object.keys(this.data.data).length; i++){
			for(let j=0; j<this.keys[i].length; j++){
				this.ID[this.Nsubgeneros] = this.keys[i][j];
				this.Nsubgeneros++;
			}
		}
		for(let i=0; i<this.Nsubgeneros; i++){
			this.iden[i] = document.getElementById(`${this.ID[i]}`);
		}
	}
	eventBTNSubgenere(){
		for(let i=0; i<this.Nsubgeneros; i++){
			this.iden[i].addEventListener("click",()=>{});
		}
	}
}

export {ManagerSubMenu}