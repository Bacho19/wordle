import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${(props) => props.isActive ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  font-size: 20px;
  padding: 40px 50px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px ;
  transform: translate(-50%, -50%);
`;
