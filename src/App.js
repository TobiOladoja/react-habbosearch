import React, { useState } from 'react';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [names, setNames] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [links, setLinks] = useState([]);

  async function makeSearch() {
    const url = `https://en.wikipedia.org/w/api.phpaction=opensearch&search=${search}&format=json&origin=*`;
    const response = await fetch(url);
    const jsonRes = await response.json();

    setNames(jsonRes[1]);
    setDescriptions(jsonRes[2]);
    setLinks(jsonRes[3]);
  }
  return (
    <div className='box-wrapper'>
      <div className='box'>
        <h3>React Wikipedia Viewer</h3>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={makeSearch}>Search</button>

        {names.map((name) => (
          <div> {name} </div>
        ))}
      </div>
    </div>
  );
}

export default App;
