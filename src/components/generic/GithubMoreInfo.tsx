import clsx from 'clsx';
import React from 'react';

interface GithubMoreInfoProps {
    onClick?: () => void;
    className?: string;
    onMouseDown?: (e: any) => void;
}

const GithubMoreInfo = ({ className, onMouseDown = () => { } }: GithubMoreInfoProps) => {
    return (
        <p
            onMouseDown={onMouseDown} className={clsx(className)}>
            <svg
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
