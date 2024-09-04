import React from 'react';
import IniciarButton from './stories/IniciarButton'; 
import AñadirButton from './stories/AñadirButton'; 
import CancelButton from './stories/CancelButton'; 

function App() {
  const handleIniciarClick = () => {
    console.log('Iniciar button clicked!');
  };

  const handleAñadirClick = () => {
    console.log('Añadir button clicked!');
  };

  const handleCancelClick = () => {
    console.log('Cancel button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <IniciarButton label="Iniciar" onClick={handleIniciarClick} />
        <AñadirButton label="Añadir" onClick={handleAñadirClick} />
        <CancelButton label="Cancelar" onClick={handleCancelClick} />
      </header>
    </div>
  );
}

export default App;
