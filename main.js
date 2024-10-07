import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
   
    <h1>Get Weather</h1>
    <div class="card">
      <input id="cityName"></input>
      <button id="submitBtn">Fetch</button>
    </div>
    <p id="responseP">
      </p>
  </div>
`

setupCounter(document.querySelector('#responseP'), document.querySelector('#cityName'), document.querySelector('#submitBtn'));
