import React from 'react';
import './App.scss';
import coffee from '../assets/coffee.svg';
import github from '../assets/github.svg';
import TextWrapper from './generic/TextWrapper';
import TextLooper from './generic/TextLooper';

const App = () => {

    const technologies = [
        'Javascript',
        'Typescript',
        'React',
        'CSS',
        'SASS',
        'Node',
        'Express',
        'UI/UX'
    ];

    return (
        <div className="App">
            <div className="information">
                <TextWrapper className="information__name" textType="h1">I'm Szymon</TextWrapper>
                <TextWrapper textType="h2" className="information__technologies">And I really like&nbsp;
                    <TextLooper msTransitionTime={2000} textArray={technologies}></TextLooper>
                </TextWrapper>
                <div className="information__github">
                    <TextWrapper textType="h2" color="light-gray">How much? See for yourself</TextWrapper>
                    <a href="https://www.github.com/golota60" target="_blank">
                        <img src={github} className="image__github"></img>
                    </a>
                </div>
                <img src={coffee} className="image__coffee"></img>
            </div>
        </div>
    );
}
export default App;