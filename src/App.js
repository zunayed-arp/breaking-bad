import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharactersGrid from './components/Characters/CharacterGrid';
import Header from './components/Ui/Header/Header';
import Search from './components/Ui/Search/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {

    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();

  }, [query])

  return (
    <div className="container">
      <Header></Header>
      <Search
        getQuery={(q) => setQuery(q)}
      ></Search>
      <CharactersGrid
        isLoading={isLoading}
        items={items}
      ></CharactersGrid>
    </div>
  );
}

export default App;
