import React from 'react';
import styled from 'styled-components';

const ButtonSquare = styled.button`
  width: 100px;
  height: 100px;
  background: #fff;
  border: 1px solid #222;
  cursor: pointer;
  outline: none;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: none.3s all ease;
  :hover {
    background: #c9c5c5;
  }
`;

export default function Square(props) {
  return <ButtonSquare onClick={props.onClick}>{props.value}</ButtonSquare>;
}
