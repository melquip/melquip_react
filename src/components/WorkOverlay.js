import React from 'react';
import PropTypes from 'prop-types';
/*import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';*/
import Slider from "react-slick";

const WorkOverlay = ({ slides, visible }) => {
	return (
		<div id="work" className={["pageContent", "work", (visible?"":"hidden")].join(' ')}>
			<Slider
				dots={true}
				infinite={false}
				speed={400}
				slidesToShow={1}
				slidesToScroll={1}
				autoplaySpeed={8000}
				autoplay={true}
				pauseOnHover={1}
				pauseOnFocus={1}
				pauseOnDotsHover={1}
				accessibility={true}
				/*lazyLoad='progressive'*/
				/*fade={true}*/
				/*useCSS={1}*/
				/*useTransform={1}*/
			>
				{ slides.map(slide => <React.Fragment key={slide.id}>
					<div className="TiltBackground">
						<div className="slide left">
						</div>
						<div className="slide right">
							<img src={slide.img} alt=""/>
						</div>
					</div>
					<div className="TiltOverlay">
						<div className="contentOverlay">
							<h1>{slide.title}</h1>
							<p>{slide.desc}</p>
						</div>
					</div>
				</React.Fragment>
				)}
			</Slider>
		</div>
	)
};

WorkOverlay.propTypes = {
	visible: PropTypes.bool.isRequired,
	slides: PropTypes.array.isRequired,
};

export default WorkOverlay;
