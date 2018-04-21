# PRD v0.1.0

## Overview

- Due time: July 30, 2018
- Product feature: Basic functions of a website
- Author: @yuqingc
- Created on April 21, 2018

## Features

### Header bar

- A logo is added to the left corner linking to Home page
- Login button when not logged in
- Username & logout button when logged in
- `Edit` button linking to the repo of Freljord

### Home page

- A background picture with low contrast ratio
- `Contact me` texts
- Github, Zhihu, and Weibo icon linking to the corresponing websites

### Technology page

- Blog list
- Blog page which renders markdown files
- Blog comments is not released in this version

### Resume page

- Password is needed if you want to see the page
- Token expires in one hour

### Books downloads page

- Book list with introduction and Baidu Drive link

### Files downloads page

- File link list
- Files are downloaded from server

### Message page

- Comments list
- Pose a comment

### Encrypted page

- Only administrater can see this tab and page
- Non-admin will be directed to a Not found 404 page if he forces to visit it by url
- Empty for now but some texts needs to be fetched from server

### User management

- OAuth 2.0 is used for authentication
- Try logging in on rendering page the first time. If successful (valid token not expired), the `isAdmin` flag is set to `true`, other wise it it set to false.
- Trying to deleting a comment or requesting an encrypted content (texts in the Encrypted page) will make an authenticaton. If fail, the `isAdmin` flag will set to false and the login window pops out.

---

Edited on April 21, 2018 by @yuqingc