import React from "react";
import Search from "./Search";

function Header({ setSearchValue }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchValue={setSearchValue} />
    </header>
  );
}

export default Header;
