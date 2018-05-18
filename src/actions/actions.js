import C from './../constants'

export const setActiveRider = num => {
	return {
		type: C.SET_ACTIVE_RIDER,
		payload: num
	}
}

export const allRiders = roster => {
	return {
		type: C.ALL_RIDERS,
		payload: roster
	}
}

export const allPositions = positions => {
	return {
		type: C.ALL_POSITIONS,
		payload: positions
	}
}

export const setupTeams = teams => ({ type: C.ALL_TEAMS, payload: teams })

export const addRider = (props) => {

	// NOTE: App logic goes in here ...

	return {
		type: C.ADD_RIDER,
		payload: {...props}
	}
}

export const riderLeft = (number) => {
	return {
		type: C.RIDER_LEFT,
		payload: number
	}
}

export const riderRight = (number) => {
	return {
		type: C.RIDER_RIGHT,
		payload: number
	}
}

export const riderFaster = (number) => ({
	type: C.RIDER_FASTER,
	payload: number
})

export const setTime = (tick) => {
	return {
		type: C.SET_TIME,
		payload: tick
	}
}

/*
export const setTime = (tick) => (dispatch, getState) => {
	return {
		type: C.SET_TIME,
		payload: tick
	}
}
*/

// NOTE: this is a thunk (async dispatch)
export const randomTime = () => (dispatch, getState) => {

	// NOTE: thunks allow you to control when and if additional (or any) dispatches
	//   are called, based on the state at the time.
	// They can also be used for asynchronous calls, like isomorphic-fetch, etc.

	dispatch({
		type: C.SET_TIME,
		payload: Math.floor(Math.random() * 500)
	})

	setTimeout(() => {
		/*
		 dispatch({
		 type: C.SET_TIME,
		 payload: 100
		 })
		 */
		dispatch(
			addRider({
				number: 4,
				name: "Dylan Groenewegen",
				lane: 1,
				distance: 10092
			})
		)
	}, 1500)
}