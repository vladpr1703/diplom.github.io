import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';

const equalStyle = {
  fontFamily: 'ZCOOL QingKe HuangYou'
}

const EqualBtn = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button style={equalStyle} onClick={() => doMath()}>
      =
    </button>
  );
};

export default EqualBtn;