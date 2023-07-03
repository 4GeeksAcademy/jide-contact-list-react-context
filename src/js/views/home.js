import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		<div className="card mb-3 p-3">
			<div className="row g-0">
				<div className="col-md-4">
				 	<img src="https://media.istockphoto.com/id/462112713/photo/attractive-man-dressed-casually-in-studio-isolated-on-white.jpg?s=612x612&w=0&k=20&c=juH2ugh_zh5iRuplniYsfrY3dT4WnY2yIlmxwAsQ3P0=" className="img-fluid rounded-circle border border-info" alt="" />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">Mike Anamendolla</h5>
						<p className="card-text"><i class="fa-solid fa-location-dot"></i> &nbsp; 5842 Hillcrest Rd</p>
						<p className="card-text"><small className="text-body-secondary"><i class="fa-solid fa-phone-flip"></i> &nbsp; (870) 288-4149</small></p>
						<p className="card-text"><small className="text-body-secondary"><i class="fa-solid fa-envelope"></i> &nbsp; mike.ana@example.com</small></p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
