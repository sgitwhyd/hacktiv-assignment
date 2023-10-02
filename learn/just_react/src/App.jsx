import AuthLoginForm from "./features/AuthLoginForm";
import { useEffect, useState } from "react";
import { fetchPokemon } from "./features/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [globalCount, setGlobalCount] = useState(1);
	const [paginateNumber, setPaginateNumber] = useState(5);
	const dispatch = useDispatch();
	const { previous, next, pokemons, count } = useSelector(
		(state) => state.pokemon
	);

	const totalPage = Math.ceil(count / 20);

	useEffect(() => {
		dispatch(fetchPokemon("https://pokeapi.co/api/v2/pokemon/"));
	}, []);

	const handleNext = () => {
		dispatch(fetchPokemon(next));
		if (currentPage === paginateNumber) {
			setPaginateNumber((prev) => prev + 1);
		}

		setCurrentPage((prev) => prev + 1);
	};

	const handlePrevious = () => {
		dispatch(fetchPokemon(previous));
	};

	return (
		<div>
			<table border="1">
				<thead>
					<tr>
						<td>No</td>
						<td>Name</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{pokemons.map((poke, index) => {
						return (
							<tr key={poke.name}>
								<td>{globalCount + index}</td>
								<td>{poke.name}</td>
								<td>
									<button>see more</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<button onClick={handlePrevious} disabled={!previous ? true : false}>
				previous
			</button>
			{Array.from(
				{
					length: paginateNumber,
				},
				(_, index) => (
					<button
						key={index}
						onClick={() => {}}
						className={currentPage === index + 1 ? "active" : ""}>
						{index + 1}
					</button>
				)
			)}
			<button onClick={handleNext}>next</button>
		</div>
	);
};

export default App;
