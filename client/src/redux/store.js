import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index'

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENTION_COMPOSE || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
