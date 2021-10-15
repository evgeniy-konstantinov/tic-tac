import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const BoardWrapper = styled.div`
  width: 300px;
  height: 300px;
  background: red;
  display: flex;
  flex-wrap: wrap;
`;

export default function Board({ squares, click }) {
  return (
    <BoardWrapper>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => click(i)} />
      ))}
    </BoardWrapper>
  );
}
