const sidebarRouterConfig = [
  {
      name: 'Home',
      path: '/',
      exact: true,
      icon: 'home',
  },
  {
      name: 'Blogs',
      path: '/blogs',
      icon: 'rocket',
      children: [
          {
              name: 'Technology',
              path: '/technology',
              icon: 'code-o',
          },
          {
              name: 'Resume',
              path: '/resume',
              icon: 'lock',
          }
      ]
  },
  {
      name: 'Downloads',
      path: '/downloads',
      icon: 'download',
      children: [
          {
              name: 'Books',
              path: '/books',
              icon: 'book',
          },
          {
              name: 'Files',
              path: '/files',
              icon: 'folder',
          }
      ]
  },
  {
      name: 'Messages',
      path: '/messages',
      icon: 'message',
  },
];

const temp = [];
function renderRoutesRecursively(configs){
  for (let v of configs) {
    if (v.children) {
      renderRoutesRecursively(v.children)
    }
    else {
      temp.push(v.name)
    }
  }
}
renderRoutesRecursively(sidebarRouterConfig)


function extract (arry) {
  const temp = [];
  (function go(configs, parentPath) {
    for (let v of configs) {
      if (v.children) {
        go(v.children, v.path)
      }
      else {
        console.log(v.path)
        temp.push(parentPath + v.path)
      }
    }
  })(arry, '')
  return temp;
}

console.log(extract(sidebarRouterConfig))