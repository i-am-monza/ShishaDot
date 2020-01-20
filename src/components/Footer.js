	import React, { Component } from 'react';

export class Footer extends Component {

    render() {
        return (
            <section className="footer container-fluid bg-light">
				<div className="row">
					<p>
						{/* eslint-disable-next-line */}
						And yes, we are for hire <a href="tel:+27797652896"><i className="fa fa-phone">+277 9765 2896</i></a> or find us at <a href="#"><i className="fa fa-facebook">ShishaDot</i></a>.
						<br/>
						See you on the next session.
					</p>
				</div>
				<div className="row">
					<h3>
						Share us:
						{/* eslint-disable-next-line */ } 
						<a href="#">
							<i className="fa fa-facebook"></i>
						</a>
						{/* eslint-disable-next-line */ }
						<a href="#">
							<i className="fa fa-whatsapp"></i>
						</a>
						{/* eslint-disable-next-line */ }
						<a href="#">
							<i className="fa fa-twitter"></i>
						</a>
						{/* eslint-disable-next-line */ }
						<a href="#">
							<i className="fa fa-instagram"></i>
						</a>
						{/* eslint-disable-next-line */ }
						<a href="#">
							<i className="fa fa-flicker"></i>
						</a>
						{/* eslint-disable-next-line */ }
						<a href="#">
							<i className="fa fa-youtube"></i>
						</a>
						{/* eslint-disable-next-line */ }
						<a href="#">
							<i className="fa fa-wechat"></i>
						</a>
					</h3>
				</div>
				<div className="row copy">
					<div>
					<h3>
					{/* eslint-disable-next-line */ }
						<a href="#" target="_blank" className="copyright ml-5 w-50">
							&copy;&nbsp;Monza Dingane
						</a>
					</h3>
					</div>
					<div>
					<h3>
					{/* eslint-disable-next-line */ }
						<a href="#" target="_blank" className="portfolio">
							<i className="fa fa-link mr-5 w-50">&nbsp;Portfolio</i>
						</a>
					</h3>
					</div>
				</div>
			</section>
        );
    }
}