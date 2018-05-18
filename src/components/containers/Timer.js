/* eslint-disable react-in-jsx-scope */
import Timer from '../ui/Timer'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		raceTime: state.raceTime
	}
}

const Container = connect(mapStateToProps)(Timer)

export default Container

/*
export default () =>
	<Timer raceTime={22}></Timer>
*/