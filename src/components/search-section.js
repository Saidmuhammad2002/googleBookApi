import { Select } from "antd";
import React from "react";
import styled from "styled-components";
const InputStyle = styled.div`
  max-width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .line {
    width: 60vw;
    background-color: #999;
    height: 3px;
  }
  button {
    outline: none;
    border: none;
    padding: 0;
    :hover {
      color: blue;
      cursor: pointer;
    }
    :active {
      transform: scale(1.4);
    }
  }
`;
export default function SearchSection({
  booksName,
  setBooksName,
  setShowBooks,
  data,
}) {
  return (
    <InputStyle>
      <div className="field">
        <Select
          size="large"
          style={{ width: "60vw" }}
          bordered={false}
          className="select"
          allowClear
          loading={false}
          showSearch
          placeholder="search"
          filterOption={false}
          onSearch={(e) => {
            setBooksName(e);
            setShowBooks(false);
          }}
          onSelect={() => {
            setShowBooks(true);
          }}
          onChange={(e) => {
            setBooksName(e);
            setShowBooks(false);
          }}
        >
          <Select.Option value={booksName}>{booksName}</Select.Option>
          {data.items.map((item) => (
            <Select.Option key={item.id} value={item.volumeInfo.title}>
              {item.volumeInfo.title}
            </Select.Option>
          ))}
        </Select>
        <div className="line"></div>
      </div>
    </InputStyle>
  );
}
