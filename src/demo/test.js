import React from 'react';
import ReactDOM from 'react-dom';
let name = '戴伟'
let sex = '男'
let alert = '<script>alert(1)</script>'
const element = React.createElement(
  'dialog',
  {className: 'dialog', open: true, key: '1'},
  'aaaa'
)
function formatname () {
  return `${name} 是一个热爱前端开发的 ${sex}孩子`
}
export default function () {
  const ele = <h1 tabIndex="0" key='2'>{formatname()}</h1>
  let div = document.createElement('div')
  div.className = 'aaa'
  document.body.appendChild(div)
  ReactDOM.render(
    [element,alert,ele],
    div
  );
}