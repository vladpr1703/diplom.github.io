import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Content = () => {
  const { number, storedNumber } = useContext(NumberContext);
  return (
    <>
      <h2 className='content'>
        {!number.length && !storedNumber ? '0' : number || storedNumber}
      </h2>
    </>
  );
};

export default Content;