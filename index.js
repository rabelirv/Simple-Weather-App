const request = require('request')
const argv = require('yargs').argv
let apiKey = '86b6449ae0f30ef68c2ca240dd067b06'
let city = argv.c || 'brooklyn'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url ,(err, response, body)=>{
  if (err) {
    console.log('Error:', error)
  }else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`
    console.log(message);
  }
})
