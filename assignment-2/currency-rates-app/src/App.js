import "./App.css";
import React from "react";
import { useFetch } from "./hooks/use-fetch";

const App = () => {
	const apikey =
		process.env.REACT_APP_CURRENCYAPIKEY || "7007dd9760884cbb93cb98e4775f451f";
	const sysmbols = "CAD,EUR,IDR,JPY,CHF,GPB";
	const baseUrl = "https://api.currencyfreaks.com";
	const url = `${baseUrl}/v2.0/rates/latest?apikey=${apikey}&symbols=${sysmbols}`;

	const { isLoading, data, error, isError } = useFetch(url);

	const calculateBuyRate = (value) => {
		const sanitizeValue = Number(value);
		const rates = 0.5 * sanitizeValue;
		return (sanitizeValue + rates).toFixed(4);
	};

	const calculateSellRate = (value) => {
		const sanitizeValue = Number(value);
		const rates = 0.5 * sanitizeValue;
		return (sanitizeValue - rates).toFixed(4);
	};

	const tableHeader = ["Currency", "We Buy", "Exchange Rate", "We Sell"];

	if (isLoading) {
		return <div className="app-container">Loading</div>;
	}

	if (isError && !isLoading) {
		return <div className="app-container">{error}</div>;
	}

	return (
		<div className="app-container">
			<table>
				<thead className="table-header">
					<tr>
						{tableHeader.map((item) => (
							<td key={item}>{item}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{Object.entries(data?.rates).map(([key, value]) => (
						<tr key={value}>
							<td>{key}</td>
							<td>{calculateBuyRate(value)}</td>
							<td>{Number(value).toFixed(6)}</td>
							<td>{calculateSellRate(value)}</td>
						</tr>
					))}
				</tbody>
			</table>

			<p>Rates are based from 1 {data.base}</p>
			<p>
				This application uses API from{" "}
				<a target="_blank" rel="noreferrer" href={baseUrl}>
					{baseUrl}
				</a>
			</p>
		</div>
	);
};

export default App;
