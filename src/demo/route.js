import React from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'

class App extends React.Component{
  constructor (props) {
    super()
    this.state = {
      isLogin: false
    }
  }
  render () {
    return (
      <BrowserRouter basename="/dw">
        <div>
          <Link to="/">home</Link>
          <Link to="/about/12?id=1111&name=daiwei">about</Link>
          <Link to="/concat">concat</Link>
          <NavLink to="/concat" activeClassName="hello">Concat</NavLink>
          <Link to="/other/react/route">other</Link>
          <Link to="/another/2017-04-02.html">another</Link>
          <Link to="/query/user?id=123&name=minooo">query1</Link>
          <Link 
            to={{pathname: '/query/user', search: '?id=456&name=minooo'}}
            >query2</Link>
          <div>
            <Route exact path="/" component = {Home}/>
            <Route path="/about/:id?/:name" render={(props) => {
              {console.log(props.history,props.location,props.match)}
              return (
                <h1>
                  About{console.log(props.match)}
                  <span onClick={() => {props.history.push('/', {name:'mm'})}}>click me</span>
                </h1>
              )
            }}/>
            <Route path="/concat" children ={({match}) => match && <h1>Contact</h1>}/>
            <Route path="/other/:page?/:subpage?" render={({match}) => (
              <h1>
                PAGE: {match.params.page} <br/>
                SUBPAGE: {match.params.subpage}
              </h1>
            )}/>
            <Route path="/another/:a(\d{4}-\d{2}-\d{2}):b(\.[a-z]+)" render={({ match }) => (
                <h1>
                  paramA: {match.params.a}<br/>
                  paramB: {match.params.b}
                </h1>
              )} />
            <Route path="/query/user" render={({match, location}) => (
              <div>
                <p>query</p>
                <p>match: {JSON.stringify(match)}</p>
                <p>location: {JSON.stringify(location)}</p>
                <p>id: {new URLSearchParams(location.search).get('id')}</p>
                <p>name: {new URLSearchParams(location.search).get('name')}</p>
              </div>
            )}/>
            <Route exact path="/" render={() => (
              !this.state.isLogin ? (<Redirect to="/concat"/>) : (<Redirect to="/about"/>)
            )}/>
            </div>
        </div>
      </BrowserRouter>
    )
  }
}

const Home = (props) => {console.log(props, 'home'); return <h1>Home</h1>}

export default App