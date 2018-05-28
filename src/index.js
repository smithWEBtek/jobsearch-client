import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import CompanyReducer from './Store/Reducers/CompanyReducer'
import ContactReducer from './Store/Reducers/ContactReducer'
import JobReducer from './Store/Reducers/JobReducer'
import LogReducer from './Store/Reducers/LogReducer'
import TaskReducer from './Store/Reducers/TaskReducer'
import StepReducer from './Store/Reducers/StepReducer'
import UserReducer from './Store/Reducers/UserReducer'

import App from './App'
import classes from './index.css'
import 'bootstrap/dist/css/bootstrap.css'

const rootReducer = combineReducers({
	com: CompanyReducer,
	con: ContactReducer,
	job: JobReducer,
	log: LogReducer,
	tsk: TaskReducer,
	stp: StepReducer,
	usr: UserReducer
})

const logger = store => {
	console.log('[Middleware] prior state', store.getState())
	return next => {
		return action => {
			console.log('[Middleware] Dispatching', action)
			const result = next(action)
			return result
		}
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App className={classes.Body} />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
