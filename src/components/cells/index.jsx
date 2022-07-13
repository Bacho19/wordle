import React from 'react'
import { WORDS_LIMIT } from '../../constants';
import { Cell, CellsWrapper } from './styled';

const Cells = ({ guess, solution, isFinal }) => {
  const cells = [];
  
  for (let i = 0; i < WORDS_LIMIT; i++) {
    const char = guess[i];
    let color = '';
    let activeText = false;

    if (isFinal) {
      if (char === solution[i]) {
        color = '#79B851';
        activeText = true;
      } else if (solution.includes(char)) {
        color = '#F3C237';
        activeText = true;
      } else {
        color = '#A4AEC4';
        activeText = true;
      }
    }

    cells.push(<Cell activeText={activeText} color={color} key={i}>{char}</Cell>)
  }

  return (
    <CellsWrapper>
      {cells}
    </CellsWrapper>
  )
}

export default Cells;