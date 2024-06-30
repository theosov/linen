import React from 'react';
import { LuPlus } from 'react-icons/lu';
import { IconButton } from '@src/uikit';
import { Container, ToolbarWrap } from './styled';

type Props = {
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export function InstrumentsPanel(props: Props) {
  const { onMouseDown } = props;

  return (
    <Container onMouseDown={onMouseDown}>
      <ToolbarWrap>
        <IconButton icon={<LuPlus />} />
      </ToolbarWrap>
    </Container>
  );
}
