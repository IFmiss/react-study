import React from 'react';
import ReactDOM from 'react-dom';
export default function () {
  const ele = (
    <div>
      <h1>hello world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  let div1 = document.createElement('div')
  div1.className = 'bbb'
  document.body.appendChild(div1)
  ReactDOM.render(
    ele,
    div1
  )
}