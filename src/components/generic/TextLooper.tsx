import React, { useState, useEffect } from 'react';
import './TextLooper.scss';
import TextWrapper from './TextWrapper';

interface TextLooperInterface {
  textArray: Array<string>;
  msTransitionTime: number;
}

const TextLooper = ({textArray, msTransitionTime: transitionTime}: TextLooperInterface) => {
  const [currentText, setCurrentText] = useState(textArray[0]);

function returnNextArrayItem(array: Array<any>, currentItem: any): any {
  const itemIndex = array.indexOf(currentItem);
  return (itemIndex === array.length - 1) ? array[0] : array[itemIndex + 1];
}



  useEffect(() => {  
    console.log('use effect')
    const textInterval = setInterval(() => {
    setCurrentText(returnNextArrayItem(textArray, currentText));
    }, transitionTime);
    return () => {
      console.log(' return use effect')
      clearInterval(textInterval);
    }
  },[]);

  return (
    <>
    {console.log('rerender')}
    <TextWrapper>{currentText}</TextWrapper>
    </>
  );
}

export default TextLooper;