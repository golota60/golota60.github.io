import React, { useState, useEffect } from 'react';
import './TextLooper.scss';
import TextWrapper from './TextWrapper';

interface TextLooperInterface {
  textArray: Array<string>;
  msTransitionTime: number;
}

const TextLooper = ({textArray, msTransitionTime: transitionTime}: TextLooperInterface) => {
  const [currentText, setCurrentText] = useState(textArray[0]);

const returnNextArrayItem = (array: Array<any>, currentItem: any): any => {
  const itemIndex = array.indexOf(currentItem);
  return (array.indexOf(currentItem) === array.length - 1) ? array[0] : array[itemIndex + 1];
}

    setTimeout(() => {
      setCurrentText(returnNextArrayItem(textArray, currentText));
    }, transitionTime);

  return (
    <>
    <TextWrapper textType="h2" className="textlooper">{currentText}</TextWrapper>
    </>
  );
}

export default TextLooper;