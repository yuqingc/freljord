// Copyright 2018 Matt<mr.chenyuqing@live.com>

import ReactMarkdown from 'react-markdown';
import * as _Prism from 'prismjs';

import { Paper } from 'ts/components/public/common';

interface IOriginalDetailProps {
  match: {
    params: {
      id: string
    };
  };
}

const fakeArticle = `# About this website

This website is a personal site of mine. There is a brief introduction.

---

## Manual

### Home

### Blogs

- Originals

- Favorites

### Downloads

- Books

- Files

### Messages

### Encrypted

---

## Technology

### Frontend

- Project repository: Freljord

- Frontend tech stack introduction

### Backend

- Project repository: Ryze

- Backend tech stack introduction

---

## React-md test

\`\`\`go
package main

import (
    "fmt"
)

// comment
func main () {
    fmt.Println("hello world")
}
\`\`\`
| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |

\`\`\`javascript
var a = {
  x: 5;
}
console.log(a);
\`\`\`
`;

declare const Prism: typeof _Prism;

class OriginalDetail extends React.Component<IOriginalDetailProps, {}> {

  public componentDidMount () {
    const { match } = this.props;
    console.log('mount', match.params.id);
    Prism.highlightAll();
  }

  public render () {
    return (
      <Paper>
        <h1>{this.props.match.params.id}</h1>
        <ReactMarkdown
          className="markdown-body"
          source={fakeArticle}/>
      </Paper>
    );
  }
}

export default OriginalDetail;
