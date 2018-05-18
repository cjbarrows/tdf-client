import React from 'react'
import RiderControl from './RiderControl'
//import '../../stylesheets/GoalProgress.scss'

const RiderList = ({ cards = [] }) => {

	const renderCard = (card, i) => {
		return (
			<RiderControl key={card.number} {...card} index={card.number} adjustSpeed={this.adjustRiderSpeed}>
			</RiderControl>
		)
	}

	return (
		<div className="rider-list">
			{cards.map(renderCard)}
		</div>
	)

}

export default RiderList