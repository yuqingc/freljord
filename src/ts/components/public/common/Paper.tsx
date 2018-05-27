// Copyright 2018 Matt<mr.chenyuqing@live.com>

const Paper: React.SFC<IPaperProps> = props => {
    const className: string = props.className !== undefined ? ' ' + props.className : '';

    return <div className={'common-paper' + className}>{props.children}</div>;
};

interface IPaperProps {
    className?: string;
}

export default Paper;
