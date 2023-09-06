import React, { Component } from "react";
import { awards } from "../constant";
import { BsFillTrophyFill } from "react-icons/bs";

class Awards extends Component {
	render() {
		return (
			<div className="max-w-3xl">
				<h1 className="text-4xl font-bold tracking-widest">Awards</h1>
				<hr className="my-5" />
				<ul className="ml-2 mt-5 md:ml-6">
					{awards.map((item, index) => (
						<li className="flex items-center gap-3 md:gap-5" key={index}>
							<BsFillTrophyFill className="text-3xl" />
							<h2 className="text-xs md:text-lg">{item.title}</h2>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Awards;
