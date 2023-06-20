import React,{useState} from 'react'
import axios from 'axios'
import "./App.css"

function App() {

    const [cityName, setCityName] = useState("") 
    const [temprature, setTemprature]  = useState("")
    const [name, setName] = useState("")
    const [weather, setWeather] = useState("")
    const [humidity, setHumidity] = useState('')
    const [country, setCountry] = useState("")
     
 
function getData(){
        
    return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=1a4e51c7377e8cf939cbc51bb433a57f" )
    .then((result) =>{
        

        console.log(result.data)
               setCountry(result.data.sys.country)  
               setHumidity("Humidity:  " + result.data.main.humidity) 
               setName("City:  " + result.data.name)

               let kelvinToCelsius = Math.round(result.data.main.temp - 273)

               setWeather("Weather:  " + result.data.weather[0].main )
               setTemprature("Temprature:  " + kelvinToCelsius  + "° C" )
           
    })
    
}


function handleChange(e){
    setCityName(e.target.value)
}
      
 


  return (
     <>  
       <div className='wrapper'> 
       <div className='container'> 
       <div className='search'> 
        <input onChange={handleChange} value={cityName} placeholder='Enter your city name:'></input>
        <button onClick={getData}>Weather Report</button> 
        </div>
        <div className='result'> 
        <h3>{name}</h3>
        <p>{temprature}</p>
        <p>{weather}</p>
        <p>{humidity}</p>
        {(country === '') || <img src={'https://flagsapi.com/' + country + '/flat/64.png'} alt={name} width= "150px"></img>}
        </div>
        </div>
        </div> 
      </>
  )
}

export default App