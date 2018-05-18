import React from 'react'
import { Component } from 'react'

import Icon from 'react-icons-kit';
import { circleTop, circleBottom, skipForward } from 'react-icons-kit/iconic';

class RiderView extends Component {
	render () {
		return (
			<div className="rider centerPoint"
			     ref={this.props.riderRefCallback}>
				<img id="rider1" src="./images/pixel-rider.png" alt=""/>
				{this.props.active ? (
					<div>
						<button
							onClick={() => this.props.moveLeft(this.props.number)}
							className="controller-button"
							id="moveLeft">
							<Icon icon={circleTop}/>
						</button>
						<button
							onClick={() => this.props.moveRight(this.props.number)}
							className="controller-button"
							id="moveRight">
							<Icon icon={circleBottom}/>
						</button>
						<button
							onClick={() => this.props.goFaster(this.props.number)}
							className="controller-button"
							id="goFaster">
							<Icon icon={skipForward}/>
						</button>
					</div>
				) : null}
				<span className="riderName">{this.props.name}</span>
			</div>
		)
	}
}

export default RiderView
