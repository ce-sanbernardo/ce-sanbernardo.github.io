import {getBody} from './http.js';

let tittle = document.getElementById("tittle");
let cuerpo = document.getElementById("text");
let menufloat = document.getElementById("menufloat");

let menu= [];
menu[0]	= document.getElementById("primordial");
menu[1]	= document.getElementById("antigua");
menu[2]	= document.getElementById("cristiandad");
menu[3]	= document.getElementById("moderna");

let inicio= [];
inicio[0] = document.getElementById("biblioteca");
inicio[1] = document.getElementById("blog");
inicio[2] = document.getElementById("noticias");

let biblio = [];
let notice = [];
let nblogs = [];

let genere = [];
let identi = [];
let identiMenu = [];

function main()
{
	let json_c = getBody("GET","js/base/config.json");
	let config = JSON.parse(json_c);

	let biblio_c = getBody("GET","js/base/biblioteca.json");
	let config_b = JSON.parse(biblio_c);

	let blog_c = getBody("GET","js/base/blog.json");
	let blog_b = JSON.parse(blog_c);

	let notice_c = getBody("GET","js/base/noticias.json");
	let notice_b = JSON.parse(notice_c);

	drawMenu(config);
	event(config);
	
	drawHome(config_b,biblio);
	eventHome(config_b,biblio);

	drawHome(blog_b,nblogs);
	eventHome(blog_b,nblogs);

	drawHome(notice_b,notice);
	eventHome(notice_b,notice);
}


function event(config)
{
	let length = Object.keys(config).length;
	let array = "";
	for(let i=0; i<length; i++){
		for(let j=0; j<getTitle(config,i).length; j++){
			for(let z=0; z<genere[i][j][1].length; z++){
				array += `<p id="${genere[i][j][1][z]}" class="tema">${genere[i][j][1][z]}</p>`;
			}
			let articles = `
				<div class="menu">
						<h3>Articulos</h3>
						${array}
				</div>`;
			genere[i][j][3].addEventListener("click",function(){
				menufloat.style.display = "block";
				menufloat.innerHTML = articles;
				readMenu(config);
			});
			array = "";
		}
	}
}

function eventHome(config,genere)
{
	let length = Object.keys(config).length;
	let array = "";
	for(let i=0; i<length; i++){
		for(let j=0; j<getTitle(config,i).length; j++){
			for(let z=0; z<genere[i][j][1].length; z++){
				array += `<p id="${genere[i][j][1][z]}" class="tema">${genere[i][j][1][z]}</p>`;
			}
			let articles = `
				<div class="menu">
						<h3>Articulos</h3>
						${array}
				</div>`;
			genere[i][j][3].addEventListener("click",function(){
				menufloat.style.display = "block";
				menufloat.innerHTML = articles;
				readHome(config,genere);
			});
			array = "";
		}
	}
}

function drawHome(config,genere)
{
	let length = Object.keys(config).length;
	for(let i=0; i<length; i++){
		genere[i] = new Array;
		for(let j=0; j<getTitle(config,i).length; j++){
			let subgenere	= getSubGenere(config,i)[j];
			let title	= getTitle(config,i)[j];
			let file	= getArticle(config,i)[j];
			genere[i][j] = new Array;
			genere[i][j][0] = subgenere;
			genere[i][j][1] = title;
			genere[i][j][2] = file;
		}
	}
	let num = 0;
	for(let i=0; i<length; i++){
		for(let j=0; j<getTitle(config,i).length; j++){
			identi[num] = document.getElementById(`${getSubGenere(config,i)[j]}`);
			genere[i][j][3] = identi[num];
			num++;
		}
	}
}




function readMenu(config)
{
	let num = 0;
	for(let i=0; i<Object.keys(config).length; i++){
		for(let j=0; j<getTitle(config,i).length; j++){
			genere[i][j][4] = new Array;
			for(let z=0; z<genere[i][j][2].length; z++){
				identiMenu[num] = document.getElementById(`${getTitle(config,i)[j][z]}`);
				genere[i][j][4][z] = identiMenu[num];
				num++;
			}
		}
	}
	num = 0;
	for(let i=0; i<Object.keys(config).length; i++){
		for(let j=0; j<getTitle(config,i).length; j++){
			for(let z=0; z<genere[i][j][2].length; z++){
				if(genere[i][j][4][z] != null){
					genere[i][j][4][z].addEventListener("click",function(){
						tittle.innerHTML = genere[i][j][1][z];
						if(i==0){
							cuerpo.innerHTML = getBody("GET","js/base/primordial/"+genere[i][j][2][z]);
						}else if(i==1){
							cuerpo.innerHTML = getBody("GET","js/base/antigua/"+genere[i][j][2][z]);
						}else if(i==2){
							cuerpo.innerHTML = getBody("GET","js/base/cristiandad/"+genere[i][j][2][z]);
						}else if(i==3){
							cuerpo.innerHTML = getBody("GET","js/base/moderna/"+genere[i][j][2][z]);
						}
						menufloat.style.display = "none";
						scroll();
					});
				}
			}
		num++;
		}
	}
}


function readHome(config,genere)
{
	let num = 0;
	for(let i=0; i<Object.keys(config).length; i++){
		for(let j=0; j<getTitle(config,i).length; j++){
			genere[i][j][4] = new Array;
			for(let z=0; z<genere[i][j][2].length; z++){
				identiMenu[num] = document.getElementById(`${getTitle(config,i)[j][z]}`);
				genere[i][j][4][z] = identiMenu[num];
				num++;
			}
		}
	}
	num = 0;
	for(let i=0; i<Object.keys(config).length; i++){
		for(let j=0; j<getTitle(config,i).length; j++){
			for(let z=0; z<genere[i][j][2].length; z++){
				if(genere[i][j][4][z] != null){
					genere[i][j][4][z].addEventListener("click",function(){
						console.log(getSubGenere(config,0)[0]);
						tittle.innerHTML = genere[i][j][1][z];
						if(getSubGenere(config,0)[0] == "biblioteca"){
							cuerpo.innerHTML = getBody("GET",genere[i][j][2][z]);
						}else if(getSubGenere(config,0)[0] == "blog"){
							cuerpo.innerHTML = getBody("GET","js/base/blog/"+genere[i][j][2][z]);
						}else if(getSubGenere(config,0)[0] == "noticias"){
							cuerpo.innerHTML = getBody("GET","js/base/noticias/"+genere[i][j][2][z]);
						}
						menufloat.style.display = "none";
						scroll();
					});
				}
			}
		num++;
		}
	}
}






function drawMenu(config)
{
	let length = Object.keys(config).length;
	for(let i=0; i<length; i++){
		genere[i] = new Array;
		for(let j=0; j<getTitle(config,i).length; j++){
			let subgenere	= getSubGenere(config,i)[j];
			let title	= getTitle(config,i)[j];
			let file	= getArticle(config,i)[j];
			menu[i].innerHTML += `<li id="${subgenere}"> <a> ${subgenere} </a> </li>`;
			genere[i][j] = new Array;
			genere[i][j][0] = subgenere;
			genere[i][j][1] = title;
			genere[i][j][2] = file;
		}
	}
	let num = 0;
	for(let i=0; i<4; i++){
		for(let j=0; j<getTitle(config,i).length; j++){
			identi[num] = document.getElementById(`${getSubGenere(config,i)[j]}`);
			genere[i][j][3] = identi[num];
			num++;
		}
	}
}




function getSubGenere(arrayGenere,index)
{
	let array = Object.keys(Object.values(arrayGenere)[index]);
	return array;
}


function getTitle(arrayTitle,index)
{
	let array = Object.values((Object.values(arrayTitle)[index]));
	let title = [];
	for(let i=0; i<array.length; i++)
		title[i] = Object.keys(array[i]);
	return title;
}

function getArticle(arrayArticle,index)
{
	let array = Object.values((Object.values(arrayArticle)[index]));
	let title = [];
	for(let i=0; i<array.length; i++)
		title[i] = Object.values(array[i]);
	return title;
}


function scroll()
{
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


export {main,scroll};