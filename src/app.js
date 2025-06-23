import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
    
let dominios=[".net", ".com", ".info", ".biz", ".org", ".edu"];
  
const domain= pronouns.flatMap(pronoun=> adjs.flatMap(adj=>nouns.flatMap(noun=> dominios.map(domi=>`${pronoun}${adj}${noun}${domi}`))));


      
const buttons = document.querySelectorAll('[data-choice]');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const domainChoice = button.getAttribute('data-choice');
		const result = domain.filter(element=> element.endsWith(domainChoice));
    console.log(`Dominios con ${domainChoice}:`, result);
    
	});
});