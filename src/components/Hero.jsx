import { useState } from "react";
import {
  heroSmallImg01,
  heroSmallImg02,
  heroSmallImg03,
  heroSmallImg04,
  heroMainImg01,
  heroMainImg02,
  heroMainImg03,
  heroMainImg04,
  logoBlack,
} from "../assets";
import ImageSlide from "./ImageSlide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaLink } from "react-icons/fa6";

const imgList = [
  {
    name: "Anacoombra Bungalow",
    url: heroSmallImg01,
    mainUrl: heroMainImg01,
    desc01: "Anacoombra",
    desc02: "Tea Estate Bungalow",
  },
  {
    name: "Hatale Bungalow",
    url: heroSmallImg02,
    mainUrl: heroMainImg02,
    desc01: "Hatale",
    desc02: "Tea Estate Bungalow",
  },
  {
    name: "Datry Cottage",
    url: heroSmallImg03,
    mainUrl: heroMainImg03,
    desc01: "Datry",
    desc02: "Nature Cottage",
  },
  {
    name: "Nagala Bungalow",
    url: heroSmallImg04,
    mainUrl: heroMainImg04,
    desc01: "Nagala",
    desc02: "Tea Estate Bungalow",
  },
];

const Hero = () => {
  const [imgUrl, setImgUrl] = useState(heroSmallImg01);
  const [imgTag, setImgTag] = useState(imgList[0].name);

  const [mainImgUrl, setMainImgUrl] = useState(imgList[0].mainUrl);
  const [descOne, setDescOne] = useState(imgList[0].desc01);
  const [descTwo, setDescTwo] = useState(imgList[0].desc02);

  // Loading animation
  useGSAP(() => {
    gsap.from("#navbar", {
      gap: 0,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from(".hero-title", {
      y: 25,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.inOut",
    });
    gsap.from("#bungSelect", {
      gap: 0,
      opacity: 0,
      ease: "power1.inOut",
    });
  }, []);

  // Animatie on bungalow click
  useGSAP(() => {
    gsap.from("#bngName", {
      y: 15,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.from("#heroImg", {
      scale: 0.95,
      duration: 0.3,
      ease: "power1.inOut",
    });
    gsap.from("#desc", {
      y: 15,
      opacity: 0,
      delay: 1,
      ease: "power1.inOut",
    });
    gsap.from("#heroBigImg", {
      x: 300,
      duration: 2,
      ease: "elastic",
    });
  }, [imgTag]);

  return (
    <div className="min-h-[100vh] flex items-center px-[50px]">
      <div className="w-[60%] h-[90vh] flex items-center flex-col pr-[50px] pt-[20px]">
        <div className="w-full flex items-center justify-center text-base gap-x-8 font-sandeRegular">
          <img src={logoBlack} alt="logo" className="w-20" />
          <nav>
            <ul id="navbar" className="flex gap-x-8">
              <a
                href="#"
                className="border-b-[1px] hover:border-orange-400 transition-colors"
              >
                <li>Home</li>
              </a>
              <a
                href="#"
                className="border-b-[1px] hover:border-orange-400 transition-colors"
              >
                <li>About</li>
              </a>
              <a
                href="#"
                className="border-b-[1px] hover:border-orange-400 transition-colors"
              >
                <li>Bungalows</li>
              </a>
              <a
                href="#"
                className="border-b-[1px] hover:border-orange-400 transition-colors"
              >
                <li>Services</li>
              </a>
              <a
                href="#"
                className="border-b-[1px] hover:border-orange-400 transition-colors"
              >
                <li>Booking</li>
              </a>
            </ul>
          </nav>
          <button className="px-4 pt-[3px] pb-[1px] border-[1px] border-black rounded-lg order-[1px] hover:border-orange-400 hover:text-orange-400 transition-colors">
            Contact
          </button>
        </div>
        <p className="text-center text-6xl font-sandeExtraBold mt-[90px] hero-title">
          Where Nature{" "}
          <span className="block hero-title font-sandeExtraBold">
            Embraces Luxury
          </span>
        </p>
        <hr className="w-[70%] mt-10" />
        <button
          id="bngName"
          className="mt-4 flex items-center justify-between py-1 px-4 border-[1px] border-black rounded-lg hover:border-orange-400 hover:text-orange-400 transition-colors"
        >
          {imgTag}
          <FaLink className="ml-2" />
        </button>
        <div className="relative h-[300px] w-[70%] rounded-3xl overflow-clip mt-4">
          <img
            id="heroImg"
            src={imgUrl}
            alt="hero-main"
            className="h-[300px] w-full object-cover rounded-3xl"
          />
        </div>
        <div
          id="bungSelect"
          className="mt-5 w-[50%] gap-x-5 flex justify-center"
        >
          {imgList.map((image, i) => (
            <img
              onClick={() => {
                setImgUrl(image.url);
                setImgTag(image.name);
                setMainImgUrl(image.mainUrl);
                setDescOne(image.desc01);
                setDescTwo(image.desc02);
              }}
              key={i}
              src={image.url}
              alt={image.name}
              className={`w-12 h-12 rounded-full ${
                imgUrl == image.url ? "border-2 border-yellow-500" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div
        id="desc"
        className="z-20 absolute right-[70px] text-white text-xl font-quicksandRegular"
      >
        <p>{descOne}</p>
        <p>{descTwo}</p>
      </div>
      <ImageSlide id="heroBigImg" mainImgUrl={mainImgUrl} />
    </div>
  );
};

export default Hero;
