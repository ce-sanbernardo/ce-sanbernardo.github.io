import * as blog from './blog.js';
import {getBody} from './http.js';

//botones
let inicio = document.getElementById("inicio");
let contac = document.getElementById("contacto");
let biblio = document.getElementById("biblioteca");
let notice = document.getElementById("noticias");
let nblogs = document.getElementById("blog");

//cuerpo del articulo
let tittle = document.getElementById("tittle");
let cuerpo = document.getElementById("text");


//home
let tittlehome = tittle.innerHTML;
let cuerpohome = cuerpo.innerHTML;

//eventos grandes inicio/contactos
inicio.addEventListener("click",function(){
	tittle.innerHTML = tittlehome;
	cuerpo.innerHTML = cuerpohome;
	blog.scroll();
});

contac.addEventListener("click",function(){
	tittle.innerHTML = "Contactos";
	cuerpo.innerHTML = getBody("GET","js/base/contactos");
	blog.scroll();
});

/*
//eventos sub-inicio biblioteca/noticias/blog
biblio.addEventListener("click",function(){
	console.log("Biblioteca!");
});
notice.addEventListener("click",function(){
	console.log("Noticias!");
});
nblogs.addEventListener("click",function(){
	console.log("Blog!");
});
*/
blog.main();




