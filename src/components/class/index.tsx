import * as React from 'react';
import { Button } from 'remax/one';
import styles from './index.less';

interface Props {
  list: string[];
}

const LoginButton = ({
  list = [],
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <div>
      test
      {list.map((v) => (
        <Button>{v}</Button>
      ))}
    </div>
  );
};

export default LoginButton;
