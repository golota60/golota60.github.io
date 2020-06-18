import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './Repobox.scss';
import BookIcon from '../BookIcon';
import GithubLanguageIcon from './GithubLanguageIcon';
import GithubMoreInfo from './GithubMoreInfo';

interface RepoboxProps {
    reponame : string;
    description : string;
    language : string;
    color : string;
}

const Repobox = () => {
const [isPressed, setPressed] = useState(false);
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
                        <a
                            href="https://www.github.com/golota60"
                        className="__link"
                        >
                            <span className="repobox__title githubfont">
                                <BookIcon className="repobox__icon"/>
                                szymon-wiszczuk
                            </span>
                        </a>
                    </span>
                    <GithubMoreInfo className={`handle repobox__dragger ${isPressed ? 'grabbing' : ''}`}/>
                </span>
                <div className="repobox__description githubfont">
                    The best JS developer around
                </div>
                <div className="repobox__language githubfont">
                    <GithubLanguageIcon/>
                    <span className="repobox__language__text githubfont">JavaScript</span>
                </div>
            </div>
        </Draggable>
    );
}

export default Repobox