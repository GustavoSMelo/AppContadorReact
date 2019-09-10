import React from 'react';
import Contador from './components/contador/index';
import Rodape from './components/footer/footer';
import "./style.css";

function App() {
  return (
    <main className="App">
      <Contador></Contador>
      <Rodape></Rodape>
    </main>
  );
}

export default App;
