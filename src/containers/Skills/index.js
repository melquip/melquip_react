import React, { Component } from 'react';

class Skills extends Component {
	render() {
		return (
			<section id="highlights" className="highlights">
				<div className="inner">
					<div className="container">
						<div className="flex three">
							<div className="column">
								<h3>Skills</h3>
								<ul>
									<li>HTML5 (with standards)</li>
									<li>CSS3 with Stylus</li>
									<li>Javascript & jQuery</li>
									<li>React.js with Redux</li>
									<li>NPM, Webpack, and other packages with Node.js</li>
									<li>PHP</li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
							<div className="column">
								<h3>About me</h3>
								<p>Melquisedeque Pereira</p>
								
								<p>Aveiro - Portugal</p>
								<p><a href="#work">Checkout my work here</a></p>
							</div>
							<div className="column">
								<h3>Melquip</h3>
								<p>MELQUIP is a web development agency that specializes in providing full
									service solutions to establish your online presence.</p>
								<p>If you have any questions feel free to <a href="#contacts">send an email
									here</a>.</p>
							</div>
							<div className="column"></div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
