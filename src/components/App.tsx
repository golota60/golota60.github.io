import React from 'react';
import './App.scss';
import coffee from '../assets/coffee.svg';
import TextWrapper from './generic/TextWrapper';
import TextLooper from './generic/TextLooper';

const App = () => {

  const technologies = ['javascript', 'typescript', 'React', 'CSS', 'SASS'];

  return (
    <div className="App">
      <TextWrapper textType="h1">I'm Szymon</TextWrapper>
      <TextWrapper textType="h2">And I really like  
        <TextLooper msTransitionTime={2000} textArray={technologies}></TextLooper>
      </TextWrapper>
      <img src={coffee} className="coffee-image"></img>
    </div>
  );
}
export default App;