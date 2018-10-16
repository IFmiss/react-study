import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Counter from './redux-demo/reducer'
import App from './redux-demo/count'

let store = createStore(Counter)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)