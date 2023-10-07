import { Button } from "@/components/ui/button";
import Logo from "@/assets/main.png";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 pt-20 w-full">
      <div className="flex flex-col gap-5 flex-3 pt-20">
        <h3 className="text-5xl leading-snug">
          I'm{" "}
          <span className="text-[#FEC86A]">
            Abhishek Panwar <br />
          </span>{" "}
          Frontend Developer & Cypress Tester
        </h3>
        <Button
          variant="outline"
          className="max-w-max border-[#FEC86A] text-[#FEC86A]"
        >
          Contact Me
        </Button>
        <div className="flex gap-3 items-center mt-10">
          <Separator className="bg-[#FEC86A] w-20" />
          <Link to="/">
            <BsInstagram />
          </Link>
          <Link to="/">
            <BsGithub />
          </Link>
          <Link to="/">
            <BsWhatsapp />
          </Link>
          <Link to="/">
            <BsTwitter />
          </Link>
          <Link to="/">
            <BsLinkedin />
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-end flex-1">
        <img
          src={Logo}
          alt="Logo"
          className=" min-w-full max-h-[650px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
