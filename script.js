// ===========================================================
// ✔️ Select HTML elements
// ===========================================================
// 🔠 Shows weather description
   const weatherInfo = document.querySelector('#weatherInfo') 
// 🔠 Shows temperature
   const weatherTemp = document.querySelector('#weatherTemp') 
// 🌐 iframe to show related webpage
   const iframe = document.querySelector('#addIframe')



// ===========================================================
// ✅ Convert weather code to text description
// 🔠 Add more weather codes + descriptions!
// ===========================================================
   const codeToText = (code) => {
      switch (code) {
        case 0:
          return '😊'
        // ---------------------------------------------------
        case 1:
        case 2:
        case 3:
          return '😓'
        // ---------------------------------------------------
        case 45:
        case 48:
          return '😠'
        // ---------------------------------------------------
        default:
          return ''
        // ---------------------------------------------------
      }
   }


   
// ===========================================================
// ✅ Convert weather code to iframe URL
// 🌐 Add more weather codes + webpages!
// ===========================================================
   const codeToIframe = (code) => {
      switch (code) {
        case 0:
          return 'https://editor.p5js.org/halim-bu/full/pQk_Z6wEj'
        // ---------------------------------------------------
        case 1:
        case 2:
        case 3:
          return 'https://editor.p5js.org/halim-bu/full/pQk_Z6wEj'
        // ---------------------------------------------------
        case 45:
        case 48:
          return 'https://editor.p5js.org/halim-bu/full/pQk_Z6wEj'
        // ---------------------------------------------------
        case 51:
        case 53:
        case 55:
          return 'https://editor.p5js.org/halim-bu/full/pQk_Z6wEj'
        // ---------------------------------------------------
        default:
          return
      }
   }



// ===========================================================
// ✅ Fetch weather data from API and update the page
// ===========================================================
   const grab = async () => {
      const request = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=42.3584&longitude=-71.0598&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit',
      )

      const response = await request.json()
      
      // ⁉️ get current weather code
      const weatherCode = response.current_weather.weathercode

      // ⁉️ Update page content
      weatherInfo.innerHTML = codeToText(weatherCode) // show description
      weatherTemp.innerHTML = `${Math.round(response.current_weather.temperature)}ºF` // show temperature
      iframe.src = codeToIframe(weatherCode) // set iframe URL
   }
   // ⁉️ Run the function
   grab()





