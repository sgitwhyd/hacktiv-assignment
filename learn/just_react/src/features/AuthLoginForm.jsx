import { useState } from "react";
import { signIn } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const AuthLoginForm = () => {
	const [loginPayload, setLoginPayload] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const { errorMessage, isLoginPending, isLoginSuccess, user } = authState;

	const onChange = (event) => {
		const { name, value } = event.target;

		setLoginPayload({
			...loginPayload,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(
			signIn({
				email: loginPayload.email,
				password: loginPayload.password,
			})
		);
		setLoginPayload({
			email: "",
			password: "",
		});
	};

	return (
		<div>
			Login {isLoginSuccess && <div className="">Welcome, {user.email}</div>}
			<form onSubmit={handleSubmit}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						marginBottom: "20px",
					}}>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						value={loginPayload.email}
						onChange={onChange}
					/>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						marginBottom: "20px",
					}}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						value={loginPayload.password}
						name="password"
						onChange={onChange}
					/>
				</div>
				<button type="submit">{isLoginPending ? "Loading" : "Sign In"}</button>
			</form>
			{errorMessage && <div className="">{errorMessage}</div>}
		</div>
	);
};

export default AuthLoginForm;
