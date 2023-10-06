import React from 'react';
import TextTransition from 'react-text-transition';


class AppearingTextProps {
    text?: string;
}

function AppearingText({ text }: AppearingTextProps): JSX.Element {
    return <div>{text}</div>;
}

export default AppearingText;