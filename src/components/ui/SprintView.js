import React, { Component } from 'react'
import PropTypes from 'prop-types'

import $ from 'jquery'

import RiderView from './RiderView'

import '../../stylesheets/SprintView.css'

window.jquery = $

/*
 const SprintView = ({ riders, activeRider }) => {
 console.log(`riders are ${JSON.stringify(riders)}`)
 console.log(`Active Rider is ${activeRider}`)
 return (
 <div>Hi there</div>
 )
 }
 */

class SprintView extends Component {
	constructor (props) {
		super(props)

		this.moveRiderLeft = this.moveRiderLeft.bind(this)
		this.moveRiderRight = this.moveRiderRight.bind(this)
		this.moveRiderFaster = this.moveRiderFaster.bind(this)

		this.riderElements = {}

		this.sprintViewDiv = React.createRef()
	}

	getActiveRiderPosition () {
		if (this.props.positions) {
			let active = this.props.positions.filter(
				(rider, index) => parseInt(rider.number, 0) === parseInt(this.props.activeRider, 0))
			return active.length ? active[0] : null
		} else {
			return null
		}
	}

	computeViewportCenters () {
		let div = $(this.sprintViewDiv.current)

		this.viewCenterX = div.width() * .5
		this.viewCenterY = div.height() * .5
	}

	reposition () {
		let activeRiderPosition = this.getActiveRiderPosition()
		if (activeRiderPosition) {
			let centerDistance = activeRiderPosition.distance

			this.computeViewportCenters()

			this.props.positions.map((rider, index) => {
				let scaleX = 40, scaleY = 40
				let offsetX = this.viewCenterX + scaleX * (rider.distance - centerDistance)
				let offsetY = this.viewCenterY + (rider.lane * scaleY)
				$(this.riderElements[rider.number]).css({
					left: offsetX,
					top: offsetY
				})
				return rider
			})
		}
	}

	componentDidMount () {
		this.reposition()
	}

	componentDidUpdate () {
		console.log(`did update ${this.props.riders.length}`)

		this.reposition()
	}

	getRiderInfo (num) {
		let entry = this.props.riders.filter((rider, index) =>
			rider.number === num
		)

		if (entry)
			return entry[0]
	}

	render () {
		let riders = []

		if (this.props.positions)
			riders = this.props.positions.sort((a, b) => a.lane - b.lane)

		return (
			<div className="sprint-view" ref={this.sprintViewDiv}>
				{riders.map((rider, index) => {
						let { name } = this.getRiderInfo(rider.number)

						return (
							<RiderView riderRefCallback={el => this.riderElements[rider.number] = el}
							           key={rider.number}
							           name={name}
							           number={rider.number}
							           lane={rider.lane}
							           moveLeft={this.moveRiderLeft}
							           moveRight={this.moveRiderRight}
							           goFaster={this.moveRiderFaster}
							           active={parseInt(this.props.activeRider, 0)===parseInt(rider.number, 0)}
							/>
						)
					}
				)}
			</div>
		)
	}

	moveRiderLeft (number) {
		/*
		 var riders = [
		 ...this.props.riders
		 ]

		 riders.forEach((rider, index) => {
		 if (rider.number === number) {
		 rider.lane--;
		 }
		 })

		 this.setState({ riders })
		 */
		this.props.riderLeft(number)
	}

	moveRiderRight (number) {
		this.props.riderRight(number)
	}

	moveRiderFaster (number) {
		this.props.riderFaster(number)
	}
}

SprintView.propTypes = {
	activeRider: PropTypes.number,
	riders: PropTypes.array
}

export default SprintView