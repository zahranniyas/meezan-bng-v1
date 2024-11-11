import { logoBlack } from "../assets";

const Header = () => {
  return (
    <div className="fixed w-full flex items-center justify-between font-sandeRegular h-[80px] px-10">
      <img src={logoBlack} alt="logo" className="w-20" />
      <nav>
        <ul className="flex text-xl gap-x-10">
          <li>Home</li>
          <li>About</li>
          <li>Bungalows</li>
          <li>Services</li>
          <li>Booking</li>
        </ul>
      </nav>
      <button className="px-4 pt-[3px] pb-[1px] border-[1px] border-black rounded-lg text-xl">
        Contact
      </button>
    </div>
  );
};

export default Header;
