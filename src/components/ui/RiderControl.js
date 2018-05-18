import React, { Component } from 'react'
import FaPlus from '../../../node_modules/react-icons/lib/fa/plus'
import FaMinus from '../../../node_modules/react-icons/lib/fa/minus'
import '../../stylesheets/RiderControl.css'

class RiderControl extends Component {
	constructor (props) {
		super(props)

		this.state = {
		}

		this.onSpeedUp = this.onSpeedUp.bind(this)
		this.onSlowDown = this.onSlowDown.bind(this)
	}

	render () {
		console.log("re-render")

		let last_name = this.props.name.split(" ")[1].toLowerCase()

		return (
			<div className="rider-card">
				<img src={"./images/" + last_name + ".png"} alt=""/>
				<span className="riderName">{this.props.name}</span>
				<div className="speedControls">
					<button id="add-speed" onClick={this.onSpeedUp}><FaPlus></FaPlus></button>
					<button id="subtract-speed" onClick={this.onSlowDown}><FaMinus></FaMinus></button>
				</div>
			</div>
		)
	}

	onSpeedUp () {
		this.props.adjustSpeed(5, this.props.index)
	}

	onSlowDown () {
		this.props.adjustSpeed(-5, this.props.index)
	}

	shouldComponentUpdate (nextProps, nextState) {
		//return this.props.children[2] !== nextProps.children[2] || this.state !== nextState
		return this.props.name !== nextProps.name || this.state !== nextState
	}
}

export default RiderControl