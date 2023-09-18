const Btn = document.getElementById("Btn")
const Ciudad = document.getElementById("Ciudad");
const Clima = document.getElementById("Clima");
const Temp= document.getElementById("Temp");
const

Btn.addEventListener('click', (e) => {
    event.preventDefault(e)
    const APIKey= "96d53c539da0ed5e4efebb186bc8f01e"
    const Buscar = document.getElementById("Buscar").value
    if(Buscar ===" "){
        return;}
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Buscar}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        if (json.cod === "404") {
            console.log("ERROR CAPO")
            return;
        }
         console.log("bien capo")
         Ciudad.innerHTML=`${json.name}, ${json.sys.country}`;
         Temp.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
    })
})