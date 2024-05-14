import * as SubMenu from './managerSubMenu.js';
import * as baseManager from './baseManager.js';

class MenuArticles{
	constructor(){
		this.ManBase = [];
		this.manager = new SubMenu.ManagerSubMenu();
		this.manager.initSubMenu();
		this.manager.addSubMenu();
		this.manager.searchID();
		this.manager.eventBTNSubgenere();
		this.ArrayMenuFloat;
		this.IMenuFloat = document.getElementById("menufloat");
		this.inden = [];
		this.Len;
	}
	initManBase(directoryBase){
		this.Len = directoryBase.length;
		for(let i=0; i<this.Len; i++){
			this.ManBase[i] = new baseManager.baseManager();
			this.ManBase[i].selectArticle(directoryBase[i]);
		}
	}
	initMenu(){
		this.ArrayMenuFloat = `<p id=${this.ManBase[0].data.getValueId(0)} class='tema'>
									 ${this.ManBase[0].data.getValueTitle(0)}</p>`;
		for(let i=1; i<this.Len; i++){
			this.ArrayMenuFloat += `<p id=${this.ManBase[i].data.getValueId(0)} class='tema'>
										  ${this.ManBase[i].data.getValueTitle(0)}</p>`
		}
		this.IMenuFloat.innerHTML = `
		<div class="menu">
			<h3>Art&iacute;culos</h3>
			${this.ArrayMenuFloat}
		</div>`;
	}
	initIden(){
		for(let i=0; i<this.Len; i++){
			this.inden[i] = document.getElementById(
				`${this.ManBase[i].data.getValueId(0)}`);
		}
	}
}

export {MenuArticles}