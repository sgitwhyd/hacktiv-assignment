import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { routeList } from "../constant";

class Navbar extends Component {
	render() {
		return (
			<header className="max-w-[1244px] mx-auto flex justify-center w-full">
				<nav className="bg-blue-500 mx-auto px-16 backdrop-blur-sm  fixed top-0  py-4 rounded-full mt-3 hover:shadow-xl bg-opacity-5 w-fit">
					<ul className="flex justify-center space-x-10 relative">
						{routeList.map((link) => (
							<li key={link.name} className="relative">
								<NavLink
									ref={this.linkRef}
									to={link.url}
									id={link.name}
									style={({ isActive }) => ({
										color: isActive ? "cyan" : "white",
									})}
									className={clsx("z-10 transition-colors font-semibold")}>
									{link.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</header>
		);
	}
}

export default Navbar;
