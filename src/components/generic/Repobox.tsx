import React, {useState} from 'react';
import Draggable from 'react-draggable';
import './Repobox.scss';
import BookIcon from '../BookIcon';
import GithubLanguageIcon from './GithubLanguageIcon';
import GithubMoreInfo from './GithubMoreInfo';
import ElementLooper from './TextLooper';
import { returnNextArrayItem } from '../../helpers/helpers';

interface RepoboxProps {
    reponame : string;
    description
        ?
        : string;
    languages : Array < string >;
    languageMsTransitionTime : number;
}

const Repobox = ({reponame, description, languages, languageMsTransitionTime} : RepoboxProps) => {
    const [isPressed,
        setPressed] = useState(false);

    const [currentColor, setCurrentColor] = useState(languages[0]);
      setTimeout(() => {
        setCurrentColor(returnNextArrayItem(languages, currentColor));
      }, 1500);

    return (
        <Draggable
            handle=".handle"
            defaultPosition={{
            x: 0,
            y: 0
        }}
            position={null}
            scale={1}
            onStart={() => setPressed(true)}
            onStop={() => setPressed(false)}>
            <div className="repobox">
                <span className="repobox__title__wrapper">
                    <span>
                        <a href="https://www.github.com/golota60" className="__link">
                            <span className="repobox__title githubfont">
                                <BookIcon className="repobox__icon"/> {reponame}
                            </span>
                        </a>
                    </span>
                    <GithubMoreInfo
                        className={`handle repobox__dragger ${isPressed
                        ? 'grabbing'
                        : ''}`}/>
                </span>
                <div className="repobox__description githubfont">
                    {description}
                </div>
                <div className="repobox__language githubfont">
                    <GithubLanguageIcon color={currentColor}/>
                    <span className="repobox__language__text githubfont">
                        <ElementLooper
                            textArray={languages}
                            msTransitionTime={languageMsTransitionTime}/>
                    </span>
                </div>
            </div>
        </Draggable>
    );
}

export default Repobox