import React, { Component } from 'react';

class Index extends Component {
	render() {
		return (
			<section id="contacts" className="contacts">
				<div className="inner">
					<div className="flex two">
						<div className="column">
							<h2>About me</h2>
							<p>My name is Melquisedeque Pereira and usually people call me Melqui for short.</p>
							<p>I’m 21 years old and ... I’m 21 years old and ... I’m 21 years old and ... I’m 21
								years old and ... I’m 21 years old and ... I’m 21 years old and ... I’m 21 years
								old and ... I’m 21 years old and ... </p>
							<p>I’m 21 years old and ... I’m 21 years old and ... I’m 21 years old and ... I’m 21
								years old and ... I’m 21 years old and ... I’m 21 years old and ... I’m 21 years
								old and ... I’m 21 years old and ... I’m 21 years old and ... I’m 21 years old
								and ... </p>
							<p>I’m 21 years old and ... I’m 21 years old and ... I’m 21 years old and ... I’m 21
								years old and ... I’m 21 years old and ... </p>
							<p>I’m 21 years old and ... I’m 21 years old and ... I’m 21 years old and ... I’m 21
								years old and ... I’m 21 years old and ... I’m 21 years old and ... </p>
							<div>
								<a href="#" className="button">
									<span className="top-corner thin"></span>
									<span className="bottom-corner thin"></span>
									download curriculum vitae
								</a>
								<a href="#" className="button">
									<span className="top-corner thin"></span>
									<span className="bottom-corner thin"></span>
									see it now
								</a>
							</div>
						</div>
						<div className="column">
							<h2>Hire me</h2>
							<p>Feel free to contact me at any time. You can send me an email either through <a
								href="mailto:hireme@melqui.pt">hireme@melqui.pt</a> or fill the information
								below and I'll answer as soon as possible!</p>
							<br/>
							<br/>
							<form method="post" noValidate>
								<div className="fieldHelper half">
									<input id="" name="" type="text" value="" />
									<span className="top-corner thin"></span>
									<span className="bottom-corner thin"></span>
									<label htmlFor="">Name</label>
								</div>
								<div className="fieldHelper half">
									<input id="" name="" type="text" value="" />
									<span className="top-corner thin"></span>
									<span className="bottom-corner thin"></span>
									<label htmlFor="">Subject</label>
								</div>
								<div className="fieldHelper">
									<input id="" name="" type="email" value="" />
									<span className="top-corner thin"></span>
									<span className="bottom-corner thin"></span>
									<label htmlFor="">Email</label>
								</div>
								<div className="fieldHelper">
									<textarea id="" name=""></textarea>
									<span className="top-corner thin"></span>
									<span className="bottom-corner thin"></span>
									<label htmlFor="">Message</label>
								</div>
								<button className="button nomargin">
									<span className="top-corner thin"></span>
									<span className="bottom-corner thin"></span>
									Send
									<i className="icon-plane"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Index;
