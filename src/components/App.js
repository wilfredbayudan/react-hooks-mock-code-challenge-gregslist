import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listData, setListData] = useState([]);
  const [searchValue, setSearchValue] = useState(false);

  useEffect(() => {
    const url = "http://localhost:6001/listings";
    fetch(url)
      .then(res => res.json())
      .then(json => setListData(json))
      .catch(err => console.log(err));
  }, [])

  console.log(searchValue);

  return (
    <div className="app">
      <Header setSearchValue={setSearchValue} />
      <ListingsContainer listData={listData} setListData={setListData} searchValue={searchValue} />
    </div>
  );
}

export default App;
