import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import axios from 'axios'

function App() {
  const [characters, setCharacters] = useState([{
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  }])

  useEffect(()=>{
    console.log(characters)
  }, [characters])

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res=>{
        setCharacters(res.data.results)
      })
  }, [])

  return (
    <>
      <CharacterList characters={characters}/>
    </>
  );
}

export default App;
/*
const props = {
  name: rick.name,
  status: rick.status, 
  species: rick.species, 
  image: rick.image,
  brian: "he's just this guy"
}
*/