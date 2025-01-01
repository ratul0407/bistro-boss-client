import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";
// import img6 from "../../assets/home/slide6.jpg";
function Category() {
  return (
    <div className="container mx-auto w-9/12 ">
      <SectionTitle subHeading="from 11am to 10pm" heading="order online" />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="category-title">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="category-title">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="category-title">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="category-title">Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <h3 className="category-title">Veggies</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Category;
