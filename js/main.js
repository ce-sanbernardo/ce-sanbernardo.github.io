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
let data = JSON.parse(base.articulo);
// Numero de articulos y clave del mismo
let info = Object.keys(data);
// Acceso al contenido de cada articulo
let articles = Object.values(data);

// pie de pagina
let pie = document.getElementById("pie");

// Dinamismo de la interfaz

// Dinamismo del boton de INICIO
let btn_inicio = document.getElementById("inicio");
btn_inicio.addEventListener("click",inicio);
function inicio()
{
	pie.style.position = "absolute";
	text.innerHTML = `<p class="parrafo">
					Este es un blog de difusi&oacute;n de historia 
					desde una perspectiva nacional cat&oacute;lica.</p>
					<p class="parrafo">Disfrute de la recoplaci&oacute;n 
					de art&iacute;culos.</p>`;
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
	pie.style.position = "absolute";
	tittle.innerHTML = "Contactos";
	text.innerHTML = "ins.sanbernardo@gmail.com";
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
		pie.style.position = "relative";
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
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

