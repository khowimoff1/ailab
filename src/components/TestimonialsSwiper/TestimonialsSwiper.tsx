"use client";
// import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../assets/AI LAB logo2.png";

// import swiper styles without typescript error workaround
// @ts-expect-error: Swiper CSS imports do not have TypeScript definitions
import "swiper/css";
// @ts-expect-error: Swiper CSS imports do not have TypeScript definitions
import "swiper/css/pagination";

// const testimonials = [
//   {
//     name: "Maya Thompson",
//     role: "Total Beginner",
//     text: "Раньше вообще никогда не рисовал, поэтому был в шоке, как быстро начал получаться. Уроки понятные, вдохновляют и реально в кайф проходить.",
//   },
//   {
//     name: "Matt Walker",
//     role: "Professional painter",
//     text: "Даже после пяти лет рисования я тут нашёл для себя что-то новое. Это помогло мне прокачать технику и по-другому взглянуть на композицию.",
//   },
//   {
//     name: "Emily Carter",
//     role: "Passionate amateur",
//     text: "Я раньше тоже ходил на уроки рисования, но этот курс реально замотивировал — тянет каждый день брать кисть в руки!",
//   },
//   {
//     name: "Emily Carter",
//     role: "Passionate amateur",
//     text: "Я раньше тоже ходил на уроки рисования, но этот курс реально замотивировал — тянет каждый день брать кисть в руки!",
//   },
//   {
//     name: "Emily Carter",
//     role: "Passionate amateur",
//     text: "Я раньше тоже ходил на уроки рисования, но этот курс реально замотивировал — тянет каждый день брать кисть в руки!",
//   },
//   {
//     name: "Emily Carter",
//     role: "Passionate amateur",
//     text: "Я раньше тоже ходил на уроки рисования, но этот курс реально замотивировал — тянет каждый день брать кисть в руки!",
//   },
// ];

// const UserIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="w-12 h-12 text-white"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//     />
//   </svg>
// );

const TestimonialsSwiper = () => {
  return (
    <section className="pt-5 pb-16">
      <div className="flex justify-center ">
        <img src={logo} alt="logo" className="w-[230px] pb-[70px]" />
      </div>
      {/* <div>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={50}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          modules={[]}
          style={{ padding: "0 20px" }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1.2 },
            576: { slidesPerView: 1.5 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="pb-12 mySwiper"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="h-auto flex">
              <div className="bg-gradient-to-br from-[#6BE5FF] to-[#466BD4] p-[1px] rounded-[30px] w-full h-full">
                <div className="bg-[#16152A] h-full rounded-[30px] p-6 text-white flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#1F1E35] p-2 rounded-full">
                      <UserIcon />
                    </div>
                    <div>
                      <h3 className="sm:text-[30px] md:text-[40px] font-bold">
                        {item.name}
                      </h3>
                      <p className="sm:text-[32px] text-[#646BA1]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="sm:text-[32px] leading-[120%] text-[#AAB0E5] sm:mt-8">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </section>
  );
};

export default TestimonialsSwiper;
