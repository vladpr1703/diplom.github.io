import React, { useState } from 'react';
import * as math from 'mathjs';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');
  const [result, setResult] = useState({});

  const handleSetContentValue = num => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  const handleSetCalcFunction = type => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':  
          setStoredNumber(`${(parseFloat(storedNumber) + parseFloat(number))}`); 
          setResult({
            num1: `${storedNumber}`,
            operation: '+',
            num2: `${number}`,
            equal: '=',
            result: `${(parseFloat(storedNumber) + parseFloat(number))}`
          });       
          break;
        case '-':
          setResult({
            num1: `${storedNumber}`,
            operation: '-',
            num2: `${number}`,
            equal: '=',
            result: `${(parseFloat(storedNumber) - parseFloat(number))}`
          });
          setStoredNumber(`${(parseFloat(storedNumber) - parseFloat(number))}`);
          break;
        case '/':
          setResult({
            num1: `${storedNumber}`,
            operation: '/',
            num2: `${number}`,
            equal: '=',
            result: `${(parseFloat(storedNumber) / parseFloat(number))}`
          });
          setStoredNumber(`${(parseFloat(storedNumber) / parseFloat(number))}`);
          break;
        case '*':
          setStoredNumber(`${parseFloat(storedNumber) * parseFloat(number)}`);
          setResult({
            num1: `${storedNumber}`,
            operation: '*',
            num2: `${number}`,
            equal: '=',
            result: `${(parseFloat(storedNumber) * parseFloat(number))}`
          });
          break;
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetContentValue,
        handleSetStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber,
        result,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;