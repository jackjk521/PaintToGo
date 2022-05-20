import React, { useEffect } from "react";
import styled from "styled-components";

import closeIcon from "../../assets/close.png";

const Icon = styled.img`
  width: 24px;
  margin-left: 15px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
  background-color: ${(props) => {
    if (props.type === "success") return "#58b259";
    if (props.type === "error") return "#f44236";
    return "#6d94ff";
  }};
  color: #fff;
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Item = ({ message, removeMessage }) => {
  return (
    <Wrapper type={message.type}>
      {message.caption}
      <Icon
        src={closeIcon}
        onClick={() => {
          removeMessage(message.id);
        }}
      />
    </Wrapper>
  );
};

export default Item;