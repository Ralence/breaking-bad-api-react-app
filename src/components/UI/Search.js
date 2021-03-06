import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [text, setText] = useState("");

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters..."
          autoFocus
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setQuery(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default Search;
