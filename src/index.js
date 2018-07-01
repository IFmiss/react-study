import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import test from './demo/test'
import registerServiceWorker from './registerServiceWorker';
import testrender from './demo/test-render'
import {Welcome, MyName} from './demo/test-comp'
let comp = <Welcome name='daiwei'/>
test()
let div2 = document.body.appendChild(document.createElement('div'))
let my = <MyName name='daiwei'/>
ReactDOM.render(
  [comp, my],
  div2
)
testrender()
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
