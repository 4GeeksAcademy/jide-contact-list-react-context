import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
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
	);
};
