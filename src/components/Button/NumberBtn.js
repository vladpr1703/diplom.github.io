import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { NumberContext } from '../NumberProvider';

const numberStyle = createUseStyles({
  button: {
    backgroundColor: '#494B4C',
    color: 'white',
    font: 'bold',
    fontFamily: 'ZCOOL QingKe HuangYou',
    '&:hover': {
      color: 'black',
      backgroundColor: '#555555',
      boxShadow: 'inset 0px 0px 5px rgba(0,0,0,0.5)'
    },
    '&:focus': {
      outline: 'none',
    }}
  }
)

const NumberBtn = ({ buttonValue }) => {
  const classes = numberStyle();
  const { handleSetContentValue } = useContext(NumberContext);
  return (
    <button className={classes.button} onClick={() => handleSetContentValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default NumberBtn;