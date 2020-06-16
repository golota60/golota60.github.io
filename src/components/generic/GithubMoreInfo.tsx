import React from 'react';
import './GithubMoreInfo.scss';

interface GithubMoreInfoProps {
    onClick
        ? ()
        : void;
        className?: string;
}

const GithubMoreInfo = ({className} : GithubMoreInfoProps) => {
    return (
        <p className={`githubMoreInfo__wrapper ${className ? className : ''}`}>
            <svg
                className="githubMoreInfo"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true">
                <path
                    fillRule="evenodd"
                    d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
            </svg>
        </p>
    )
}

export default GithubMoreInfo;
