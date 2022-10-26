import React from 'react';
import {Navbar} from './components/Navbar';
import { ItemContainer } from './components/ItemContainer';


function App() {
  return (
    <div className="App">
      <Navbar brand='Assistur'/>
      <ItemContainer/>
    </div>
  );
}

export default App;
