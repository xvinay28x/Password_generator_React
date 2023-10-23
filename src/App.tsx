import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(0)
  const [number, setNumber] = useState(false)
  const [schar, setSchar] = useState(false)

  const getLength = (event) => {
    const string_length = event.target.value
    const int_length: number = +string_length
    setLength(int_length)
  }

  function generatePassword() {
    const str: string = "ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz"
    const num: string = "1234567890"
    const spe_char: string = "!@#$%^&*_-."



    let password_char: string = str

    if (number == true) password_char += num
    if (schar == true) password_char += spe_char

    if (password_char.length === 0) {
      alert('Please select at least one character type.');
    }
    else {
      let newPassword = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * password_char.length);
        newPassword += password_char[randomIndex];
      }
      setPassword(newPassword);
    }


  }


  return (
    <>
      <div className="flex-col">
        <div className="flex justify-center text-center rounded-xl bg-yellow-600 mt-5">
          <h1 className="text-4xl text-white">Password Generator</h1>
        </div>
        <div className="text-center mt-10">
          <h1 className="text-2xl italic text-white">Set the number of characters in your password</h1>
          <h1 className="text-4xl mt-10">{length}</h1>
          <input className='w-80' type="range" min="1" max="15" value={length} onChange={getLength} />
        </div>
        <div className="flex justify-center mt-20">

          <input className="h-5 w-5 cursor-pointer" id="Numbers" type="checkbox" checked={number}

            onChange={(event) => setNumber(event.target.checked)} />
          <label className="italic text-xl ml-2" htmlFor="Numbers">Numbers</label>

          <input className="h-5 w-5 cursor-pointer ml-20" id="special_char" type="checkbox" checked={schar} onChange={(event) => setSchar(event.target.checked)} />
          <label className="italic text-xl ml-2" htmlFor="special_char">Special Character</label>
        </div>
        <div className="flex justify-center">
          <button className="text-xl bg-red-500 hover:bg-red-600 w-32 h-10 rounded-lg mt-10 outline border" onClick={generatePassword}>Generate</button>
        </div>
        <h1 className="text-center mt-20 text-yellow-400 text-5xl">{password}</h1>
      </div>
    </>
  );
}

export default App;
