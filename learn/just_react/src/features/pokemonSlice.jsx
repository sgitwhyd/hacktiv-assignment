import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	pokemons: [],
	isLoading: false,
	next: "",
	previous: "",
	count: 0,
};

const pokemonSlice = createSlice({
	name: "pokemon",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchPokemon.fulfilled, (state, action) => {
				const { results, next, previous, count } = action.payload;
				state.next = next;
				state.previous = previous;
				state.pokemons = results;
				state.isLoading = false;
				state.count = count;
			})
			.addCase(fetchPokemon.pending, (state) => {
				state.isLoading = true;
			});
	},
});

export default pokemonSlice.reducer;

export const fetchPokemon = createAsyncThunk("pokemon/getall", async (url) => {
	const response = await fetch(url);
	return await response.json();
});
