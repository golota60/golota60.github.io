import React from 'react';
import './GithubLanguageIcon.scss';

interface GithubLanguageIconProps {
  color?: 'typescript' | 'javascript' | 'HTML' | 'CSS';
}

const GithubLanguageIcon = ({color}: GithubLanguageIconProps) => {
  return(<span className={`languageIcon languageIcon__${color ? color : ''}`}></span>);
}

export default GithubLanguageIcon;