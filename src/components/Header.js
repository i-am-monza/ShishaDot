import React, { Component } from 'react';

// Header component
export class Header extends Component {

    render() {
        return (
            <section className="header container-fluid" style={{position: "fixed"}}>
				<div className="row justify-content-around align-items-center bg-light">
					<div className="social-links col-xs-4">
						<ul>
							{/* eslint-disable-next-line */}
							<a href="#">
								<i className="fa fa-facebook mx-2"></i>
							</a>
							{/* eslint-disable-next-line */}
							<a href="#">
								<i className="fa fa-twitter mx-2"></i>
							</a>
							{/* eslint-disable-next-line */}
							<a href="#">
								<i className="fa fa-instagram mx-2"></i>
							</a>
						</ul>
					</div>
					<div className="brandName col-xs-4">
						<h1 className="mx-1 px-1">ShishaDot</h1>
					</div>
					<div className="call col-xs-4 d-flex justify-content-end align-items-center">
						<a href="tel:+27797652896">
							<i className="fa fa-phone p-1 mr-2"> +277 9765 2896</i>
						</a>
					</div>
				</div>
			</section>
        );
    }
}