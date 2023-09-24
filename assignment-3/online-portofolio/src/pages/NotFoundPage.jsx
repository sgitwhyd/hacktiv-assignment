import React, { Component } from "react";

class NotFoundPage extends Component {
	render() {
		return (
			<div className="flex flex-col items-center gap-5">
				<h1 className="text-8xl font-extrabold">Oops!</h1>
				<strong className="text-xl">404 - Page Not Found</strong>
				<p className="w-[500px] text-center">
					The page you are looking for might have been removed had its name
					changed or is temporarily unavailable
				</p>
			</div>
		);
	}
}

export default NotFoundPage;
