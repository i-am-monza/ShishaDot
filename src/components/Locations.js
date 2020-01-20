import React, { Component } from 'react';

// Locations component
export class Locations extends Component {

    render() {
        return (
            <section className="locations container mb-5 pt-2 pb-5 bg-light">
				<div className="row">
					<span className="w-100 mx-auto p-1 d-flex justify-content-center">
						<h3 id="withHeader">ShishaDot with</h3>
					</span>
					<div className="col-sm-12 col-lg-6">
						<div className="row mb-1">
							{/* image background imported in css */}
							<div className="estratweni-image col-6">
							</div>
							<div className="col-6">
								<h4 className="withSubHeader">Estratweni</h4>
								<p className="withParagraph">
									Description of each location where you can use ShishaDot products... So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content. So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content.
								</p>
								<div className="more-tag">
									More about us 
									{/* eslint-disable-next-line */}
									<a href="#" className="mx-1 px-1"><i className="fa fa-facebook"></i></a>
									{/* eslint-disable-next-line */}
									<a href="#" className="mx-1 px-1"><i className="fa fa-twitter"></i></a>
									{/* eslint-disable-next-line */}
									<a href="#" className="mx-1 px-1"><i className="fa fa-instagram"></i></a>
								</div>
							</div>							
						</div>
					</div>
					<div className="col-sm-12 col-lg-6">
						<div className="row mb-1">
							<div className="col-6">
								<h4 className="withSubHeader">Kefu</h4>
								<p className="withParagraph">
									Description of each location where you can use ShishaDot products... So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content. So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content.
								</p>
								<div className="more-tag">
									More about us 
										{/* eslint-disable-next-line */ }
									<a href="#" className="mx-1 px-1"><i className="fa fa-facebook"></i></a>
										{/* eslint-disable-next-line */ }
									<a href="#" className="mx-1 px-1"><i className="fa fa-twitter"></i></a>
										{/* eslint-disable-next-line */ }
									<a href="#" className="mx-1 px-1"><i className="fa fa-instagram"></i></a>
								</div>
							</div>
							{/* image background imported in css */}
							<div className="lesapong-image col-6">
							</div>							
						</div>
					</div>
				</div>
			</section>
        );
    }
}