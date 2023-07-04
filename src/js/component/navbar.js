import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container"> 
			<nav className="navbar navbar-white bg-white mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"></span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-success">Add new contact</button>
					</Link>
				</div>
			</nav>	
		</div>
	);
};
