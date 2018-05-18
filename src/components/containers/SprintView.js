/* eslint-disable react-in-jsx-scope */
import SprintView from '../ui/SprintView'
import { connect } from 'react-redux'

import { riderLeft, riderRight, riderFaster } from '../../actions/actions'

const mapStateToProps = (state) => {
	return {
		riders: state.allRiders,
		positions: state.positions,
		activeRider: state.activeRider
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		riderLeft (number) {
			dispatch(
				riderLeft(number)
			)
		},
		riderRight (number) {
			dispatch(
				riderRight(number)
			)
		},
		riderFaster (number) {
			dispatch(
				riderFaster(number)
			)
		}
	}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(SprintView)

export default Container
