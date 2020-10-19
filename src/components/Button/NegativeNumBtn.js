import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import { createUseStyles } from 'react-jss';

const negativeStyle = createUseStyles({
  button: { 
    backgroundColor: '#c9c8c3',
    color: 'white',
    padding: '0px',
    fontWeight: 'bold',
    fontFamily: 'ZCOOL QingKe HuangYou',
    '&:hover': {
      color: 'black',
      backgroundColor: '#c4c3be',
      boxShadow: 'inset 0px 0px 5px rgba(0,0,0,0.5)'
    },
    '&:focus': {
      outline: 'none',
    }}
})

const NegativeNum = () => {
  const classes = negativeStyle();
  const { handleToggleNegative } = useContext(NumberContext);
  return (
    <button className={classes.button} onClick={() => handleToggleNegative()}>
      -/+
    </button>
  );
};

export default NegativeNum;