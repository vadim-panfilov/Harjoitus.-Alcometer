import React, { useState } from 'react'
import './App.css'

function App () {
  const [alc_result, setalcresult] = useState(0)
  const calculate = e => {
    e.preventDefault()
    let weight = parseInt(document.querySelector('#weight').value)
    let litres = parseInt(document.querySelector('#bottles').value) * 0.33
    let hours = parseInt(document.querySelector('#hours').value)
    let grams = litres * 8 * 4.5 - (weight / 10) * hours
    let gender = document.querySelector('#gender').value
    let delta = 0.1337
    if (gender === '1') {
      delta = 0.6
    } else {
      delta = 0.7
    }
    let level = grams / (weight * delta)
    setalcresult(level.toFixed(1))
  }
  return (
    <div className='App'>
      <div className='app-title'>
        <h1> Calculating alcohol blood level</h1>
      </div>
      <form>
        <text>Weight:</text>
        <input type='text' id='weight' />
        <br />
        <br />
        <text>Bottles:</text>
        <input type='number' id='bottles' name='bottles' min='1' />
        <br />
        <br />
        <text>Time:</text>
        <input type='number' id='hours' name='hours' min='1' />
        <br />
        <br />
        <text>Gender:</text>
        <input type='radio' id='gender' name='gender' value='0' />
        Male
        <input type='radio' id='gender' name='gender' value='1' /> Female
        <br />
        <br />
        <input type='text' id='result' value={alc_result} readonly='readonly' />
        <br />
        <br />
        <button onClick={calculate}>Calculate</button>
      </form>
    </div>
  )
}

export default App
