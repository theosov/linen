import React from 'react';
import { Button } from './styled';

type Props = {
  icon: JSX.Element;
};

export function IconButton(props: Props) {
  const { icon } = props;

  return <Button>{icon}</Button>;
}
