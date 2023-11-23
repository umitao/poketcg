import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { IPokemon } from './sample';

type PokemonData = {
  data: IPokemon;
};

function App() {
  const [pokemon, setPokemon] = useState<PokemonData>();
  const key = import.meta.env.VITE_TCG;

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards/base1-4', {
      method: 'GET',
      headers: {
        'X-Api-Key': key,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setPokemon(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [key]);

  return (
    <>
      <div>
        {/* <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a> */}
        <a href='https://react.dev' target='_blank'>
          <img
            src={pokemon?.data.images.small}
            className='react'
            alt='Pokemon Card'
          />
        </a>
      </div>
      <h1>{pokemon?.data?.name}</h1>
      <div className='card'>
        <p>HP: {pokemon?.data.hp}</p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
