
// let date2 = Date.now();
// const date1 = new Date('August 26, 2022,17:00:00');
// diff = dateDiff(date1,date2);
// console.log();

// function dateDiff(date1, date2){
//     var diff = {}                           // Initialisation du retour
//     var tmp = date2 - date1;

//     tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
//     diff.hour = tmp % 24;                   // Extraction du nombre d'heures
     
//     tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
//     diff.day = tmp;
     
//     return diff;
// }

var today = new Date();
var sec = String(today.getSeconds());
var min = String(today.getMinutes());
var hh = String(today.getHours());
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + ' ' + dd + ',' + yyyy +','+ hh +':'+ min +':'+ sec;

const seasonDate = new Date('January 12, 2024, 17:00:00');
let actualDate = new Date(today);
const diffTime = Math.abs(actualDate - seasonDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
const diffHours = Math.ceil(diffTime / (1000 * 60 * 60 )); // date en millisecondes (d'ou le 1000)
console.log(actualDate);
console.log(diffTime);
console.log(diffDays + " days");
console.log(diffHours +"heures");

document.querySelector('h1').innerText += 'La saison 30 a commencé depuis '+ diffDays + '  jours';
document.querySelector('h2').innerText += 'Ou '+diffHours+' Heures';

// fonction pour calculer H/J au clic bouton
let botter = document.querySelector('button');
let info = document.querySelector('input');
var hoursPerDay = (info.value)/diffDays;
info.addEventListener('onkeyup', ()=>{
    let info = document.querySelector('input').value;
})
botter.addEventListener('click', ()=>{
    document.querySelector('.hoursPerDay').innerText += Math.round(hoursPerDay)+' H/J'
})

console.log(info.value);

const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Go Light"

    }

})