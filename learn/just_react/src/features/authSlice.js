import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoginPending: false,
	isLoginSuccess: false,
	errorMessage: "",
	user: {},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers(builder) {
		builder
			.addCase(signIn.pending, (state) => {
				state.isLoginPending = true;
			})
			.addCase(signIn.rejected, (state, action) => {
				(state.isLoginPending = false), (state.isLoginSuccess = false);
				state.errorMessage = action.error.message;
			})
			.addCase(signIn.fulfilled, (state, action) => {
				const { email } = action.payload;
				(state.isLoginPending = false),
					(state.isLoginSuccess = true),
					(state.errorMessage = ""),
					(state.user = {
						email,
					});
			});
	},
});

const callLoginApi = (email, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email === "testing@developer.com" && password === "123456") {
				resolve({ email });
			} else {
				reject("Invalid Email and password");
			}
		}, 2000);
	});
};

export const signIn = createAsyncThunk(
	"auth/signIn",
	async ({ email, password }) => {
		// eslint-disable-next-line no-useless-catch
		try {
			const response = await callLoginApi(email, password);
			return {
				email: response.email,
			};
		} catch (error) {
			throw error;
		}
	}
);

export default authSlice.reducer;
