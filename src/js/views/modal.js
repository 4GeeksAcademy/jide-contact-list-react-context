import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Modal = () => {
    const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Are you sure?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>If you delete this thing the entire universe will go down!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                            <button type="button" className="btn btn-primary">Yes baby!</button>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};