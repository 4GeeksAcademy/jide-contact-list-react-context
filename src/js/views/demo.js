import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import mikeImage from "../../img/mike.jpeg";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	fetch("https://assets.breathco.de/apis/fake/contact/agenda/{agenda_slug}")
		.then((resp) => resp.json())
		.then((data) => actions.setDemoList(data))
		.catch(e => console.error(e));

	const handleAddContact = () => {
		fetch("/apis/fake/contact/", {
			method: "POST",
			body: JSON.stringify({
				full_name: "Dave Bradley",
				email: "dave@gmail.com",
				agenda_slug: "my_super_agenda",
				address: "47568 NW 34ST, 33434 FL, USA",
				phone: "7864445566"
			}),
		})
		.then((resp) => resp.json())
		.then((data) => actions.setDemoList(data))
		.catch(e => console.error(e));
	}
		

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
							<button className="btn btn-success" onClick={() => actions.addNewListitem("FooBar", "green", "orange")}>
								Add new list item
							</button>
							<button className="btn btn-success" onClick={handleAddContact}>
								Add new contact
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>

			<div className="container">
				<div className="card mb-0 p-3">
					<div className="row g-0">
						<div className="col-12 col-sm-6 col-md-2">
							<img src={mikeImage} className="rounded-circle mx-auto img-fluid" />
						</div>
						<div className="col-12 col-sm-6 col-md-10 p-3">
							<div class="d-flex">
								<h5 className="card-title me-auto">Mike Anamendolla</h5> 
								<div className="">
									<Link to="/demo">
										<i className="fa-solid fa-pencil text-dark"></i>
									</Link>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="">
									<Link to="/modal">
										<i className="fa-solid fa-trash-can text-dark"></i>
									</Link>
								</div>
							</div>
							<p className="card-text text-secondary"><i class="fa-solid fa-location-dot"></i> &nbsp; 5842 Hillcrest Rd</p>
							<p className="card-text text-secondary"><small className="text-body-secondary"><i class="fa-solid fa-phone-flip"></i> &nbsp; (870) 288-4149</small></p>
							<p className="card-text text-secondary"><small className="text-body-secondary"><i class="fa-solid fa-envelope"></i> &nbsp; mike.ana@example.com</small></p>
						</div>
					</div>
				</div>
				<div className="card mb-0 p-3">
					<div className="row g-0">
						<div className="col-12 col-sm-6 col-md-2">
							<img src={mikeImage} className="rounded-circle mx-auto img-fluid" />
						</div>
						<div className="col-12 col-sm-6 col-md-10 p-3">
							<div class="d-flex">
								<h5 className="card-title me-auto">Mike Anamendolla</h5> 
								<div className="">
									<Link to="/demo">
										<i className="fa-solid fa-pencil text-dark"></i>
									</Link>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="">
									
									<i className="fa-solid fa-trash-can text-dark"></i>
									
								</div>
							</div>
							<p className="card-text text-secondary"><i class="fa-solid fa-location-dot"></i> &nbsp; 5842 Hillcrest Rd</p>
							<p className="card-text text-secondary"><small className="text-body-secondary"><i class="fa-solid fa-phone-flip"></i> &nbsp; (870) 288-4149</small></p>
							<p className="card-text text-secondary"><small className="text-body-secondary"><i class="fa-solid fa-envelope"></i> &nbsp; mike.ana@example.com</small></p>
						</div>
					</div>
				</div>
				<div className="card mb-0 p-3">
					<div className="row g-0">
						<div className="col-12 col-sm-6 col-md-2">
							<img src={mikeImage} className="rounded-circle mx-auto img-fluid" />
						</div>
						<div className="col-12 col-sm-6 col-md-10 p-3">
							<div class="d-flex">
								<h5 className="card-title me-auto">Mike Anamendolla</h5> 
								<div className="">
									<Link to="/demo">
										<i className="fa-solid fa-pencil text-dark"></i>
									</Link>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="">
									
									<i className="fa-solid fa-trash-can text-dark"></i>
									
								</div>
							</div>
							<p className="card-text text-secondary"><i class="fa-solid fa-location-dot"></i> &nbsp; 5842 Hillcrest Rd</p>
							<p className="card-text text-secondary"><small className="text-body-secondary"><i class="fa-solid fa-phone-flip"></i> &nbsp; (870) 288-4149</small></p>
							<p className="card-text text-secondary"><small className="text-body-secondary"><i class="fa-solid fa-envelope"></i> &nbsp; mike.ana@example.com</small></p>
						</div>
					</div>
				</div>
				<div className="card mb-0 p-3">
					<div className="row g-0">
						<div className="col-12 col-sm-6 col-md-2">
							<img src={mikeImage} className="rounded-circle mx-auto img-fluid" />
						</div>
						<div className="col-12 col-sm-6 col-md-10 p-3">
							<div class="d-flex">
								<h5 className="card-title me-auto">Mike Anamendolla</h5> 
								<div className="">
									<Link to="/demo">
										<i className="fa-solid fa-pencil text-dark"></i>
									</Link>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="">
									
									<i className="fa-solid fa-trash-can text-dark"></i>
									
								</div>
							</div>
							<p className="card-text text-secondary"><i class="fa-solid fa-location-dot"></i> &nbsp; 5842 Hillcrest Rd</p>
							<p className="card-text text-secondary"><small className="text-body-secondary"><i class="fa-solid fa-phone-flip"></i> &nbsp; (870) 288-4149</small></p>
							<p className="card-text text-secondary"><small className="text-body-secondary"><i class="fa-solid fa-envelope"></i> &nbsp; mike.ana@example.com</small></p>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
