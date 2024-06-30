import styled from 'styled-components';

export const Button = styled.button`
  background-color: #4b4b4b;
  border: none;
  color: #ffffff;
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  outline: transparent;

  &:hover {
    background-color: #646464;
  }

  &:active {
    background-color: #313131;
  }
`;
