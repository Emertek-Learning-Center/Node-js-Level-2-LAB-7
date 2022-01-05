const axios = require("axios")
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json('go to /weather/COUNTRY_NAME to get weather data')
})

// requesting weather data for a specific country
// Country name is being passed as a parameter and not in the query string
app.get('/weather/:country', (req, res)=>{

    let countryName = req.params.country
    let apiKey = "API_KEY_HERE"
    
    // Constructing the final URL
    let URL = `api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`
    console.log("URL :::::: " + URL);
    // Using Axios to retrieve weather date
    axios.get(URL)
    .then(res => {
        console.log(res.data);
    })

})

// Making sure all other requests are treated as 404
app.get('*', (req, res)=>{
    res.json('404 ! Nothing here 🙈')
})
app.listen(PORT, console.log(`🔥 Live on port ${PORT}`))