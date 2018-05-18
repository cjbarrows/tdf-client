/*eslint-disable react/react-in-jsx-scope*/
import PropTypes from 'prop-types'
//import '../../stylesheets/GoalProgress.scss'

const Timer = ( { raceTime = 10 } ) => {

	return (
		<div className="timer">
			<span>{raceTime}</span>
			<span> seconds or so</span>
		</div>
	)

}

Timer.propTypes = {
	raceTime: PropTypes.number.isRequired
}

export default Timer