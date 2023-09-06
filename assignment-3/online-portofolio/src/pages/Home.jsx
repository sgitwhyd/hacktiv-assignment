import React, { Component } from "react";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
		};
	}

	componentDidMount() {}
	render() {
		return (
			<div>
				<h1 className="text-5xl font-bold tracking-wide">Sigit Wahyudi</h1>{" "}
				<p className="text-2xl mt-3 tracking-widest">
					Software developer who focused <br /> on web development and
					javascript environments.
				</p>
			</div>
		);
	}
}

export default Home;
