import styled from "styled-components";

export const CellsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Cell = styled.div`
  width: 50px;
  height: 50px;
  border: 2.5px solid #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.activeText ? '#fff' : '#000'};
  text-transform: uppercase;
  background-color: ${(props) => props.color};
`;
