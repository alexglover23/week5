// 1. signup for an api key https://weatherapi.com
// 2. find the "Chicago" city button using querySelector() and add a click event listener
// 3. when event occurs (i.e. inside the listener function):
//    a. find the forecast header (use the selector .forecast-header) and modify its innerHTML to `${location} Forecast`
//    b. fetch the api response from https://api.weatherapi.com/v1/forecast.json?key=YOUR_KEY&q=LOCATION&days=3
//    c. extract the json using the .json() function
//    d. find the array of daily forecast data, loop through it and, insert HTML with each day's forecast using the forecastHTML() function
// 4. repeat step 2 & 3 for each city button
// 5. (optional OR skip to step 6) once you notice the repetition, you can refactor to use the querySelectorAll() function to find and loop through each city button and add the event listener and function (step 3)
// 6. add a submit event listener to the form
//    a. get the user-entered location from the input
//    b. find the forecast header (use the selector .forecast-header) and modify its innerHTML to `${location} Forecast`
//    c. fetch the api response from https://api.weatherapi.com/v1/forecast.json?key=YOUR_KEY&q=LOCATION&days=3
//    d. extract the json using the .json() function
//    e. find the array of daily forecast data, loop through it and, insert HTML with each day's forecast using the forecastHTML() function

function forecastHTML(dailyForecast) {
  return `
    <div class="text-center space-y-2">
      <img src="https:${dailyForecast.day.condition.icon}" class="mx-auto">
      <h1 class="text-2xl text-bold text-gray-500">${dailyForecast.date}</h1>
      <h2 class="text-xl">${dailyForecast.day.mintemp_f} - ${dailyForecast.day.maxtemp_f}</h2>
      <p class="text-gray-500">${dailyForecast.day.condition.text}</h1>
    </div>
  `
}

// You may want to write other functions, but you don't need to!
// All your code can go inside of this event listener ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
window.addEventListener('DOMContentLoaded', function() {
  
  let chicago = document.querySelector('#chicago-forecast')
  chicago.addEventListener('click', async function(event){
    event.preventDefault()
    
    let location = 'Chicago'
    let forecastHeader = document.querySelector('.forecast-header')
    forecastHeader.innerHTML = `${location} Forecast`
    
    let response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=4498add9fff045f6bb873226212701&q=LOCATION&days=3')
    // console.log(response)
    let json = await response.json()
    console.log(json)

    let forecast = json.forecast.forecastday
    for (let i = 0; i < forecast.length; i++) {
      console.log(forecast[i])
    }


    // let amount = document.querySelector('#amount').value 
    // let rate = json.bpi.USD.rate_float
    // let convertedAmount = amount * rate

    // let outputElement = document.querySelector('.output')
    // outputElement.innerHTML = `Your ${amount} Bitcoin is worth ${convertedAmount}`

  })

})
