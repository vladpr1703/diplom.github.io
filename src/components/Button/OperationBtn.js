import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import { createUseStyles } from 'react-jss';

const operationStyle = createUseStyles({
  button: {
    backgroundColor: '#FFA040',
    color: 'white',
    fontFamily: 'ZCOOL QingKe HuangYou',
    '&:hover': {
      color: 'black',
      backgroundColor: '#ffac40',
      boxShadow: 'inset 0px 0px 5px rgba(0,0,0,0.5)'
    },
    '&:focus': {
      outline: 'none',
    }}}
)

const OperationBtn = ({ buttonValue }) => {
  const classes = operationStyle();
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button className={classes.button} onClick={() => handleSetCalcFunction(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default OperationBtn;