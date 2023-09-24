import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.count);

	const [incrementAmount, setIncrementAmount] = useState(Number(0));

	return (
		<div>
			<h1>Functional Component count {count}</h1>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(increment())}>+</button>
			<input
				type="number"
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(Number(e.target.value))}
			/>
			<button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
				add amount
			</button>
		</div>
	);
};

export default Counter;
