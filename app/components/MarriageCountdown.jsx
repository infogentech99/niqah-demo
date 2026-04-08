"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown() {
    const TARGET_DATE = new Date("2026-06-09").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const diff = TARGET_DATE - now;
            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (diff % (1000 * 60 * 60)) / (1000 * 60)
            );

            setTimeLeft({ days, hours, minutes });
        };

        updateCountdown(); // first run
        const interval = setInterval(updateCountdown, 60000); // every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bg-[url('/assets/couplebg_wm.png')] bg-cover bg-no-repeat pb-12">
                <div className="lg:h-110 md:h-100 h-80">
                    <h2 className="lg:text-[40px] text-4xl text-center text-white lg:pt-42 pt-12 font-cormorant-upright">The countdown begins</h2> 
                      <h2 className="lg:text-[40px] text-2xl text-center text-white font-cormorant-upright"> {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M</h2>
                    <p className="lg:text-[22px] text-[20px] text-[#DEE6FF] mt-4 text-center lg:px-100 md:px-25 px-10 font-cormorant-upright">
                        Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.
                    </p>
                    <div className="flex flex-col-1 gap-4 justify-center items-center mt-4">
                       <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src="/assets/instagram.png" alt="" className="h-10 w-10"/></a>
                        {/* <p className="lg:text-[22px] text-[18px] text-[#DEE6FF] text-center font-cormorant-upright">
                        Follow Invite Arc on Instagram</p> */}
                    </div>
                    <p className="lg:text-[16px] text-xl text-[#DEE6FF] mt-6 text-center font-cormorant-upright">
                        © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026 </p>
                </div>
            </div>
        </>
    );
} 8