import styled from 'styled-components';

type ContainerProps = {
  width: number;
};

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${({ width }) => width}px auto;
`;
