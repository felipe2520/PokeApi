import { useState, useEffect } from 'react'
import { api } from './services';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {

    api
    .get("pokemon")
    .then(res => console.warn(res))
    .catch((err) => console.warn(err));
  },[]);
  
  
  return (
    <div>
        <h3>Teste</h3>
    </div>
  );
}

export default App;
