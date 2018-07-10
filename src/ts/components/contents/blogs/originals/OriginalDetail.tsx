// Copyright 2018 Matt<mr.chenyuqing@live.com>

import * as _Prism from 'prismjs';
import { BackTop } from 'antd';

import {
  Paper,
  MarkdownBox
} from 'ts/components/public';

import withBackButtonInHeader from 'ts/utils/withBackButtonInHeader';

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

interface IOriginalDetailProps {
  match?: {
    params: {
      id: string
    };
  };
}

class OriginalDetail extends React.Component<IOriginalDetailProps, {}> {

  public componentDidMount () {
    const { match } = this.props;
    console.log('match', match);
    Prism.highlightAll();
  }

  public render () {
    return (
      <Paper>
        <MarkdownBox source={fakeArticle}/>
        <BackTop/>
      </Paper>
    );
  }
}

export default withBackButtonInHeader(OriginalDetail);
