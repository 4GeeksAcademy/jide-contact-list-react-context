import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		<div className="card mb-3" style={{"max-width": "540px;"}}>
			<div className="row g-0">
				<div className="col-md-4">
				 	<img src="https://media.istockphoto.com/id/462112713/photo/attractive-man-dressed-casually-in-studio-isolated-on-white.jpg?s=612x612&w=0&k=20&c=juH2ugh_zh5iRuplniYsfrY3dT4WnY2yIlmxwAsQ3P0=" className="img-fluid rounded-circle" alt="" />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
