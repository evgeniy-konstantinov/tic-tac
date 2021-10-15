import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { calculateWinner } from '../helper';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ClineField = styled.button`
  width: 200px;
  height: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  color: #fff;
  outline: none;
  background: #222;
  border: 1px solid #fff;
  border-radius: 5px;
  :hover {
    background: #fff;
    color: #222;
    transition: none.3s all ease;
  }
`;

const GameInfo = styled.p`
  margin-top: 25px;
  font-size: 35px;
  color: #fff;
`;

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xRun, setXRun] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    //определить был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return;
    //определить чей ход х ? 0
    boardCopy[index] = xRun ? 'X' : '0';
    //обновить стейт
    setBoard(boardCopy);
    setXRun(!xRun);
  };

  const startNewGame = () => {
    return (
      <ClineField onClick={() => setBoard(Array(9).fill(null))}>
        Очистить поле
      </ClineField>
    );
  };

  return (
    <Wrapper>
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <GameInfo>
        {winner
          ? 'Победитель: ' + winner
          : 'Сейчас ходит: ' + (xRun ? 'X' : '0')}
      </GameInfo>
    </Wrapper>
  );
}
