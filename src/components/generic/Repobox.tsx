import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './Repobox.css';
import BookIcon from '../BookIcon';
import GithubLanguageIcon from './GithubLanguageIcon';
import GithubMoreInfo from './GithubMoreInfo';
import ElementLooper from './TextLooper';
import { returnNextArrayItem } from '../../helpers/helpers';
import clsx from 'clsx';

interface RepoboxProps {
    reponame: string;
    description?: string;
    languages: Array<string>;
    languageMsTransitionTime: number;
    className?: string
}

const Repobox = ({ reponame, description, languages, languageMsTransitionTime, className = '' }: RepoboxProps) => {
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
            position={undefined}
            scale={1}
            onStart={() => setPressed(true)}
            onStop={() => setPressed(false)}>
            <div className={`repobox ${className}`}>
                <span className="repobox__title__wrapper">
                    <span>
                        <a href="https://www.github.com/golota60" className="__link">
                            <span className="repobox__title githubfont">
                                <BookIcon className="repobox__icon" /> {reponame}
                            </span>
                        </a>
                    </span>
                    <GithubMoreInfo
                        className={clsx(isPressed && 'grabbing')} />
                </span>
                <div className="repobox__description githubfont">
                    {description}
                </div>
                <div className="repobox__language githubfont">
                    <GithubLanguageIcon color={currentColor as any} />
                    <span className="repobox__language__text githubfont">
                        <ElementLooper
                            textArray={languages}
                            msTransitionTime={languageMsTransitionTime} />
                    </span>
                </div>
            </div>
        </Draggable>
    );
}

export default Repobox