import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-right: 1px solid #373737;
  position: relative;
  display: grid;
  grid-template-rows: 48px auto;

  &::after {
    content: '';
    background-color: #373737;
    position: absolute;
    right: 0;
    width: 4px;
    height: 100%;
    cursor: ew-resize;
  }
`;

export const ToolbarWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;
