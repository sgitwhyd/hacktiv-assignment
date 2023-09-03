import { useState, useEffect } from "react";

export const useFetch = (url, ...rest) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState(null);

	const getData = async () => {
		try {
			const response = await fetch(url, ...rest);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const result = await response.json();
			setData(result);
		} catch (error) {
			setIsError(true);
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, [url]);

	return {
		isLoading,
		isError,
		error,
		data,
	};
};
