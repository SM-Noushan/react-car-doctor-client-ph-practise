import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <section className="relative p-16 md:p-[100px] text-white mt-6">
      <h1 className="text-[40px] lg:text-[60px] leading-[55px] lg:leading-[75px] font-bold">
        Affordable <br /> Price For Car <br /> Servicing
      </h1>
      <p className="lg:text-lg capitalize my-7">
        There are many variations of passages of available, but <br /> the
        majority have suffered alteration in some form
      </p>
      <div className="flex gap-4">
        <button className="px-6 btn bg-red-811 hover:bg-red-811/80 lg:text-lg text-white font-semibold border-red-811">
          Discover More
        </button>
        <button className="px-6 btn bg-transparent hover:bg-white/20 lg:text-lg text-white font-semibold">
          Latest Project
        </button>
      </div>
      <Swiper
        className="absolute inset-0 rounded-lg -z-10"
        loop={true}
        autoplay={{ delay: 2000 }}
        parallax={true}
        navigation={{
          nextEl: ".btn-next-slide",
          prevEl: ".btn-prev-slide",
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className="bg-[linear-gradient(90deg,rgba(21,21,21)0%,rgba(21,21,21,0.00)100%),url('../assets/images/banner/1.jpg')] bg-cover bg-center bg-no-repeat size-full" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(90deg,rgba(21,21,21)0%,rgba(21,21,21,0.00)100%),url('../assets/images/banner/2.jpg')] bg-cover bg-center bg-no-repeat size-full" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(90deg,rgba(21,21,21)0%,rgba(21,21,21,0.00)100%),url('../assets/images/banner/3.jpg')] bg-cover bg-center bg-no-repeat size-full" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(90deg,rgba(21,21,21)0%,rgba(21,21,21,0.00)100%),url('../assets/images/banner/4.jpg')] bg-cover bg-center bg-no-repeat size-full" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(90deg,rgba(21,21,21)0%,rgba(21,21,21,0.00)100%),url('../assets/images/banner/5.jpg')] bg-cover bg-center bg-no-repeat size-full" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[linear-gradient(90deg,rgba(21,21,21)0%,rgba(21,21,21,0.00)100%),url('../assets/images/banner/6.jpg')] bg-cover bg-center bg-no-repeat size-full" />
        </SwiperSlide>
      </Swiper>
      <div className="absolute flex justify-between gap-4 transform -translate-y-1/2 right-1/3 min-[580px]:right-10 -bottom-5 min-[580px]:bottom-5 cursor-pointer z-10">
        <button className="btn-prev-slide btn btn-circle bg-white/20 hover:bg-red-811">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M19.5 12.7755L4.5 12.7755M4.5 12.7755L11.25 19.5255M4.5 12.7755L11.25 6.02551"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="btn-next-slide btn btn-circle bg-white/20 hover:bg-red-811">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M4.5 12.7755H19.5M19.5 12.7755L12.75 6.02551M19.5 12.7755L12.75 19.5255"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Banner;
