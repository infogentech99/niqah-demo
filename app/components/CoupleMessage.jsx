
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CoupleMessage() {

    const testimonial = [
        {
            img: '/assets/aura_couple1.jpg',
        },

        {
            img: '/assets/aura_couple2.jpg',
        },

         {
            img: '/assets/aura_couple3.jpg',
        },

        {
            img: '/assets/aura_couple4.jpg',
        },

         {
            img: '/assets/aura_couple5.jpg',
        },  
    ]

    return (

        <div className="bg-[url('/assets/couplebg_wm.png')] bg-cover bg-no-repeat">
             <div className="lg:h-592 md:h-520 h-535">
                <h1 className="lg:text-[50px] md:text-3xl text-[52px] text-center text-[#DEE6FF] lg:pt-32 pt-12 font-cormorant-upright">A message from the couple</h1>
                <h2 className="lg:text-[30px] text-[22px]  text-center text-[#DEE6FF] lg:px-60 px-6 lg:mt-28 mt-12 font-cormorant-upright lg:leading-8 md:leading-8 leading-7">
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

                <div className="flex flex-col-1 justify-center items-center mt-16">
                    <div className="bg-[url('/assets/seap_h.png')] bg-cover bg-no-repeat lg:h-150 lg:w-150 h-95 w-95 md:h-120 md:w-120">
                        <h1 className="lg:text-5xl md:text-4xl text-[30px] leading-8 font-bold lg:leading-12 lg:font-semibold text-center text-[#3c2267] lg:pt-36 md:pt-28 pt-26 font-cormorant-upright">
                         We Look forward<br />to your presence on <br /> the special occasion !</h1>
                        <p className="lg:text-[32px] text-[18px] text-[#3c2267] md:mt-6 mt-4 text-center font-cormorant-upright font-bold">
                         RSVP:
                        </p>
                        <p className="lg:text-[26px] text-[16px] text-white md:mt-10 mt-4 text-center font-cormorant-upright font-bold md:leading-4 leading-3">
                            <p className="lg:text-[28px] text-[20px]"
                            >Rony Kapoor</p><br /> 
                            <p className="lg:text-[28px] text-[20px]"
                            > Harsh Kapoor</p>
                            <br /></p>
                    </div>
                </div>


                <div className="flex flex-col justify-center items-center lg:mt-15 mt-18">
                    <h2 className="lg:text-3xl text-2xl text-center text-white lg:pt-6 font-cormorant-upright">Please help us capture our special day, <br /> use the hashtag</h2>
                    <h2 className="lg:text-3xl text-2xl text-center text-white pt-2 font-cormorant-upright"> #FromHimanshiToKapoor</h2>
                    <img src="/assets/kirannew_moon.png" alt="" className="bg-cover bg-no-repeat lg:h-80 lg:w-80 h-65 w-65 md:h-90 md:w-90 mt-12" />
                     </div>



            </div>
        </div>

    );
}