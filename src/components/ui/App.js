import React from 'react'
import { Provider } from 'react-redux'
import io from 'socket.io-client'

import myStoreFactoryWithMiddleware from '../../store'

import Main from './Main'

import './../../App.css'

import { setTime, allRiders, allPositions, setupTeams, setActiveRider } from '../../actions/actions.js'

/*
 import expect from 'expect'

 expect(store.getState().allRiders.length)
 .toEqual(4)
 */

// connect to Node.js Express game server
const socket = io("http://localhost:3001")
socket.on("tick", function (msg) {
	store.dispatch(
		setTime(msg)
	)
})

const OPTIONS = {
	"useReduxAsyncInitialState": false,
	"useMultipleInitialReducers": true
}

let store

if (OPTIONS.useReduxAsyncInitialState) {
	const dataPromise = () => {
		return new Promise(resolve => {
			socket.on("state", data => {
				console.log(`got data from server (${JSON.stringify(data).length})`)
				resolve(data)
			})
		})
	}

	store = myStoreFactoryWithMiddleware({}, dataPromise)
} else if (OPTIONS.useMultipleInitialReducers) {
	store = myStoreFactoryWithMiddleware({}, null, socket)

	socket.on("state_riders", riders => {
		store.dispatch(allRiders(riders))
	})

	socket.on("state_positions", positions => {
		store.dispatch(allPositions(positions))
	})

	socket.on("state_teams", teams => {
		store.dispatch(setupTeams(teams))
	})
}


window.store = store

/*
store.subscribe(() => {
	console.log(`new state:
`, store.getState())
})
*/

// TODO: where should this rider number come from: player info?
store.dispatch(
	setActiveRider(1)
)

/*
 store.dispatch(
 randomTime()
 )
 */

/*
 class AppNonRedux extends Component {
 constructor (props) {
 super(props)

 this.state = initialState
 }

 render () {
 return (
 <div>
 <Main {...this.state} />
 </div>
 )
 }
 }
 */

const App = () => (
	<Provider store={store}>
		<Main/>
	</Provider>
)

export default App
