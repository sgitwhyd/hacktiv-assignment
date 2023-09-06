import React, { Component } from "react";
import { interests } from "../constant";

class Interest extends Component {
	render() {
		return (
			<div className="w-full">
				<h1 className="text-4xl font-bold tracking-widest">Interests</h1>
				<hr className="my-5" />
				<ul className="flex gap-10">
					{interests.map((item, index) => (
						<li
							className="flex flex-col items-center gap-3 md:gap-5"
							key={index}>
							<div className="w-12">{item.icon}</div>
							<h2 className="text-xs md:text-lg">{item.name}</h2>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Interest;
