import React from 'react';
import { Menu } from './components/Menu';
import { Toolbar } from './components/Toolbar';
import { Workspace } from './components/Workspace';
import { Container } from './styled';

export function MainScreen() {
  return (
    <Container>
      <Menu />
      <Toolbar />
      <Workspace />
    </Container>
  );
}
