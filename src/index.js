import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './components/ui/App'

//import registerServiceWorker from './registerServiceWorker'

//import C from './constants'
//import appSingleReducer from './store/reducers'

//import { createStore, applyMiddleware } from 'redux'

//const store = createStore(appSingleReducer, initialState)

window.React = React

render(
	<App/>,
	document.getElementById('root')
)

/*
 <Provider store={store}>
 <App />
 </Provider>
 */

/*
 store.dispatch({
 type: C.ADD_RIDER,
 payload: {
 number: 4,
 name: "Dylan Groenewegen"
 }
 })
 */

/*

 const store = storeFactory({ speed: 30 })

 const saveState = () => {
 const state = JSON.stringify(store.getState())
 console.log(`state = ${state}`)
 }

 store.subscribe(saveState)

 registerServiceWorker();

 store.dispatch({
 type: C.GO_FASTER
 })
 */