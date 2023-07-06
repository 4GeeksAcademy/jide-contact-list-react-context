import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />
				<div className="container">
					<h1 className="text-center">Add a new contact</h1>
					<div className="mb-3">
						<label for="formGroupExampleInput" className="form-label">Full Name</label>
						<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name"/>
					</div>
					<div className="mb-3">
						<label for="formGroupExampleInput2" className="form-label">Email</label>
						<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email"/>
					</div>
					<div className="mb-3">
						<label for="formGroupExampleInput" className="form-label">Phone</label>
						<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter phone"/>
					</div>
					<div className="mb-3">
						<label for="formGroupExampleInput2" className="form-label">Address</label>
						<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter address"/>
					</div>
					<div className="save">
						<button type="submit" className="btn btn-primary w-100">save</button>
					</div>
					<Link to="/">or get back to contacts</Link>
				</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
