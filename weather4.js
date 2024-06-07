const apiCred={
    apiUrl:'https://api.openweathermap.org/data/2.5/weather?q=',
    apiKey:'2fd4bea6b31504271112e3037caf5269',
    defaultCity:'Jalandhar'
}; 

let weatherCard=document.querySelector(".weather-card")

const theme={
    day:`./day.png`,
    night:`./night.png`
}


const weatherConditions={
   "01d":'',    //clear sky day
   '02d':'',    //few clouds day  
   '03d':'',    //scattred clouds day
   '04d':'',    //broken clouds day
   '09d':'',    //shower rain day
   '10d':'',    //rain day
   '11d':'',    //thnderstrom day
   '13d':'',    //snow day
   '50d':'',    //mist day
   "01n":'',    //clear sky night
   '02n':'',    //few clouds night  
   '03n':'',    //scattred clouds night
   '04n':'',    //broken clouds night
   '09n':'',    //shower rain night
   '10n':'',    //rain night
   '11n':'',    //thnderstrom night
   '13n':'',    //snow night
   '50n':''     //mist night

}

const night=`./night.png`
const day=`./day.png`
const indicaters={
    temp:document.querySelector("#temp"),
    windSpeed:document.querySelector("#wind-speed"),
    humidity:document.querySelector("#humidity"),
    condition:document.querySelector("#condition")
}

weatherCard.style.backgroundImage= `url(${theme.day})`


async function Weather(city){
    city="Phillaur"
    const respnose = await fetch(apiCred.apiUrl+city+'&units=metric'+'&appid='+apiCred.apiKey)
    const res=await respnose.json()

    indicaters.temp.innerHTML=Math.round(res.main.temp)+'°C'
    indicaters.windSpeed.innerHTML=res.wind.speed +'km/h'
    indicaters.humidity.innerHTML=res.main.humidity+'% '
    indicaters.condition.innerHTML=res.weather[0].main
    console.log(res)
    city=''
}

function SetCity(){
    console.log(document.querySelector("#city-name").innerHTML)
    return(document.querySelector("#city-name").innerHTML)
}
Weather(SetCity());

