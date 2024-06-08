const apiCred={
    apiUrl:'https://api.openweathermap.org/data/2.5/weather?q=',
    apiKey:'2fd4bea6b31504271112e3037caf5269',
    defaultCity:'Jalandhar'
}; 

let weatherCard=document.querySelector(".weather-card")

const theme={
    day:`./day.png`,
    night:`./night.png`,
    thunderstorm:`./images/thunderstorm-back.jpg`,
    clouds:`./images/clouds-back.jpg`,
    clear:`./images/clear-back.jpg`,
    rain:`./images/rain-back.jpg`,
    snow:`./images/snow-back.jpg`
}


const weatherConditions={
   "01d":'<i class="ri-sun-line"></i>',    //clear sky day
   '02d':'<i class="ri-cloudy-line"></i>',    //few clouds day  
   '03d':'<i class="ri-cloud-windy-line"></i>',    //scattred clouds day
   '04d':'<i class="ri-sun-cloudy-line"></i>',    //broken clouds day
   '09d':'<i class="ri-showers-line"></i>',    //shower rain day
   '10d':'<i class="ri-rainy-line"></i>',    //rain day
   '11d':'<i class="ri-flashlight-line"></i>',    //thnderstrom day
   '13d':'<i class="ri-snowy-line"></i>',    //snow day
   '50d':'<i class="ri-mist-line"></i>',    //mist day
   "01n":'<i class="ri-moon-line"></i>',    //clear sky night
   '02n':'<i class="ri-cloudy-line"></i>',    //few clouds night  
   '03n':'<i class="ri-cloud-windy-line"></i>',    //scattred clouds night
   '04n':'<i class="ri-moon-cloudy-line"></i>',    //broken clouds night
   '09n':'<i class="ri-showers-line"></i>',    //shower rain night
   '10n':'<i class="ri-rainy-line"></i>',    //rain night
   '11n':'<i class="ri-thunderstorms-line"></i>',    //thnderstrom night
   '13n':'<i class="ri-snowy-line"></i>',    //snow night
   '50n':'<i class="ri-mist-line"></i>'     //mist night

}


const night=`./night.png`
const day=`./day.png`
const indicaters={
    temp:document.querySelector("#temp"),
    windSpeed:document.querySelector("#wind-speed"),
    humidity:document.querySelector("#humidity"),
    condition:document.querySelector("#condition"),
    cityName:document.querySelector("#city"),
    icon:document.querySelector("#icon")
}

weatherCard.style.backgroundImage= `url(${theme.day})`


async function Weather(){
    let city=SetCity();
    if(city===''){
        city=`Jalandhar`
    }
    const respnose = await fetch(apiCred.apiUrl+city+'&units=metric'+'&appid='+apiCred.apiKey)
    const res=await respnose.json()

    indicaters.temp.innerHTML=Math.round(res.main.temp)+'°C'
    indicaters.windSpeed.innerHTML=res.wind.speed +'km/h'
    indicaters.humidity.innerHTML=res.main.humidity+'% '
    indicaters.condition.innerHTML=res.weather[0].main
    indicaters.cityName.innerHTML=res.name
    indicaters.icon.innerHTML=weatherConditions[res.weather[0].icon]
    // weatherCard.style.backgroundImage=`url(${theme.snow})`

    console.log(res)
    city=''
}

function SetCity(){
    console.log(document.querySelector("#city-name").value)
    return(document.querySelector("#city-name").value)
}
