/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputFatec from './components/InputFatec'

function App() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <InputFatec
            type="text"
            value=""
            placeholder="Insira seu nome"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <InputFatec
            type="email"
            value=""
            placeholder="Insira seu e-mail"
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <InputFatec
            type="tel"
            value=""
            placeholder="Insira seu telefone"
          />
        </div>
        <ButtonFatec type="submit" >Click</ButtonFatec>
      </form>
    </div>
  );
}

export default App;
