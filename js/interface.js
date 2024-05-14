//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

import * as menu from './menuArticles.js';
import * as render from './render.js';
import * as baseManager from './baseManager.js';

// TAREA: Un indice por submenu (el cual se genera de forma dinamica)

// Generar el submenu en base a la BBDD

class Interface{
	constructor(){
		this.inicio = document.getElementById("inicio");
		this.biblioteca = document.getElementById("biblioteca");
		this.blog = document.getElementById("blog");
		this.noticias = document.getElementById("noticias");
		this.contactos = document.getElementById("contacto");
		this.menufloat = document.getElementById("menufloat");
		this.menuflotante = [];
		this.menuflotante[0] = document.getElementById("menufloat");
		this.menuFloat = false;
		this.renderer = new render.render();
		this.MenuArticles = new menu.MenuArticles("js/base/list_articles.json");
		this.MenuArticlesBlog = new menu.MenuArticles("js/base/blog.json",this.menuflotante,1);
		this.MenuArticlesNoticias = new menu.MenuArticles("js/base/noticias.json",this.menuflotante,1);


		this.originTitle = this.renderer.getValueOriginTitle();
		this.originText = this.renderer.getValueOriginText();
		this.generos = [];
		for (let i=0; i<this.MenuArticles.manager.Nsubgeneros; i++){
			this.generos[i] = this.MenuArticles.manager.iden[i];
		}
		this.subgeneros = [];
	}
	Imenu(index, MenuArticles = this.MenuArticles){
		let keys = [];
		let values = [];
		let num = 0;
		let text;
		let text2;
		for (let i=0; i<Object.keys(MenuArticles.manager.data.data).length; i++){
			for (let j=0; j<MenuArticles.manager.values[i].length; j++){
keys	[num]	= (Object.keys(  MenuArticles.manager.values[i][j]));
values	[num]	= (Object.values(MenuArticles.manager.values[i][j]));
num++;
			}
		}
		text = values[index];
		text2 = keys[index];
		MenuArticles.initManBase(text);
		MenuArticles.initMenu();
		MenuArticles.initIden();
		this.IeventsFloat(MenuArticles);
	}
	IeventsFloat(MenuArticles = this.MenuArticles){
		for(let i=0; i<MenuArticles.ManBase.length; i++){
			MenuArticles.inden[i].addEventListener("click",()=>{
				MenuArticles.ManBase[i].initArticle(0);
				this.renderer.renderer(MenuArticles.ManBase[i].title,
										MenuArticles.ManBase[i].text);
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
		this.biblioteca.addEventListener("click",()=>{
			let biblio = new baseManager.baseManager();
			biblio.selectArticle("js/base/biblioteca.json");
			biblio.initArticle(0);
			this.renderer.renderer(biblio.title,biblio.text);
		});
		this.blog.addEventListener("click",()=>{
			if(this.menuFloat==false){
					this.Imenu(0,this.MenuArticlesBlog);
					this.menufloat.style.display = "block";
					this.menuFloat = true;
				}else{
					this.Imenu(0,this.MenuArticlesBlog);
					this.menufloat.style.display = "block";
					this.menuFloat = false;
			}
		});
		this.noticias.addEventListener("click",()=>{
			if(this.menuFloat==false){
					this.Imenu(0,this.MenuArticlesNoticias);
					this.menufloat.style.display = "block";
					this.menuFloat = true;
				}else{
					this.Imenu(0,this.MenuArticlesNoticias);
					this.menufloat.style.display = "block";
					this.menuFloat = false;
			}
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