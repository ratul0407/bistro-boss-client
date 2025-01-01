import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";

import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle subHeading="What Our Client Say" heading="Testimonials" />
      <div className="w-11/12 mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="w-9/12 mx-auto text-center space-y-4">
                <Rating
                  style={{ maxWidth: 180, marginInline: "auto" }}
                  value={item.rating}
                  readOnly
                />
                <p>
                  <FaQuoteLeft style={{ marginInline: "auto" }} size={40} />
                </p>
                <p>{item.details}</p>
                <h3 className="text-2xl text-yellow-500">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
