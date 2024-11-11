import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  heroMainImg01,
  heroMainImg02,
  heroMainImg03,
} from "../assets";

const Gallery = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-5xl font-sandeRegular text-center">
        Your Nature Oasis Awaits
      </h1>
      <p className="text-center mt-2">
        At Meezan, we invite you to experience the harmonious blend of luxury
        and nature.
        <br />
        Book your escape today and embark on a journey to rejuvenate your senses
        <br />
        amidst Sri Lanka’s picturesque landscapes.
      </p>
      <div className="w-[60%] mx-auto mt-[50px]">
        <Carousel emulateTouch dynamicHeight>
          <div>
            <img src={gallery01} />
            <p className="legend">Room</p>
          </div>
          <div>
            <img src={gallery02} />
            <p className="legend">Swimming Pool</p>
          </div>
          <div>
            <img src={gallery03} />
            <p className="legend">Living room</p>
          </div>
          <div>
            <img src={gallery04} />
            <p className="legend">Dining room</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
