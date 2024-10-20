 export  function setupCounter(p, cityName, btn) {

  btn.addEventListener("click",async () => {

    let weatherInfo = await getWeatherData(cityName.value);
console.log(weatherInfo);
    p.innerHTML=`
    ${weatherInfo.temp}<br>${weatherInfo.conditions}<br><br>
    ${weatherInfo.desc}
    `
  });
}

async function getWeatherData(cityName) {
  const responseData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${
      import.meta.env.VITE_API_KEY
    }`,
    { mode: "cors" }
  );

  const weatherData = await responseData.json();
  console.log(weatherData.description);

  return {
    temp: weatherData.currentConditions.temp,
    conditions: weatherData.currentConditions.conditions,
    desc: weatherData.description,
  };

 
}
