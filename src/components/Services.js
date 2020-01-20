import React, { Component } from 'react';
// Import images
import Image01 from './../assets/images/img-01.jpg';
import Image02 from './../assets/images/img-02.jpg';
import Image03 from './../assets/images/img-03.jpg';
import Image04 from './../assets/images/img-04.jpg';
import Image05 from './../assets/images/img-05.jpg';
import Image06 from './../assets/images/img-06.jpg';
import Image07 from './../assets/images/img-07.jpg';
import Image08 from './../assets/images/img-08.jpg';

// Services component
export class Services extends Component {

    render() {
        return (
            <section className="services container">
				<div className="row justify-content-center">
					<span className="w-100 mx-auto p-1 d-flex justify-content-center">
						<h4 id="forHeader">ShishaDot for</h4>
					</span>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-info">
						{/* eslint-disable-next-line */}
						<img src={Image01} alt="Image-01" className="p-2"/>
						<h4>events</h4>
						<p>
							A litle bit of description that explains this services rendered by ShishaDot.
						</p>
						{/* eslint-disable-next-line */}
						<a href="#">Read More.</a>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 pb-0 h-auto bg-danger">
						{/* eslint-disable-next-line */}
						<img src={Image02} alt="Image-01" className="p-2"/>
						<h4>parties</h4>
						<p>
							A litle bit of description that explains this services rendered by ShishaDot.
						</p>
						{/* eslint-disable-next-line */}
						<a href="#">Read More.</a>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-success">
						{/* eslint-disable-next-line */}
						<img src={Image03} alt="Image-01" className="p-2"/>
						<h4>weddings</h4>
						<p>
							A litle bit of description that explains this services rendered by ShishaDot.
						</p>
						{/* eslint-disable-next-line */}
						<a href="#">Read More.</a>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-warning">
						{/* eslint-disable-next-line */}
						<img src={Image04} alt="Image-01" className="p-2"/>
						<h4>functions</h4>
						<p>
							A litle bit of description that explains this services rendered by ShishaDot.
						</p>
						{/* eslint-disable-next-line */}
						<a href="#">Read More.</a>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-danger">
						{/* eslint-disable-next-line */}
						<img src={Image05} alt="Image-01" className="p-2"/>
						<h4>events</h4>
						<p>
							A litle bit of description that explains this services rendered by ShishaDot.
						</p>
						{/* eslint-disable-next-line */}
						<a href="#">Read More.</a>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-secondary">
						{/* eslint-disable-next-line */}
						<img src={Image06} alt="Image-01" className="p-2"/>
						<h4>parties</h4>
						<p>
							A litle bit of description that explains this services rendered by ShishaDot.
						</p>
						{/* eslint-disable-next-line */}
						<a href="#">Read More.</a>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-primary">
						{/* eslint-disable-next-line */}
						<img src={Image07} alt="Image-01" className="p-2"/>
						<h4>functions</h4>
						<p>
							A litle bit of description that explains this services rendered by ShishaDot.
						</p>
						{/* eslint-disable-next-line */}
						<a href="#">Read More.</a>
					</article>
					<article className="col col-sm-6 col-md-4 col-lg-3 p-1 bg-dark">
						{/* eslint-disable-next-line */}
						<img src={Image08} alt="Image-01" className="p-2"/>
						<h4>ShishaDot</h4>
						<p>
							A litle bit of description that explains this services rendered by ShishaDot.
						</p>
						{/* eslint-disable-next-line */}
						<a href="#">Read More.</a>
					</article>
				</div>
			</section>
        );
    }
}