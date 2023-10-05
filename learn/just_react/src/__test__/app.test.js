import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProvider } from "./utlis/test-utils";
import App from "../App";

describe("home page", async () => {
	test("just test", () => {
		renderWithProvider(<App />);

		const welcomeText = screen.getByTestId("name");

		expect(welcomeText).toBeVisible();
	});
});
