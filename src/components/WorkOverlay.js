import React from 'react';
import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const WorkOverlay = ({ slides, visible }) => {
	return (
		<div id="work" className={["pageContent", "work", (visible?"":"hidden")].join(' ')}>
			<CarouselProvider>
				<Slider>
					{ slides.map(slide => <Slide key={slide.id}>
						<div className="TiltBackground">
							<ButtonBack></ButtonBack>
							<ButtonNext></ButtonNext>
							<div className="slide left"></div>
							<div className="slide right"></div>
						</div>
						<div className="TiltOverlay">
							<div className="contentOverlay">
								<h1>{slide.title}</h1>
								<p>{slide.desc}</p>
							</div>
						</div>
					</Slide>
					)}
				</Slider>
			</CarouselProvider>
		</div>
	)
};

WorkOverlay.propTypes = {
	visible: PropTypes.bool.isRequired,
	slides: PropTypes.array.isRequired,
};

export default WorkOverlay;
