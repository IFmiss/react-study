import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import test from './demo/test'
import {clock} from './demo/test-clock';
import registerServiceWorker from './registerServiceWorker';
import testrender from './demo/test-render'
import {Welcome, MyName, TestWel} from './demo/test-comp'
import {ActionLink, Toggle, LoggingButton} from './demo/event';
import {Greeting} from './demo/tiaojian';


let comp = <Welcome name='daiwei'/>
test()
let div2 = document.body.appendChild(document.createElement('div'))
let my = <MyName name='DDDDDDDDDDD'/>
let testWel = <TestWel/>
ReactDOM.render(
  testWel,
  div2
)
ReactDOM.render(
  comp,
  div2
)
ReactDOM.render(
  my,
  div2
)
ReactDOM.render(
  <ActionLink/>,
  div2
)
testrender()
ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  [<Toggle key="1"/>,<LoggingButton key="2"/>, <Greeting key={3} isLoggedIn={true}/>],
  div2
)

clock()
registerServiceWorker();
