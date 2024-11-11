import {
  heroSmallImg01,
  heroSmallImg02,
  heroSmallImg03,
  heroSmallImg04,
} from "../assets";
import BungalowItem from "./BungalowItem";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Bungalows = () => {
  // Loading animation
  useGSAP(() => {
    gsap.from(".bungalow-text", {
      y: 15,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".bungalow-text",
        start: "bottom, bottom",
        end: "top 20%",
      },
      ease: "power1.inOut",
    });
    gsap.from("#bungalowCards", {
      gap: 0,
      x: -20,
      scrollTrigger: {
        trigger: "#bungalowCards",
        start: "bottom, bottom",
        end: "top 20%",
      },
      duration: 1,
      ease: "elastic",
    });
  }, []);

  const bungalowList = [
    {
      name: "Ancoombra Bungalow",
      image: "",
      url: heroSmallImg01,
    },
    {
      name: "Hatale Bungalow",
      image: "",
      url: heroSmallImg02,
    },
    {
      name: "Dartry Cottage",
      image: "",
      url: heroSmallImg03,
    },
    {
      name: "Nagala Bungalow",
      image: "",
      url: heroSmallImg04,
    },
  ];

  return (
    <div className="mt-[200px] mb-[200px] px-20">
      <h1 className="font-sandeExtraBold text-6xl bungalow-text">
        Comfort and Space Combined
      </h1>

      <div className="flex justify-between">
        <p className="w-[50%] mt-5 bungalow-text">
          Relish the charm of our spacious rooms and separate houses, blending
          modern elegance with the tranquility of the surrounding forest park
          and natural oasis.
        </p>
        <p className="mr-40 font-sandeBold text-3xl bungalow-text">
          Select Bunaglow
        </p>
      </div>
      <div className="flex gap-5 mt-5" id="bungalowCards">
        {bungalowList.map((item, i) => (
          <BungalowItem key={i} name={item.name} image={item.url} />
        ))}
      </div>
    </div>
  );
};

export default Bungalows;
