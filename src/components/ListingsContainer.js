import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listData, setListData, searchValue }) {

  function handleDelete(id) {
    const url = `http://localhost:6001/listings/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(() => setListData(listData.filter(data => data.id !== id)))
  }

  function renderMap(data) {
    return <ListingCard key={data.id} id={data.id} description={data.description} location={data.location} image={data.image} handleDelete={handleDelete} />
  }

  console.log(searchValue);

  let renderList = searchValue ? listData.filter(data => data.description.toLowerCase().includes(searchValue.toLowerCase())).map(data => renderMap(data)) : listData.map(data => renderMap(data));
  return (
    <main>
      <ul className="cards">
        {renderList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
