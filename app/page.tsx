"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import FallingLamps from "@/app/components/FallingLamps";
import CoupleMessage from "@/app/components/CoupleMessage";
import ThingsToKnow from "@/app/components/ThingsToKnow";
import MarriageCountdown from "@/app/components/MarriageCountdown";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/lamp.png"
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const events = [
    {
      title_ceremony: "Mehandi",
      image: "/assets/aura_mehandi.png",
      date: "Tuesday, March 10th 2026",
      venue: "Hyatt Regency Delhi",
      venue_address: <>Ring Road, Bhikaji Cama Place, <br />  RK Puram, New Delhi 110066</>,
      time: "7:00 pm onwards",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Haldi",
      image: "/assets/aura_haldi.png",
      date: "Friday, March 13th 2026",
      venue: "Golden Gate Banquet",
      venue_address: <>Block B, Mayapuri Industrial Area Phase I, Mayapuri<br /> Delhi 110064</>,
      time: "4:00pm Onwards",
      link: "https://maps.app.goo.gl/ywMPWwHjbXvqwiWc8",
    },
    {
      title_ceremony: "Cocktail",
      image: "/assets/aura_cocktail.png",
      date: "Sunday, March 15th 2026",
      venue: "The Ashok Hotel",
      venue_address: <>50-B, Diplomatic Enclave,<br /> Chanakyapuri, New Delhi – 110021</>,
      time: "8pm Onwards",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },

    {
      title_ceremony: "Engagement",
      image: "/assets/aura_engagement.png",
      date: "Tuesday, March 10th 2026",
      venue: "Hyatt Regency Delhi",
      venue_address: <>Ring Road, Bhikaji Cama Place, <br />  RK Puram, New Delhi 110066</>,
      time: "7:00 pm onwards",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Shaadi",
      image: "/assets/aura_shaadi.png",
      date: "Friday, March 13th 2026",
      venue: "The Leela Palace",
      venue_address: <>Africa Ave, Diplomatic Enclave, Chanakyapuri,<br /> Delhi 110023</>,
      time: "4:00pm Onwards",
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },


    {
      title_ceremony: "Reception",
      image: "/assets/aura_reception.png",
      date: "Sunday, March 15th 2026",
      venue: "The Ashok Hotel",
      venue_address: <>50-B, Diplomatic Enclave,<br /> Chanakyapuri, New Delhi – 110021</>,
      time: "8pm Onwards",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },


  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);


  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song_inter.mp3" loop preload="auto" playsInline />


      {/* hero section */}
      <div
        className="
    bg-[url('/assets/respo_bg_img.webp')]
    md:bg-[url('/assets/bg_img3.png')]
    bg-cover
    bg-no-repeat
    bg-top
    md:bg-center
    w-full
    overflow-hidden
    relative
  "
      >
        {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
        <FloatingLamp className="absolute top-10 left-8 w-40 h-40 transform rotate-12 opacity-90" />
        <FloatingLamp className="absolute top-30 left-20 w-36 h-36 transform rotate-45 opacity-80" />
        <FloatingLamp className="absolute top-50 left-40 w-32 h-32 transform rotate-30 opacity-85" />
        <FloatingLamp className="absolute top-70 left-60 w-38 h-38 transform rotate-15 opacity-80" />
        <FloatingLamp className="absolute top-90 left-80 w-34 h-34 transform rotate-25 opacity-75" />
        <FloatingLamp className="absolute top-110 left-100 w-28 h-28 transform rotate-10 opacity-85" />
        <FloatingLamp className="absolute top-130 left-120 w-36 h-36 transform rotate-35 opacity-75" />
        <FloatingLamp className="absolute top-150 left-140 w-30 h-30 transform rotate-22 opacity-85" />
        <FloatingLamp className="absolute top-170 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="absolute top-190 left-180 w-40 h-40 transform rotate-28 opacity-85" />


        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-100 left-100 w-40 h-40 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-120 left-120 w-32 h-32 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-140 left-140 w-40 h-40 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-160 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-180 left-180 w-40 h-40 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />





        {/* Right-to-Left Lamps - Less crowded */}
        <FloatingLamp className="absolute top-20 right-12 w-32 h-32 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-40 right-32 w-28 h-28 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-60 right-52 w-36 h-36 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-80 right-72 w-30 h-30 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-100 right-92 w-34 h-34 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-120 right-112 w-38 h-38 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-140 right-132 w-26 h-26 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-160 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-180 right-172 w-36 h-36 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-200 right-192 w-30 h-30 transform -rotate-35 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-30 right-12 w-40 h-40 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-50 right-32 w-40 h-40 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-70 right-52 w-40 h-40 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-90 right-72 w-40 h-40 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-110 right-92 w-32 h-32 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-130 right-112 w-40 h-40 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-40 h-40 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />




        {/* <FallingLamps /> */}
        <div className=" md:pt-44 md:pb-0 relative z-10 pt-12">

          <h2 className="text-[#DEE6FF]  text-center leading-tight
     text-[50px] sm:text-5xl lg:text-[100px] lg:pb-500 md:pb-370 pb-160
  flex flex-col items-center gap-y-2">

            <span className="jacques-francois">Fardeen</span>

            <span className="text-xl sm:text-3xl tracking-[10px] font-cormorant">WEDS</span>

            <span className="jacques-francois">Zarin</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0  lg:pt-50 pt-0">


            <p className="jacques-francois text-sm md:text-xl lg:text-3xl text-[#FFF5B9] text-center">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم</p>
            <p className="jacques-francois text-sm md:text-xl lg:text-3xl text-[#FFF5B9] text-center">Bismillahir Rahmanir Raheem</p>



            <h2 className="text-[#FFF5B9] lg:text-[30px] md:text-2xl text-[20px] jacques-francois">
              With the heavenly blessings of
              <br /> Mrs. Fatima Begum & Mr. Zafar Ahmed
            </h2>

            <hr className="lg:w-24 w-16 border-[#FFF5B9] my-4" />
            <h2 className="text-[#FFF5B9] lg:text-[30px] md:text-2xl text-[20px] jacques-francois">
              Mrs. Shabana Khan & Mr. Rehan Malik
            </h2>

          </div>


          <div className="mt-8 text-center">
            <h2 className="text-[#FFF5B9] font-cormorant 
            text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:tracking-wide tracking-wider">
              INVITES
            </h2>

            <p className="text-[#FFF5B9] jacques-francois lg:text-[30px] md:text-2xl text-[19px] mt-6">
              You to join us in the wedding celebrations of
            </p>

            <h2 className="text-[#FFF5B9] jacques-francois text-center mt-14
            md:text-5xl text-[64px] lg:text-[80px] leading-tight font-medium">
              FARDEEN
            </h2>


            <p className="text-[#FFF5B9] jacques-francois lg:text-[30px] md:text-2xl mt-2 text-[16px]">
              (S/o Mrs. Nida Khan & Mr. Arshad Hussain)
              <br /> (GrandSon of Abdul Samad)
            </p>




            <h2 className="text-[#FFF5B9] jacques-francois text-center mt-4
            text-[64px] sm:text-7xl lg:text-[80px] leading-tight font-medium">
              <span className="text-[#FFF5B9] jacques-francois text-center lg:mt-10 mt-4 
            md:text-5xl text-[82px] lg:text-[150px] leading-tight">&</span>   <br />
              Zarin
            </h2>

            <p className="text-[#FFF5B9] jacques-francois lg:text-[30px] md:text-2xl text-[16px] mt-2">
              (D/o Mrs. Akram Sheikh & Fatima Sheikh)
            </p>

            <p className="text-[#FFF5B9] jacques-francois lg:text-3xl md:text-2xl text-[24px] mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-32 gap-16 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 w-95 sm:w-76 h-auto"
                  />

                  <h2 className="text-[#FFF5B9] jacques-francois lg:text-[45px] md:text-2xl text-[37px] mt-4 font-bold">
                    {event.title_ceremony}
                  </h2>



                  <p className="text-[#FFF5B9] jacques-francois text-[14px] sm:text-base mt-2">
                    <span className="text-[22px]">{event.date}</span>  <br />
                    <span className="text-[24px] uppercase"> {event.venue}</span> <br />
                    <span className="text-[20px]">{event.venue_address}</span> <br />
                    <span className="text-[22px]">  {event.time} </span>
                  </p>

                  <a
                    href={event.link}
                    className="text-[#FFF5B9] underline md:text-sm text-[18px] mt-2 font-cormorant"
                    target="_blank"
                  >
                    See the route
                  </a>


                </div>
              ))}
            </div>
          </div>

        


          <div className="flex items-center justify-between pt-30 lg:pt-100">

            <img
              src="/assets/couple_b.png"
              alt="couple"
              className="w-60 h-108 lg:w-205 lg:h-260 object-cover"
            />

            {/* Center Text */}
            <div className="flex flex-col justify-center items-center text-center">
              <p className="font-Cormorant-upright text-2xl md:text-base lg:text-4xl text-[#E1EF1E]">
                MEET THE
              </p>

              <h2 className="lg:text-[130px] text-5xl text-center text-[#7CE670] lg:pt-12 font-cormorant-upright md:leading-18 leading-6 pt-6">
                <span className="text-[#EAD670] font-cormorant-upright">Bride</span> <br /> & <br /> <span className="text-[#EAD670] font-cormorant-upright ">Groom</span>
              </h2>

            </div>
            <div className="self-end">
              <img
                src="/assets/lights.png"
                alt="lights"
                className="w-20 h-58 lg:w-60 lg:h-160 object-cover"
              />
            </div>
          </div>


        </div>
      </div>




      <CoupleMessage />
      <ThingsToKnow />

      <div className="hidden  md:block bg-[url('/assets/sunset_img.webp')] bg-cover bg-no-repeat ">
        <div className="lg:h-335 md:h-180 flex flex-col items-center justify-center">
          <img src="/logo.webp" alt="logo" width={250} height={300} className=" top-80 lg:w-70 lg:h-60" />
        </div>
      </div>


      {/* mobile visible section */}
      <div className="md:hidden bg-[url('/assets/moonmobile_wm.png')] bg-cover bg-no-repeat">
        <div className="h-210">
        </div>
      </div>


      <MarriageCountdown />
      <div className="fixed top-5 left-5 z-50">
        <a href="https://invitearc.com/">
          <button className="flex items-center gap-3 border-white border-2 bg-white/0 backdrop-blur text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">
            <span className="text-3xl leading-none">←</span>
            <span className="text-[16px] font-semibold">
              Exit Preview
            </span>

          </button>
        </a>
      </div>
    </>
  );
}
