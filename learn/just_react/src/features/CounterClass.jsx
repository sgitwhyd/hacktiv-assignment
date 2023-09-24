import { Component } from "react";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { connect } from "react-redux";
import propTypes from "prop-types";

class CounterClass extends Component {
	state = {
		incrementAmount: 0,
	};

	setIncrementAmount = (value) => {
		this.setState({
			incrementAmount: Number(value) || 0,
		});
	};

	render() {
		return (
			<div>
				<h1>Class Component count {this.props.localCount}</h1>
				<button onClick={() => this.props.dispatch(decrement())}>-</button>
				<button onClick={() => this.props.dispatch(increment())}>+</button>
				<input
					type="number"
					value={this.state.incrementAmount}
					onChange={(e) => this.setIncrementAmount(e.target.value)}
				/>
				<button
					onClick={() =>
						this.props.dispatch(incrementByAmount(this.state.incrementAmount))
					}>
					add amount
				</button>
			</div>
		);
	}
}

CounterClass.propTypes = {
	localCount: propTypes.number,
	dispatch: propTypes.func,
};

const mapStateToProps = (state) => ({
	localCount: state.counter.count,
});

export default connect(mapStateToProps)(CounterClass);
