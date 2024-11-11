import React from "react";
import { serviceImg01, serviceImg02, serviceImg03 } from "../assets";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // Loading animation
  useGSAP(() => {
    gsap.from(".services", {
      y: 15,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".services",
        start: "bottom, bottom",
        end: "top 20%",
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="px-20 w-full flex">
      <div className="w-[40%]">
        <h1 className="font-sandeExtraBold text-6xl services">
          Relaxation <br />
          and Adventure Await
        </h1>
        <p className="mt-5 services">
          Indulge in rejevuneting spa treatments, stay active in the fitness
          center <br />
          with stunning forest views, or take a refreshing dip in the outdoor
          pool <br />
          overlooking the picturesque landscape.
        </p>
        <p className="mt-5 font-sandeExtraBold text-3xl services">
          Our Services
        </p>
        <img
          src={serviceImg01}
          alt=""
          className="w-full pr-20 h-[530px] mt-5 object-cover services"
        />
        <p className="mt-1 uppercase font-semibold services">SNOOKER TABLE</p>
        <p className="text-xs mt-1 services">
          Professional full sized snooker table and many more fun and games
        </p>
      </div>
      <div className="w-[60%] flex gap-10">
        <div className="w-full">
          <img
            src={serviceImg02}
            alt=""
            className="h-[700px] w-full object-cover services"
          />
          <p className="mt-1 uppercase font-semibold services">Waterfall</p>
          <p className="text-xs mt-1 services">
            A beautiful all natural waterfall within walking distance
          </p>
        </div>
        <div className="w-full">
          <img
            src={serviceImg03}
            alt=""
            className="h-[500px] w-full object-cover services"
          />
          <p className="mt-1 uppercase font-semibold services">Cycling</p>
          <p className="text-xs mt-1 services">
            Take ride across a beautiful natural landscape
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
