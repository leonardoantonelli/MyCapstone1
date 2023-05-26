import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import ShoesList from "./ShoesList";
import url from "../../assets/json.json";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const [ShoesListDefault, setShoesListDefault] = useState();
  const [ShoesList, setShoesList] = useState();

  const fetchData = async () => {
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setShoesList(data);
        setShoesListDefault(data);
      });
  };

  const updateInput = async (input) => {
    const filtered = ShoesListDefault.filter((shoe) => {
      return shoe.Name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setShoesList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Risultati</h1>
      <SearchBar input={input} onChange={updateInput} />
      <ShoesList setShoesList={setShoesList} />
    </>
  );
};

export default SearchPage;
