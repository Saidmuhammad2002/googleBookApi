import { Skeleton } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

import {
  HourglassOutlined,
  LinkOutlined,
  BookOutlined,
} from "@ant-design/icons";

const BookItemStyles = styled.div`
  img {
    height: 190px;
  }
  margin: 20px;
  .card,
  .modal {
    background-color: #fcfcfc;
    width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 8px;
    padding: 5px 3px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
    margin-top: 20px;
    height: 30%;
    padding: 10px;
    background-color: #fbfbfb;
  }
  :hover {
    box-shadow: 12px 12px 5px 1px #999;
  }
  .button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    border-top: 1px solid #999;
    padding: 10px;
    div:not(:last-child) {
      border-right: 1px solid #999;
      padding: 0 15px;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      justify-items: center;
    }
  }
  a {
    color: inherit;
    :hover {
      color: #005fed;
    }
  }
  span {
    display: flex;
    justify-content: space-around;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
  }

  /* just some content with arbitrary styles for explanation purposes */
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -150px;
    z-index: 11; /* 1px higher than the overlay layer */
  }
`;
const BookItem = ({ item, isPending }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className={item.id}>
      <BookItemStyles>
        <div
          className="card"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          {isPending ? <Skeleton.Image size="large" /> : ""}
          {item.volumeInfo.imageLinks ? (
            <img src={item.volumeInfo.imageLinks.thumbnail} alt="img" />
          ) : (
            <Skeleton.Image size="large" />
          )}
          <div className="info">
            <div className="title">{item.volumeInfo.title}</div>
            <div className="desc">
              {JSON.stringify(item.volumeInfo.authors)}
            </div>
          </div>
          <div className="button">
            <div className="cost">
              <a
                href={item.volumeInfo.infoLink}
                target="_blank"
                rel="noreferrer"
              >
                <LinkOutlined />
                {item.volumeInfo.printType}
              </a>
            </div>
            <div className="time">
              <BookOutlined />
              {item.volumeInfo.pageCount}
            </div>
            <div className="pages">
              <HourglassOutlined />
              {item.volumeInfo.publishedDate}
            </div>
          </div>
        </div>
        {isModalVisible ? (
          <>
            <div
              className="overlay"
              onClick={() => setIsModalVisible(false)}
            ></div>
            <div className="modal">
              {item.volumeInfo.imageLinks ? (
                <img src={item.volumeInfo.imageLinks.thumbnail} alt="img" />
              ) : (
                <Skeleton.Image size="large" />
              )}
              <div className="info">
                <div className="title">{item.volumeInfo.title}</div>
                <div className="desc">
                  {JSON.stringify(item.volumeInfo.authors)}
                </div>
              </div>
              <div className="button">
                <div className="cost">
                  <a
                    href={item.volumeInfo.infoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkOutlined />
                    {item.volumeInfo.printType}
                  </a>
                </div>
                <div className="time">
                  <BookOutlined />
                  {item.volumeInfo.pageCount}
                </div>
                <div className="pages">
                  <HourglassOutlined />
                  {item.volumeInfo.publishedDate}
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </BookItemStyles>
    </div>
  );
};

export default BookItem;
