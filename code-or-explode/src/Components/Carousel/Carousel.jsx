import React  from 'react';
import './Carousel.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';

const data = [
  {
    id: 1,
    imgUrl: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  },
  {
    id: 2,
    imgUrl: 'https://images.unsplash.com/photo-1553868799-fa0a59fa2df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
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
