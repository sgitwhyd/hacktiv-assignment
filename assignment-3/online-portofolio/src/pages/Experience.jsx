import React, { Component } from "react";
import { experiences } from "../constant";

class Experience extends Component {
	render() {
		return (
			<div className="w-full">
				<h1 className="text-4xl font-bold tracking-widest">Experiences</h1>
				<hr className="my-5" />
				<div className="relative mt-5 md:mt-8 w-full">
					<ul>
						{experiences.map((experience, index) => (
							<li className="mb-5" key={index}>
								<div className="flex ">
									<div className="ml-10 md:ml-4">
										<h2 className="text-xl font-bold md:text-2xl">
											{experience.title}
										</h2>
										<p className="text-sm">{experience.type}</p>
										<p className="text-sm">{experience.date}</p>
										<p className="mt-4 text-xs md:text-base">
											{experience.summary}
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default Experience;
