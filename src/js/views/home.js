import React from "react";
import mikeImage from "../../img/mike.jpeg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
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
);
