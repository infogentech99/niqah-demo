
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CoupleMessage() {

    const testimonial = [
        {
            img: '/assets/1.jpg',
        },

        {
            img: '/assets/2.jpg',
        },

         {
            img: '/assets/7.jpg',
        },

        {
            img: '/assets/4.jpg',
        },

         {
            img: '/assets/5.jpg',
        },  
    ]

    return (

        <div className="bg-[url('/assets/bg_second.webp')] bg-cover bg-no-repeat">
             <div className="lg:h-768 md:h-520 h-670">
                <h1 className="lg:text-[50px] md:text-3xl text-xl text-center text-[#FFF5B9] lg:pt-32 pt-12 jacques-francois">A message from the couple</h1>
                <h2 className="lg:text-[30px] text-lg  text-center text-[#FFF5B9] lg:px-60 px-6 lg:mt-28 mt-12 jacques-francois lg:leading-8 md:leading-8 leading-7">
                    From different traditions to one beautiful journey, join us as we celebrate love, laughter, and forever.
                    This moment wouldn’t be the same without the people we love most. Thank you for your love, blessings, and for making our journey even more special, we’re so excited to celebrate together!</h2>
                 <div className="md:mt-32 mt-26 flex justify-center items-center">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop
                        centeredSlides={true}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        className="w-full py-12 overflow-visible"
                        breakpoints={{
                            0: {
                                slidesPerView: 1.25,
                            },
                            768: {
                                slidesPerView: 2.2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonial.map((item, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-full lg:h-125 h-120 object-cover rounded-[60px]"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> 

                  <h1 className=" lg:text-[100px] text-[60px] md:text-5xl text-center text-[#FFF097] lg:pt-32 pt-12 jacques-francois">
            Things to <br /> know
          </h1>
          <h2 className="lg:text-[30px] text-[18px] text-center text-[#FFF5B9] lg:pt-6 lg:px-60 px-6 lg:mt-4 mt-2 jacques-francois">
            To help you feel at ease and enjoy every moment of the celebrations,
            we’ve gathered a few thoughtful details we’d love for you to know
            before the big day.
          </h2>
          <div className="flex justify-center mt-20 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-24 gap-10 md:gap-6">
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/weather.webp"
                  alt="weather"
                  className="lg:h-20 lg:w-24 h-26 w-32 "
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 jacques-francois">
                  Weather
                </h2>
                <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 jacques-francois md:leading-5">
                  It will be mostly cloudy with <br />
                  temperature reaching up <br />
                  to 22 degrees at the venue
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/staff.webp"
                  alt="drive"
                  className="lg:h-23 lg:w-21 h-32 w-29"
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 jacques-francois">
                  Staff
                </h2>
                <p className="md:text-[18px] text-[14px] md:leading-5 text-[#FFF5B9] mt-1 jacques-francois">
                  We recommend the nearby <br />
                  lodge called VEGA near the <br />
                  venue for the staff members
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/parking.webp"
                  alt="car"
                  className="lg:h-20 lg:w-24 h-26 w-32 "
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 jacques-francois">
                  Parking
                </h2>
                <p className="md:text-[18px] text-[14px] md:leading-5 text-[#FFF5B9] mt-1 jacques-francois">
                  Valet parking for all our <br />
                  guests will be available <br />
                  at the venue
                </p>
              </div>
            </div>
          </div>

             

            <div className="flex items-center lg:mt-20 gap-6">
                <img
              src="/assets/couple_img2.webp"
              alt="couple"
              className="w-50 h-80 md:w-100 md:h-128 lg:w-205 lg:h-252 object-cover  "
            />
            <div className=" lg:ml-60">
            <h2 className="font-cormorant-upright text-[22px] md:text-4xl lg:text-5xl  text-center text-[#FFF5B9] lg:pt-63 jacques-francois-upright pt-4 md:leading-12 leading-6">
              Looking Forward to <br /> Seeing You
            </h2>
            <div className="flex flex-col-1 md:gap-4 gap-1 justify-center items-center md:not-first:mt-4">
              <a href="#" target="_blank">
                <img src="/assets/whatsapp.webp" alt="" className="md:w-12 md:h-12 lg:h-15 lg:w-15 h-6 w-6" />
              </a>
              <h2 className="font-cormorant-upright md:text-2xl lg:text-3xl text-[14px] text-center text-[#FFF5B9]  jacques-francois-upright">
                Click the Link to RSVP
              </h2>
            </div>
            </div>
          </div>



            </div>
        </div>

    );
}