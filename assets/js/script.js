


// Bg Animation
function bgAnimationItems(){
    const rows = 7, cols = 10;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            const div = document.createElement("div");
            div.className = `col-${j+1}`; 
            document.querySelector(".bg-animation-effect").appendChild(div); 
        }
    }
}
bgAnimationItems();

// TOGGLE THEME

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
});

// CLOCK

const timeArea = document.querySelector(".time");

const timePeriod = document.querySelector(".time-per");

const tik = () => {

    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    
    if (minutes < 10) {
        minutes = "0" + minutes; 
    }

    if (seconds < 10) {
        seconds = "0" + seconds; 
    }

    const ampm = (hours >= 12) ? "pm" : "am";

    const time = `${hours}:${minutes}:${seconds}`;

    timeArea.innerHTML = time;
    timePeriod.innerHTML = ampm;

    setTimeout(tik, 1000);

};

tik();

 // Obtenemos el input y la lista de nombres
 const filtro = document.getElementById('filtro');
 const nombres = document.getElementById('nombres');

 // Escuchamos el evento 'input' para detectar cambios en el input
 filtro.addEventListener('input', () => {
   const textoFiltro = filtro.value.toLowerCase();
   const divsNombres = nombres.querySelectorAll('div');

   // Iteramos por los divs de nombres y mostramos u ocultamos según el filtro
   divsNombres.forEach(divNombre => {
     const textoDiv = divNombre.innerText.toLowerCase();
     if (textoDiv.includes(textoFiltro)) {
       divNombre.style.display = 'block';
     } else {
       divNombre.style.display = 'none';
     }
   });
 });