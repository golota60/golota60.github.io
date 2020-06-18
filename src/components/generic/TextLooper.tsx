import React, { useState, useEffect, ReactElement } from 'react';
import './TextLooper.scss';

interface ElementLooperInterface {
  textArray: Array<string>;
  msTransitionTime: number;
}

const ElementLooper = ({textArray, msTransitionTime}: ElementLooperInterface) => {
  const [currentText, setCurrentText] = useState(textArray[0]);

const returnNextArrayItem = (array: Array<any>, currentItem: any): any => {
  const itemIndex = array.indexOf(currentItem);
  return (array.indexOf(currentItem) === array.length - 1) ? array[0] : array[itemIndex + 1];
}

    setTimeout(() => {
      setCurrentText(returnNextArrayItem(textArray, currentText));
    }, msTransitionTime);

  return (
    <>
      {currentText}
    </>
  );
}

export default ElementLooper;