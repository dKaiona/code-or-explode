import React  from 'react';
import './Carousel.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import Screenshot1 from '../../Images/Screenshot1.png';
import Screenshot2 from '../../Images/Screenshot2.png';
import Screenshot5 from '../../Images/Screenshot5.png';
import Screenshot4 from '../../Images/Screenshot4.png';

const data = [
  {
    id: 1,
    imgUrl: Screenshot1
  },
  {
    id: 2,
    imgUrl:Screenshot4
  },
  {
    id: 3,
    imgUrl: Screenshot5
  },
  {
    id: 4,
    imgUrl: Screenshot2
  }
];

const Carousel = () => (
	<div>
		<Slider className="slider-wrapper">
			{data.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.imgUrl}') no-repeat center center` }}
				>
					
				</div>
			))}
		</Slider>
	</div>
);

export default Carousel
