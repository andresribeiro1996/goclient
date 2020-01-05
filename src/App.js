import React from 'react';
import './App.css';
import Console from './components/Console/Console';
import 'bootstrap/dist/css/bootstrap.css';
import CardList from './components/Card/CardList';
function App() {
  return (
    <div className="App">
      <body>
        <Console />
        <CardList />
      </body>
    </div>
  );
}

export default App;
