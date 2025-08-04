
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// Rasmlarni import qilish
import Angel from "../../assets/swiper/Angel Connect. logo1 (3) 1.png";
import BTTech from "../../assets/swiper/BT Tech.png";
import ITPark from "../../assets/swiper/IT PARK UZBEKISTAN WHITE 1.png";
import Ipoteka from "../../assets/swiper/Ipoteka.png";
import Legalmax from "../../assets/swiper/Legalmax.png";
import ProBusiness from "../../assets/swiper/Pro Business logo (1) 1.png";
import DigitalUz from "../../assets/swiper/digital uz.png";
import School21 from "../../assets/swiper/school21 1.png";

interface SlideData {
  id: number;
  image: string;
}

const slides: SlideData[] = [
  { id: 1, image: Angel },
  { id: 2, image: BTTech },
  { id: 3, image: ITPark },
  { id: 4, image: Ipoteka },
  { id: 5, image: Legalmax },
  { id: 6, image: ProBusiness },
  { id: 7, image: DigitalUz },
  { id: 8, image: School21 },
];

export const Swipers = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    //   pagination={{ clickable: true }}
      className="w-full max-w-4xl"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.image}
            alt={`slide-${slide.id}`}
            className="w-full h-64 object-contain mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
