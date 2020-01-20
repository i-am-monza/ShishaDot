import React, { Component } from 'react';
// Import images
import Image01 from './../assets/images/extras-01.jpg';
import Image02 from './../assets/images/extras-02.jpg';

export class Extras extends Component {

    render() {
        return (
            <section className="extras container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 p-1 d-flex justify-content-center align-items-center">
						{/* eslint-disable-next-line */}
						<img src={Image01} alt="Extras 01" className="mx-2 img-thumbnail"/>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4  d-flex justify-content-center align-items-center">
						<ul>
							<li>
								<strong>R 60 for a session, using our product + 1 re-fill request included</strong>
							</li>
							<li>
								<strong>R 60 for a session, using our product + 1 re-fill request included</strong>
							</li>
							<li>
								<strong>R 60 for a session, using our product + 1 re-fill request included</strong>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 p-1  d-flex justify-content-center align-items-center">
						{/* eslint-disable-next-line */}
						<img src={Image02} alt="Extras 01" className="mx-2 img-thumbnail align-self-center"/>
					</div>
				</div>
			</section>
        );
    }
}