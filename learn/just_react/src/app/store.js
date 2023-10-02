import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import authReducer from "../features/authSlice";
import pokemonReducer from "../features/pokemonSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		pokemon: pokemonReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
