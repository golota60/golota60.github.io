import React from 'react';
import './GithubLanguageIcon.scss';

interface GithubLanguageIconProps {
    color?: 'Javascript' | 'Typescript' | 'React' | 'CSS' | 'SASS' | 'Node' | 'Express' | 'UI/UX'
}

const GithubLanguageIcon = ({
    color = 'Javascript'
} : GithubLanguageIconProps) => {
    return (
        <span className={`languageIcon languageIcon__${color}`}></span>
    );
}

export default GithubLanguageIcon;