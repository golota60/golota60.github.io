import React from 'react';
import './App.scss';
import coffee from '../assets/coffee.svg';
import github from '../assets/github.svg';
import TextWrapper from './generic/TextWrapper';
import ElementLooper from './generic/TextLooper';
import Repobox from './generic/Repobox';
import arrLeft from '../assets/arr_left.svg';

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

const App = () => {

    return (
        <div className="App">
            <div className="information">
                <TextWrapper className="information__name" textType="h1">I'm Szymon</TextWrapper>
                <TextWrapper textType="h2" className="information__technologies">And I really like&nbsp;
                    <ElementLooper msTransitionTime={1500} textArray={technologies}></ElementLooper>
                </TextWrapper>
                <div className="information__github">
                    <TextWrapper textType="h2" color="gray">How much? See for yourself</TextWrapper>
                    <a href="https://www.github.com/golota60" target="_blank">
                        <img src={github} className="image__github"></img>
                    </a>
                </div>
                <img src={coffee} className="image__coffee"></img>
                <div className="information__repoboxWrapper">
                    <Repobox reponame='szymon-wiszczuk' description='The best JS developer around' languages={technologies} languageMsTransitionTime={1500}/>
                    <span className="information__clickme githubfont">
                        <img className="information__clickme__arr" src={arrLeft}/>
                        Try dragging me around!
                    </span>
                </div>
            </div>
        </div>
    );
}
export default App;