import React, { useState, useEffect } from "react";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/UI/Search";

import axios from "axios";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  console.log(query);
  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      console.log(res.data);

      setItems(res.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search setQuery={setQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
