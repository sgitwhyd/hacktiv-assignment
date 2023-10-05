/* eslint-disable react/prop-types */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store as rootStore } from "../../app/store";

export const renderWithProvider = (ui, ...renderOptions) => {
	function Wrapper({ children }) {
		return <Provider store={rootStore}>{children}</Provider>;
	}

	return {
		rootStore,
		...render(ui, {
			wrapper: Wrapper,
			...renderOptions,
		}),
	};
};
