let numero = document.getElementById('numero'),
    simbol = document.getElementById('simb');
    simbol1 = document.getElementById('simb1');

 let valor  = Math.floor(Math.random()*(10-1)+2);
 numero.innerHTML= valor;

let array = ['<i class="fas fa-heart"></i>','<i class="fas fa-air-freshener"></i>','<i class="fas fa-anchor"></i>','<i class="fas fa-arrow-circle-up"></i>']

let nroProsicion = Math.floor(Math.random()*array.length);

simbol.innerHTML= array[nroProsicion];
simbol1.innerHTML= array[nroProsicion];
if (nroProsicion == 0 || nroProsicion == 1) {
    simbol.classList.remove("black");
    simbol.classList.add("red");
    simbol1.classList.remove("black");
    simbol1.classList.add("red");
}else{
    simbol.classList.remove("red");
    simbol.classList.add("black");
    simbol1.classList.remove("red");
    simbol1.classList.add("black");
}
