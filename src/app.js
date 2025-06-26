import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon', 'rocket'];

let dominios = [".net", ".com", ".info", ".biz", ".org", ".edu"];

// recorremos pronouns y hacemos flatmap concatenando todas las opciones

const domain = pronouns.flatMap(pronoun =>
	adjs.flatMap(adj =>
		nouns.flatMap(noun =>
			dominios.map(domi =>
				`${pronoun}${adj}${noun}${domi}`)
		)
	)
);

// creamos una costante que enlaza el section donde vamos a imprimir los resultados

const divResultados = document.getElementById('resultadosDominio');

// Creamos la funcion que filtra. Va a filtrar el array de los resultados por extension, despues vacia el div,
//  y despues recorre el array filtrado para meter cada resultado en un div, dentro de otro div

function filterDomains(extension) {
	const filtered = domain.filter(name => name.endsWith(extension));
	resultadosDominio.innerHTML = '';
	filtered.forEach(element => {
		const domainDiv = document.createElement('div');
		domainDiv.innerHTML = `<div>${element}</div>`;
		resultadosDominio.appendChild(domainDiv);
	});
}

// Seleccionamos todos los botones con el id data choice y lo metemos dentro de buttons

const buttons = document.querySelectorAll('[data-choice]');

// Recorremos buttons y añadimos el listener. Creamos domainChoice para cada button 
// con data choice y llamamos a la funcion que filtra con cada boton

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const domainChoice = button.getAttribute('data-choice');
		filterDomains(domainChoice);
		resultadosDominio.classList.add('borde-activo');
	});
});