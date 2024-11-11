import { aboutImage01, aboutImage02 } from "../assets";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollRef = useRef();

  // Loading animation
  useGSAP(() => {
    gsap.from("#about", {
      y: 15,
      opacity: 0,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom, bottom",
        end: "top 20%",
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div id="about" className="px-20 flex w-full" ref={scrollRef}>
      <div className="">
        <h1 className="font-sandeExtraBold text-6xl">
          Immerse Yourself <br />
          in the Embrace of Nature
        </h1>
        <div className="flex gap-4 mt-10">
          <div className="w-[430px] h-[600px] overflow-clip">
            <img src={aboutImage01} alt="" className="object-cover" />
          </div>
          <div className="w-[340px] h-[380px] overflow-clip">
            <img src={aboutImage02} alt="" className="object-cover" />
          </div>
        </div>
      </div>
      <div className="mt-[160px] ml-[100px]">
        <h1 className="font-sandeBold text-3xl">About Us</h1>
        <p className="mt-5 w-[60%]">
          Four luxury estate bungalows in four exotic locations for you to
          choose from. Hatale Bungalow which was initially a plantation bungalow
          on the Hatale Tea Estate was transformed by the Management into a
          modern luxury villa.
        </p>
      </div>
    </div>
  );
};

export default About;
