import appSingleReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import * as asyncInitialState from 'redux-async-initial-state'

const consoleMessages = (socket) => (store) => (next) => (action) => {
	console.log(socket)
	console.log(store)
	let result

	// NOTE: add code before or after calling next() to intercept the action pipeline
	//socket.emit('test', 'bob')

	console.log(`middleware in action`, action, ` with socket `, socket)

	// send action to server
	socket.emit('action', action)

	result = next(action)

	return result
}

const reducer = asyncInitialState.outerReducer(appSingleReducer)

export default (initialState = {}, dataPromise, socket) => {
	if (dataPromise) {
		// using async initial state
		return createStore(
			reducer,
			compose(applyMiddleware(asyncInitialState.middleware(dataPromise)))
		)
	} else {
		// using multiple initial states
		//return createStore(appSingleReducer, initialState)

		return applyMiddleware(thunk, consoleMessages(socket))(createStore)(appSingleReducer, initialState)
	}
}

/*
 BASIC:
 export default (initialState = {}) => {
 return createStore(appSingleReducer, initialState)

 WITH MIDDLEWARE THUNKS:
 export default (initialState = {}) => {
 return applyMiddleware(thunk, consoleMessages)(createStore)(appSingleReducer, initialState)
 }
 */