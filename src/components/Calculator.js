import React from 'react';
import NumberBtn from './Button/NumberBtn';
import OperationBtn from './Button/OperationBtn';
import ClearBtn from './Button/ClearBtn';
import Content from './Content';
import EqualBtn from './Button/EqualBtn';
import BackBtn from './Button/BackBtn';
import NegativeNumBtn from './Button/NegativeNumBtn';
import History from './History'
import '../style.css';

const Calculator = () => (
  <div className='main'>
  <div className='calc'>
    <div className="display">
      <Content/>
    </div>
    <div className="number-pad">
      <ClearBtn />
      <BackBtn/>
      <NegativeNumBtn />
      <OperationBtn buttonValue="/" />
      <NumberBtn buttonValue={7} />
      <NumberBtn buttonValue={8} />
      <NumberBtn buttonValue={9} />
      <OperationBtn buttonValue="*" />
      <NumberBtn buttonValue={4} />
      <NumberBtn buttonValue={5} />
      <NumberBtn buttonValue={6} />
      <OperationBtn buttonValue="-" />
      <NumberBtn buttonValue={1} />
      <NumberBtn buttonValue={2} />
      <NumberBtn buttonValue={3} />
      <OperationBtn buttonValue="+" />
    </div>
    <div className='zero-equal'>
      <NumberBtn buttonValue={0} />
      <NumberBtn buttonValue="." />
      <EqualBtn />
    </div>
  </div>
  <div className='history'>
    <History/>
  </div>
  </div>
);

export default Calculator;