// NOTES:

// Things to NEVER do inside a reducer:

// Mutate its arguments;
//
// Perform side effects like API calls and routing transitions;
//
// Call non-pure functions, e.g. Date.now() or Math.random().

// Stated also as:
//
//  It does not make outside network or database calls.
//	Its return value depends solely on the values of its parameters.
//	Its arguments should be considered "immutable", meaning they should not be changed.
//	Calling a pure function with the same set of arguments will always return the same value.

import C from '../constants'
import { combineReducers } from 'redux'
import { Map } from 'immutable';

export const raceTime = (state = 230, action) => (
	action.type === C.SET_TIME ? parseInt(action.payload, 0) : state
)

export const newRider = (state = null, action) => (
	action.type === C.ADD_RIDER ? action.payload : state
)

export const activeRider = (state = null, action) => (
	action.type === C.SET_ACTIVE_RIDER ? action.payload : state
)

export const positions = (state = [], action) => {
	switch (action.type) {
		case C.ALL_POSITIONS:
		{
			return action.payload
		}
		case C.RIDER_LEFT:
		{
			let number = action.payload
			let copy = [...state]
			copy.forEach((rider) => {
				if (rider.number === number) {
					rider.lane--
				}
			})
			return copy
		}
		case C.RIDER_RIGHT:
		{
			let number = action.payload
			let copy = [...state]
			copy.forEach((rider) => {
				if (rider.number === number) {
					rider.lane++
				}
			})
			return copy
		}
		case C.RIDER_FASTER:
		{
			let number = action.payload
			let copy = [...state]
			copy.forEach((rider) => {
				if (rider.number === number) {
					rider.distance += .5
				}
			})
			return copy
		}
		default:
			return state
	}
}

export const allRiders = (state = [], action) => {
	switch (action.type) {
		case C.ADD_RIDER:
			// NOTE: you can check for duplicate records, etc. here
			return [
				...state,
				newRider(null, action)
			]
		case C.ALL_RIDERS:
			return action.payload
		default:
			return state
	}
}

export const course = (state = [], action) => {
	return state
}

export const teams = (state = [], action) => {
	switch (action.type) {
		case C.ALL_TEAMS:
			return action.payload
		default:
			return state
	}
}

export const results = (state = [], action) => {
	return state
}

// from the teropa blog on "full stack redux":

function setState (state, newState) {
	return state.merge(newState);
}

export default function (state = Map(), action) {
	switch (action.type) {
		case 'SET_STATE':
			return setState(state, action.state)
		default:
			return state;
	}
}

// NOTE: combineReducers can be nested, like:

/*
 const resortNames = combineReducers({
 fetching,
 suggestions
 })

 const singleReducer = combineReducers({
 allSkiDays,
 goal,
 errors,
 resortNames
 })
 */

/*
 export default combineReducers({
 allRiders,
 positions,
 activeRider,
 teams,
 course,
 raceTime,
 results
 })
 */