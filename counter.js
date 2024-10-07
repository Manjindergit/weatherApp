export function setupCounter(p, cityName, btn) {
  console.log(btn);
  console.log();
  btn.addEventListener('click', () =>{
    console.log(cityName.value);
    getWeatherData(cityName.value)
  })
  // const setCounter = (count) => {
  //   counter = count
  //   element.innerHTML = `count is ${counter}`
  // }
  // element.addEventListener('click', () => setCounter(counter + 1))
  // setCounter(0)
}

async function getWeatherData(cityName){


  const responseData= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${import.meta.env.VITE_API_KEY}`, {mode: "cors"});

  const weatherData = await responseData.json();
  console.log(weatherData);

}
