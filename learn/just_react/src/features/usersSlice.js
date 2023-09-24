import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	entities: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/users"
	);

	return response.data;
});

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.entities = action.payload;
		});
	},
});

export default usersSlice.reducer;
