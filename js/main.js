import * as blog from './blog.js';
import {getBody} from './http.js';

//botones
let inicio = document.getElementById("inicio");
let contac = document.getElementById("contacto");

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

blog.main();