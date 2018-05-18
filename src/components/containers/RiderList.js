import RiderList from '../ui/RiderList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		cards: state.allRiders
	}
}

const Container = connect(mapStateToProps)(RiderList)

export default Container

/*
 export default () =>
 <Timer raceTime={22}></Timer>
 */