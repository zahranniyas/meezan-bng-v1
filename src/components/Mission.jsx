import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const scrollRef = useRef();

  // Loading animation
  useGSAP(() => {
    gsap.from("#missionText", {
      y: 15,
      opacity: 0,
      scrollTrigger: {
        trigger: "#missionText",
        start: "bottom, bottom",
        end: "top 20%",
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div id="missionText" className="mt-[200px] mb-[200px]" ref={scrollRef}>
      <p className="text-center font-sandeMedium text-3xl">
        Hatale Bungalow which was initially a <br /> plantation bungalow on the
        Hatale Tea Estate <br /> was transformed by the Management into a <br />{" "}
        modern luxury villa.
      </p>
    </div>
  );
};

export default Mission;
