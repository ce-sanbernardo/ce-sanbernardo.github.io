import * as base from './bbdd.js';

// Edicion de contenido y titulo de los articulos
let texto,titulo;

// Botones del menu flotante de articulos
let BTNmenu;
// Menu flotante de articulos
let menufloat = document.getElementById("menufloat");

// Muy importante!!!
// Acceso a la base de datos
// donde se ubican los articulos
let dataINFO = JSON.parse(base.article);
// Numero de articulos y clave del mismo
let info = Object.keys(dataINFO);
// Acceso al contenido de cada articulo
let articles = Object.values(dataINFO);

// pie de pagina
let pie = document.getElementById("pie");

// Dinamismo de la interfaz

// Dinamismo del boton de INICIO
let btn_inicio = document.getElementById("inicio");
btn_inicio.addEventListener("click",function(){
	text.innerHTML = createTxt;
	tittle.innerHTML = createTit
});

function inicio()
{
	text.innerHTML = `<p class="parrafo">
					Este es un blog de difusi&oacute;n de historia 
					desde una perspectiva nacional cat&oacute;lica.</p>
					<p class="parrafo">Disfrute de la recoplaci&oacute;n 
					de art&iacute;culos.</p>
					<div class='subtitle'>Introducción</div>
					<p class='parrafo'>Este es proyecto de código abierto, 
					para los interesados en ayudar pueden ver el repositorio en 
					<a href=
					'https://github.com/ce-sanbernardo/
					ce-sanbernardo.github.io.git'>Blog de Historia.</a></p>
					<p class='parrafo'>Si esta interesado en revisarlo, lea el 
					<a href="https://github.com/ce-sanbernardo/
					ce-sanbernardo.github.io/blob/main/README.md">Readme.md</a> 
					del repositorio.</p>
					<div class='subtitle'>Artículos</div>
					<p class='parrafo'>Puede acceder a la pestaña de artículos 
					para seleccionar un tema del que le gustaría averiguar.</p>`;
	tittle.innerHTML = "Blog de Historia";
}


// Dinamismo del boton de ARTICULO
let btn_art = document.getElementById("articulo");
btn_art.addEventListener("click",arti);
let menuFloat = false;
async function arti()
{
	if(menuFloat==false){
		menufloat.style.display = "block";
		menuFloat = true;
	}else{
		menufloat.style.display = "none";
		menuFloat = false;
	}
}


// Dinamismo del boton de CONTACTO
let btn_con = document.getElementById("contacto");
btn_con.addEventListener("click",con);
function con()
{
	tittle.innerHTML = "Contactos";
	text.innerHTML = `<center>
	<h1>Correo del instituto San Bernardo:</h1>
	ins.sanbernardo@gmail.com<br>
	<h1>Correo de la página:</h1>
	ce-sanbernardo@gmail.com<br>
	<h1>Página principal del instituto:</h1>
	<a href='https://institutosanbernardo.com.ar'>Instituto San Bernardo</a>
	</center>`;
}






// Agregar las opciones en base
// a los articulos disponibles
// en la base de datos
BTNmenu = `<p id=${articles[0].id} class='tema'>${articles[0].titulo}</p>`;
for (let i=1; i<info.length; i++){
	BTNmenu += `<p id=${articles[i].id} class='tema'>${articles[i].titulo}</p>`;
}
// Asignacion de los botones flotantes
menufloat.innerHTML = `
<div class="menu">
	<h3>Art&iacute;culos</h3>
	${BTNmenu}
</div>
`;

let createTxt,createTit;
let createLet = false;
function create()
{
	createTxt = document.getElementById("text").innerHTML;
	createTit = document.getElementById("tittle").innerHTML;
}
if(createLet==false){
	create();
	createLet = true;
}
// Cuerpo del articulo
let text = document.getElementById("text");
// Titulo del articulo
let tittle = document.getElementById("tittle");

//deteccion del temario
let temas = [];
for(let i=0; i<info.length; i++){
	temas[i] = document.getElementById(`${articles[i].id}`);
}

//mecanicas del temario
for(let i=0; i<info.length; i++){
	temas[i].addEventListener("click",function(){
		getArticles(i);
		arti();
		art();
		scroll();
	});
}


// RENDERER -> asignacion del articulo
async function art()
{
	text.innerHTML = texto;
	tittle.innerHTML = titulo;
}


// Agarrar articulo elegido
async function getArticles(i)
{	
	texto = articles[i].texto;
	texto = texto.join("<br><br>") + "<br><br>";
	texto += articles[i].autor + "<br>" + articles[i].fecha;
	titulo = articles[i].titulo;
}


// Scroll al inicio
async function scroll(){
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

