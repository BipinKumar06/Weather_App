const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//  const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const form=document.querySelector("form")
const search=document.querySelector("#search-box")
const weather=document.querySelector("#weather")

const getWeather=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response=await fetch(url)
    const data=await response.json();
    return showWeather(data)

}
window.onload=()=>{
    search.focus();
}
const showWeather=(data)=>{
    console.log(data)
    if(data.cod=="404"){
        weather.innerHTML=`<h2>City Not Found</h2>`
    }
   weather.innerHTML=`<div>
   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
  </div>
  <div class="">
   <h2>${data.main.temp}</h2>
   <h3>${data.weather[0].main}</h3>
  </div>`
}

form.addEventListener(
    "submit",
     function(event){
        console.log(search.value)
        if(search.value){
        getWeather(search.value)
        }
        else{
            weather.innerHTML=`<h2>Please Enter City</h2>`
        }
    
        event.preventDefault();

     }
)

