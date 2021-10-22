import React, { useState } from "react";
import BooksContainer from "./books-container";
import SearchSection from "./search-section";
import useFetch from "./useFetch";

function Render() {
  const [booksName, setBooksName] = useState("");
  const [showBooks, setShowBooks] = useState(false);
  const [type, setType] = useState("intitle");
  const { data, isPending } = useFetch(
    `https://www.googleapis.com/books/v1/volumes?q=${type}:${booksName}`
  );

  return (
    <div>
      <SearchSection
        setType={setType}
        data={data}
        setShowBooks={setShowBooks}
        booksName={booksName}
        setBooksName={setBooksName}
      />
      <BooksContainer data={data} isPending={isPending} showBooks={showBooks} />
    </div>
  );
}

export default Render;
