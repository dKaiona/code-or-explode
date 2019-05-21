import React  from 'react';
import './Carousel.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import carousel4 from '../../Images/carousel4.jpg';
import carousel3 from '../../Images/carousel3.jpg';

const data = [
  {
    id: 1,
    imgUrl: carousel3
  },
  {
    id: 2,
    imgUrl: carousel4
  },
  {
    id: 3,
    imgUrl: 'https://images.unsplash.com/photo-1547973259-530f60421e59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 4,
    imgUrl: 'https://images.unsplash.com/photo-1555546415-c5c9b54f70f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 5,
    imgUrl: 'https://images.unsplash.com/photo-1551841461-59ab9f6d32a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
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
