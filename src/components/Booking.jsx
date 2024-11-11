import { FaChevronDown } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
  // Loading animation
  useGSAP(() => {
    gsap.from(".booking", {
      y: 15,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".booking",
        start: "bottom, bottom",
        end: "top 20%",
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="py-[100px] mt-[200px] bg-[#272727] w-full text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-sandeRegular booking">
        Plan Your Getaway Today
      </h1>
      <div className="mt-10">
        <form action="" className="flex gap-[80px] booking">
          <div className="relative">
            <label htmlFor="" className="block font-thin text-white/80">
              Check-in
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Tue, Jun 24"
              className="bg-transparent font-thin text-white border-b-[0.5px] w-[200px]"
            />
            <FaChevronDown className="absolute right-0 bottom-1 text-white/80 text-xs" />
          </div>
          <div className="relative">
            <label htmlFor="" className="block font-thin text-white/80">
              Check-out
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Fri, Jun 31"
              className="bg-transparent font-thin text-white border-b-[0.5px] w-[200px]"
            />
            <FaChevronDown className="absolute right-0 bottom-1 text-white/80 text-xs" />
          </div>
          <div className="relative">
            <label htmlFor="" className="block font-thin text-white/80">
              Number of guests
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="2 Guests"
              className="bg-transparent font-thin text-white border-b-[0.5px] w-[200px]"
            />
            <FaChevronDown className="absolute right-0 bottom-1 text-white/80 text-xs" />
          </div>
        </form>
      </div>
      <button className="booking mt-[60px] px-5 pt-[4px] pb-[2px] border-[1px] border-zinc-400 rounded-lg text-xl font-sandeRegular">
        Book Now
      </button>
    </div>
  );
};

export default Booking;
