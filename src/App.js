import React, { useState, useEffect } from "react";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/characters/CharacterGrid";

import axios from "axios";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(`https://www.breakingbadapi.com/api/characters`);

      console.log(res.data);

      setItems(res.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
