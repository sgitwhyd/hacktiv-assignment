import React, { Component } from "react";
import { socials } from "../constant";
import { Link } from "react-router-dom";

export class About extends Component {
	render() {
		return (
			<div className="w-3/4">
				<p className="text-xl">
					Hello My name is <span className="font-bold">Sigit Wahyudi</span> an
					informatics engineering student, I am interested in web-based
					application development, active in campus activities, and highly
					motivated to learn new technologies. My focus is on web application
					and mobile development using{" "}
					<span className="font-bold">JavaScript</span> and{" "}
					<span className="font-bold">TypeScript</span>. I aim to contribute
					significantly to this industry with my passion for continuous
					learning.
				</p>
				<section className="mt-10">
					<h1 className="text-xl font-bold sm:text-3xl">Get In Touch</h1>
					<hr className="my-5" />
					<ul className="list-disc pl-6 mt-5 text-lg">
						{Object.entries(socials).map(([key, value]) => (
							<li key={key}>
								<span className="capitalize">{key}</span> -{" "}
								<Link
									to={value}
									target="_blank"
									rel="noreferrer"
									className="hover:underline hover:text-cyan-500">
									{value}
								</Link>
							</li>
						))}
					</ul>
				</section>
			</div>
		);
	}
}

export default About;
