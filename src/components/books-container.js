import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
import BookItem from "./book-item";
const BooksContainerStyle = styled.div`
  max-width: 100vw;
  min-height: 100vw;
  display: flex;
  justify-content: center;
  .flex {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const BooksContainer = ({ data, isPending, showBooks }) => {
  return (
    <BooksContainerStyle>
      {showBooks && !isPending ? (
        <div className="flex">
          {data.items.map((item) => (
            <BookItem item={item} isPending={isPending} />
          ))}
        </div>
      ) : (
        <Spin size="large" />
      )}
    </BooksContainerStyle>
  );
};

export default BooksContainer;
