import React from 'react'
import {HashRouter as Router, Route, NavLink, Link} from 'react-router-dom'
import Todo from './../todolist/todo'
import ClickCount from './../clickcount/index'
import MyRedirect from './../redirect/index'
import PropTypes from 'prop-types'
import TestLifereCycle from './../liferecycle'
import {MyCreateRef, RefChild} from './../liferecycle/createRef'
import { findDOMNode } from 'react-dom'
import TestDom from './../liferecycle/dom'
import RenderForm from './../render'
import CalcBoiling from './../stateup'
import {signUpDialog, WelcomeDialog} from './../extends'
import {Refs} from './../refs'
import {NameForm, FileInput} from './../noctrl'
import {CounterButton} from './../purecomp'
import {TestContext} from './../context'
import ContextTheme from './../context/test'
import NewContext from './../context/test1'
import Rorttals from './../portals'
import ErrorBoundary from './../boundaries'
import {TestGaoJie,TestMineGaoJie, ExtendsComGaoJie, TestRefsCompGaoJie, TestFButton} from './../gaojie'
import MouseReacker from './../renderprop'
import TestRenderProp from './../renderprop/comp'
import Trans from './../transition'
import TransSider from './../transition/sider'
class MyRoute extends React.Component{
  constructor (props) {
    super(props)
    this.myRef = React.createRef()
  }
  /**
   * 基本使用方法，声明contextTypes，在函数或者render中通过this.context调用
   */
  static childContextTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
  }
  componentDidMount () {
    console.log('MyRoute mounted: ')
    console.log(this.myRef.current)
    console.log('findDOMNode(this.myRef.current)', findDOMNode(this.myRef.current))
  }
  /**
   * getChildContext 指定的传递给子组件的属性需要先通过 childContextTypes 来指定，不然会产生错误。
   */
  getChildContext = () => {
    return {
      name: "daiwei hahaha",
      age: "19"
    }
  }
  getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
  }
  render () {
    return(
      <div>
        <Router basename="/s">
          <div>
            <ul>
              <li>
                <NavLink to="/todo" activeStyle={{ color: 'green', fontWeight: 'bold' }}>todo</NavLink>
              </li>
              <li>
                <NavLink to="/">首页</NavLink>
              </li>
              <li>
                <Link to="/redirect">redirect</Link>
              </li>
              <li>
                <Link to={
                  {
                    pathname: "/click",
                    search: "?name=daiwei",
                    state: { price: 18 }
                  }
                }>click</Link>
              </li>
              <li>
                <Link to="/life">life</Link>
              </li>
              <li>
                <Link to="/ref">createRef</Link>
              </li>
              <li>
                <Link to="/dom">dom</Link>
              </li>
              <li>
                <Link to="/render">render</Link>
              </li>
              <li>
                <Link to="/stateup">stateup</Link>
              </li>
              <li>
                <Link to="/extends">extends</Link>
              </li>
              <li>
                <Link to="/extends1">extends1</Link>
              </li>
              <li>
                <Link to="/refs">ref</Link>
              </li>
              <li>
                <Link to="/noctrl">非控制组件</Link>
              </li>
              <li>
                <Link to="/purecomp">purecomp</Link>
              </li>
              <li>
                <Link to="/context">context</Link>
              </li>
              <li>
                <Link to="/ctx">context1</Link>
              </li>
              <li>
                <Link to="/porttals">Rorttals</Link>
              </li>
              <li>
                <Link to="/gaojie">高阶组件</Link>
              </li>
              <li>
                <Link to='/renderprop'>renderprop</Link>
              </li>
              <li>
                <Link to='/renderprop1'>TestRenderProp</Link>
              </li>
              <li>
                <Link to='/trans'>trans</Link>
              </li>
              <li>
                <Link to='/transSider'>transSider</Link>
              </li>
            </ul>
            <div>
              <Route path="/todo" component={Todo}></Route>
              <Route path="/click" component={ClickCount}></Route>
              <Route path="/redirect" component={MyRedirect}></Route>
              <Route path="/life" render={() => <TestLifereCycle/>}/>
              {/* <Route path="/ref" component={MyCreateRef}/> */}
              <Route path="/ref" render={() => (
                <div>
                  <MyCreateRef />
                  <RefChild ref={this.myRef}>
                    点击我
                  </RefChild>
                </div>
              )}/>

              <Route path='/dom' children={() => <TestDom />}/>
              <Route path='/render' component={() => <RenderForm />}/>
              <Route path='/stateup' component={CalcBoiling}/>
              <Route path='/extends' component={WelcomeDialog}/>
              <Route path='/extends1' component={signUpDialog}/>
              <Route path='/refs' component={Refs}/>
              <Route path='/noctrl' render={() => {
                return(
                  <div>
                    <NameForm/>
                    <FileInput/>
                  </div>
                )
              }}/>
              <Route path='/purecomp' render={() => (
                <CounterButton color="#eee"/>
              )} />
              <Route path='/context' render={() => (
                <div>
                  <ContextTheme/>
                  <TestContext/>
                </div>
              )} />
              <Route path='/ctx' render={() => (
                <ErrorBoundary>
                  <NewContext />
                </ErrorBoundary>)}/>
              <Route path='/porttals' component={Rorttals}/>
              <Route path='/gaojie' render={() => (
                <div>
                  <TestGaoJie/>,
                  <TestMineGaoJie/>,
                  {/* <ExtendsComGaoJie/>, */}
                  <TestRefsCompGaoJie/>,
                  <TestFButton/>
                </div>
              )}/>
              <Route path='/renderprop' component={MouseReacker}/>
              <Route path='/renderprop1' component={TestRenderProp}/>
              <Route path='/trans' component={Trans}/>
              <Route path='/transSider' render={() => (
                <TransSider imageSrc="https://goss.veer.com/creative/vcg/veer/800water/veer-142468260.jpg"/>
              )}/>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default MyRoute