import React from 'react';
import { InstrumentsPanel } from './components/InstrumentsPanel';
import { Container } from './styled';

export function Workspace() {
  const [instPanelWidth, setPanelWidth] = React.useState(350);
  const [mPos, setMPos] = React.useState(0);

  const resize = React.useCallback(
    (e: MouseEvent) => {
      if (!(e.screenX >= 500 || e.screenX <= 250)) {
        const dx = mPos === 0 ? e.screenX : mPos - e.screenX;

        setMPos(e.screenX);

        setPanelWidth(dx);
      }
    },
    [mPos, instPanelWidth, setMPos, setPanelWidth]
  );

  const onMouseDown = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setMPos(e.screenX);

      if (!(e.screenX >= 500 || e.screenX <= 250)) {
        document.addEventListener('mousemove', resize, false);
      }
    },
    [setMPos]
  );

  const onMouseUp = React.useCallback(() => {
    document.removeEventListener('mousemove', resize, false);
  }, []);

  return (
    <Container width={instPanelWidth} onMouseUp={onMouseUp}>
      <InstrumentsPanel onMouseDown={onMouseDown} />
      <div />
    </Container>
  );
}
