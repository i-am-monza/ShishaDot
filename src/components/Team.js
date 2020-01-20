import React, { Component } from 'react';
//Import images
import Member01 from './../assets/images/author.jpg';

// Team members component
export class Team extends Component {

    render() {
        return (
            <section className="team container-fluid">
				<div className="row">
					<div className="col-12">
						<article className="mx-auto">
							<h3 id="by">ShishaDot by</h3>
							<div className="about">
								{/* eslint-disable-next-line */ }
								<img id="aboutImage" src={Member01} alt="Team Member" className="d-flex mx-auto rounded-circle"/>
								<div className="description container">
									<div className="row">
										<div className="col col-xs-12">
											<div className="row">
												<div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 p-1">
													<h3>This entire dialog window is for rendering information about Vusumzi Qashu.</h3>
													<p>
														So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content.
														<br/>
														So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content.
														So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content.
													</p>
												</div>
												<div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 p-1">
													<h3>This entire dialog window is for rendering information about Vusumzi Qashu.</h3>
													<p>
														So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content.
														<br/>
														So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content.
														So we are designing the UI for Ta Mavus theoretical single-page site. Forgot the keyboard shortcut to lorems auto-fill so I'm cumming up with content.
													</p>
												</div>
											</div>
										</div>
									</div>									
								</div>
							</div>
							<div className="contact mx-auto my-2">
								<ul className="d-flex align-items-center justify-content-around">
									<h3>Vusumzi Qashu</h3>
									<li>
										{/* eslint-disable-next-line */}
										<a href="#"><i className="fa fa-facebook mx-2"><span>@vqushu</span></i></a>
									</li>
									<li>
										{/* eslint-disable-next-line */}
										<a href="#"><i className="fa fa-twitter mx-2"><span>@MrQushu</span></i></a>
									</li>
									<li>
										{/* eslint-disable-next-line */}
										<a href="#"><i className="fa fa-instagram mx-2"><span>@vusumziqushu</span></i></a>
									</li>
									<li>
										{/* eslint-disable-next-line */}
										<a href="#"><i className="fa fa-whatsapp mx-2"><span>@0797652896</span></i></a>
									</li>
								</ul>
							</div>
							<div className="d-flex justify-content-center">
								<button id="showDescr" className="mb-5">Show Me</button>
							</div>
						</article>
					</div>
				</div>
			</section>
        );
    }
}