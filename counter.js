export function setupCounter(p, cityName, btn) {
  btn.addEventListener("click", async () => {
    try {
      let weatherInfo = await getWeatherData(cityName.value);

      p.innerHTML = `
    ${weatherInfo.temp}<br>${weatherInfo.conditions}<br><br>
    ${weatherInfo.desc}
    `;
    } catch (error) {
      p.innerHTML = `
        Sorry, we couldn't find weather information for "${cityName.value}".<br>
        Please check the city name and try again.
      `;
    }
  });
}

async function getWeatherData(cityName) {
  try {
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
  } catch (error) {
    console.log("error in fetching data", error);

    throw error;
  }
}
