import React from 'react';
import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const WorkOverlay = ({ slides, visible, onMouseEnterAnimation, onMouseLeaveAnimation }) => {
	return (
		<div id="work" className={["pageContent", "work", (visible?"":"hidden")].join(' ')}>
			<CarouselProvider>
				<Slider>
					{
					slides.map(slide => <Slide key={slide.id}>
						<div className="TiltBackground">
							<div className="slide left"></div>
							<div className="slide right"></div>
						</div>
						<div className="TiltOverlay">
							<div className="contentOverlay">
								<h1>{slide.title}</h1>
								<p>{slide.desc}</p>
							</div>
						</div>
					</Slide>)
					}
				</Slider>
			</CarouselProvider>
		</div>
	)
};

WorkOverlay.propTypes = {
	slides: PropTypes.array.isRequired,
	visible: PropTypes.bool.isRequired,
	onMouseEnterAnimation: PropTypes.func.isRequired,
	onMouseLeaveAnimation: PropTypes.func.isRequired
};

export default WorkOverlay;
