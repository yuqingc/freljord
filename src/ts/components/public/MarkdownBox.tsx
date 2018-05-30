// Copyright 2018 Matt<mr.chenyuqing@live.com>

import ReactMarkdown from 'react-markdown';

const MarkdownBox = (props: {source: string}) => (
  <div className="mt-md-wrapper">
    <ReactMarkdown
      className="markdown-body"
      source={props.source}
    />
  </div>
);

export default MarkdownBox;
