import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
	return(
		<div className="relative">
			<div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
				swipeable={true}
				height={100}
			>
                <div>
                    <img loading="lazy"  src="./imgs/phon.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy"  src="./imgs/phon2.png" alt="" />
                </div>
                <div>
                    <img loading="lazy"  src="./imgs/watche1.jpeg" alt="" />
                </div>
                <div>
                    <img loading="lazy"  src="./imgs/watche2.png" alt="" />
                </div>
                <div>
                    <img loading="lazy"  src="./imgs/cloth1.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy"  src="./imgs/cloth2.jpg" alt="" />
                </div>
			</Carousel>
		</div>
	)
}

export default Banner

// https://links.papareact.com/gi1

// https://links.papareact.com/6ff

// https://links.papareact.com/7ma