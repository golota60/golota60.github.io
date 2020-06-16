import React from 'react';
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
    return (
      <Draggable
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      scale={1}>
        <div className="repobox">
            <a href="https://www.github.com/golota60" style={{textDecoration: 'none'}}>
                <span className="repobox__title__wrapper">
                    <span className="repobox__title githubfont">
                    <BookIcon className="repobox__icon"/>
                    szymon-wiszczuk
                    </span>
                    <GithubMoreInfo className="handle"/>
                </span>
            </a>
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