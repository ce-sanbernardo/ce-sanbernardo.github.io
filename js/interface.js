//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

import * as menu from './menuArticles.js';
import * as render from './render.js';

// TAREA: Un indice por submenu (el cual se genera de forma dinamica)

// Generar el submenu en base a la BBDD

class Interface{
	constructor(){
		this.inicio = document.getElementById("inicio");
		this.contactos = document.getElementById("contacto");
		this.menufloat = document.getElementById("menufloat");
		this.menuFloat = false;
		this.renderer = new render.render();
		this.MenuArticles = new menu.MenuArticles();
		this.originTitle = this.renderer.getValueOriginTitle();
		this.originText = this.renderer.getValueOriginText();
		this.generos = [];
		for (let i=0; i<this.MenuArticles.manager.Nsubgeneros; i++){
			this.generos[i] = this.MenuArticles.manager.iden[i];
		}
		this.subgeneros = [];
	}
	Imenu(index){
		let keys = [];
		let values = [];
		let num = 0;
		let text;
		let text2;
		for (let i=0; i<Object.keys(this.MenuArticles.manager.data.data).length; i++){
			for (let j=0; j<this.MenuArticles.manager.values[i].length; j++){
keys	[num]	= (Object.keys(  this.MenuArticles.manager.values[i][j]));
values	[num]	= (Object.values(this.MenuArticles.manager.values[i][j]));
num++;
			}
		}
		text = values[index];
		text2 = keys[index];
		this.MenuArticles.initManBase(text);
		this.MenuArticles.initMenu();
		this.MenuArticles.initIden();
		this.IeventsFloat();
	}
	IeventsFloat(){
		for(let i=0; i<this.MenuArticles.ManBase.length; i++){
			this.MenuArticles.inden[i].addEventListener("click",()=>{
				this.MenuArticles.ManBase[i].initArticle(0);
				this.renderer.renderer(this.MenuArticles.ManBase[i].title,
										this.MenuArticles.ManBase[i].text);
				if(this.menuFloat==false){
					this.scroll();
					this.menufloat.style.display = "block";
					this.menuFloat = true;
				}else{
					this.scroll();
					this.menufloat.style.display = "none";
					this.menuFloat = false;
				}
			});
		}
	}
	Ievents(){
		this.inicio.addEventListener("click",()=>{
			this.renderer.renderer(this.originTitle,this.originText);
		});
		for(let i=0; i<this.MenuArticles.manager.Nsubgeneros; i++){
			this.generos[i].addEventListener("click",()=>{
				if(this.menuFloat==false){
					this.Imenu(i);
					this.menufloat.style.display = "block";
					this.menuFloat = true;
				}else{
					this.Imenu(i);
					this.menufloat.style.display = "block";
					this.menuFloat = false;
				}
			});
		}
		this.contactos.addEventListener("click",()=>{
			this.renderer.renderer(
				"Contactos",
				`<center>
				<h1>Correo del instituto San Bernardo:</h1>
				ins.sanbernardo@gmail.com<br>
				<h1>Correo de la página:</h1>
				ce-sanbernardo@gmail.com<br>
				<h1>Página principal del instituto:</h1>
				<a href='https://institutosanbernardo.com.ar'>Instituto San Bernardo</a>
				</center>`);
		});
	}
	scroll(){
		if(window.chrome){
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}else{
			window.scrollTo({
				top: 0
			});
		}
	}
}




//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

export {Interface}