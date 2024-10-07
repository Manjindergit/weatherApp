console.log('test');

const form = document.getElementById('cityForm');

console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    const data = {
        cityName: formData.get('cityName')
    }

    console.log(data);
    
});

async function fetchData(cityName){
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${apiKey}`, {mode: 'cors'});


    const weatherData = await response.json();

    console.log(weatherData);
    console.log('Test success');
}
    
fetchData("test");