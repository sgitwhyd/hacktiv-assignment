import React, { Component } from "react";
import { skills, Stacks } from "../constant";

class Skills extends Component {
	render() {
		return (
			<div className="w-full">
				<h1 className="text-4xl font-bold tracking-widest">Skills</h1>
				<hr className="my-5" />
				<div className="flex flex-wrap gap-10 mt-10">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="w-20 flex flex-col items-center justify-items-center">
							<div className="w-12">{Stacks[skill.name]}</div>
							<h1 className="mt-3 text-center">{skill.name}</h1>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Skills;
