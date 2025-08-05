import heroBg from "../../assets/herobg.png";
import calendar from "../../assets/calendar.svg";
import logo from "../../assets/AI LAB logo2.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[100px]  pb-[50px] sm:pt-5">
      <div className="md:flex items-center justify-between container flex-row-reverse hidden">
        <div className="flex items-center gap-2 sm:gap-5 border border-[#745EFF] rounded-full px-4 sm:px-6 py-3 sm:py-[14px] text-white text-[14px] sm:text-[28px] ">
          <img
            src={calendar}
            alt="Календарь"
            className="w-[20px]  sm:w-[58px] sm:h-[58px]"
          />
          <span className="max-w-[160px]">23 августа</span>
        </div>
        <div className="flex items-center  ">
          <img
            src={logo}
            alt="Календарь"
            className="w-[20px]  sm:w-[158px] sm:h-[58px]"
          />
        </div>
      </div>
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-15 lg:gap-0 sm:pt-[100px]">
        {/* LEFT TEXT CONTENT */}
        <div className="lg:w-1/2 flex flex-col items-start">
          <h1 className="hidden sm:block text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold text-white leading-[100%] text-center lg:text-left">
            Мастер-класс <br /> Al-оптимизация бизнеса
          </h1>
          <p className="mt-12 text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[150%] text-white max-w-[750px] border border-white/30 rounded-[18px] p-6">
            Получите готовую методологию AI-внедрения для роста эффективности и
            сокращения затрат бизнеса
          </p>
          <a
            style={{
              background: "linear-gradient(90deg, #7086FD 0%, #80E1FB 100%)",
              boxShadow: "0 0 40px rgba(128, 225, 251, 0.5)",
            }}
            className="mt-12 mx-auto sm:mx-0 block px-8 py-4 sm:py-6 text-[18px] sm:text-[24px] md:text-[28px] font-bold text-white rounded-[18px] hover:opacity-90 transition"
            href="#telegram-form"
          >
            Забронировать
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 flex flex-col sm:justify-end relative">
          <h1 className="block sm:hidden text-[30px] font-bold text-white leading-[100%] text-center mb-6">
            Мастер-класс <br /> Al-оптимизация бизнеса
          </h1>
          <img
            src={heroBg}
            alt="Спикеры"
            className="w-full max-w-[850px] h-auto"
          />
          <div className="absolute -bottom-[60px] left-1/2 transform -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:top-[50px] sm:right-[15%] flex items-center gap-4 px-6 sm:px-0 md:hidden">
            <div className="flex items-center gap-2 sm:gap-5 border border-[#745EFF] rounded-full px-4 sm:px-6 py-3 sm:py-[14px] text-white text-[14px] sm:text-[28px] ">
              <img
                src={calendar}
                alt="Календарь"
                className="w-[20px]  sm:w-[58px] sm:h-[58px]"
              />
              <span className="max-w-[160px]">23 августа</span>
            </div>
          </div>
        </div>
      </div>

      {/* BADGES */}

      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:top-[50px] sm:right-[15%] flex items-center gap-4 px-6 sm:px-0 md:hidden">
        <div className="flex items-center ">
          <img src={logo} alt="logo" className="w-[160px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
