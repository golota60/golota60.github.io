import React, { useState, useEffect, ReactElement } from 'react';
import './TextLooper.scss';
import { returnNextArrayItem } from '../../helpers/helpers';

interface ElementLooperInterface {
  textArray: Array<string>;
  msTransitionTime: number;
}

const ElementLooper = ({textArray, msTransitionTime}: ElementLooperInterface) => {
  const [currentText, setCurrentText] = useState(textArray[0]);

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