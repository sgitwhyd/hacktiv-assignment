import PropTypes from "prop-types";
import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export class PageLayout extends Component {
	static propTypes = {
		children: PropTypes.element,
	};

	render() {
		return (
			<div className="flex flex-col justify-between mt-20">
				<Navbar />
				<main className="w-full max-w-6xl flex flex-col items-center justify-center min-h-[500px] mx-auto">
					{this.props.children}
				</main>
				<Footer />
			</div>
		);
	}
}

export default PageLayout;
