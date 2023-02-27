import React from 'react';

interface GithubLanguageIconProps {
    color?: 'Javascript' | 'Typescript' | 'React' | 'CSS' | 'SASS' | 'Node' | 'Express' | 'UI/UX';
}

const GithubLanguageIcon = ({
    color = 'Javascript'
}: GithubLanguageIconProps) => {
    // this showed the little circle with the color
    return (
        <span></span>
    );
}

export default GithubLanguageIcon;