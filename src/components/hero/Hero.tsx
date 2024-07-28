import { Button } from "@/components/ui/button";
import Logo from "@/assets/main.avif";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row">
      <div className="flex-3 flex flex-col gap-5 pt-20">
        <h3 className="text-3xl md:text-4xl lg:text-5xl leading-snug">
          I'm{" "}
          <span className="text-[#FEC86A]">
            Abhishek Panwar <br />
          </span>{" "}
          <span className="text-xl md:text-2xl">Frontend Developer</span>
        </h3>
        <Button
          variant="outline"
          className="max-w-max border-[#FEC86A] text-[#FEC86A]"
        >
          <a href="#contact">Contact Me</a>
        </Button>
        <div className="mt-10 flex items-center gap-3">
          <Separator className="w-20 bg-[#FEC86A]" />
          <Link
            to="https://github.com/abhishekpanwarrr"
            target="_blank"
            aria-label="Link for Github Account"
            className="p-1 text-xl"
          >
            <BsGithub />
          </Link>
          <Link
            to="https://wa.me/+919991237576"
            target="_blank"
            aria-label="Link for Whatsapp Account"
            className="p-1 text-xl"
          >
            <BsWhatsapp />
          </Link>
          <Link
            to="https://www.linkedin.com/in/abhishekpanwarrr/"
            target="_blank"
            aria-label="Link for LinkedIn Account"
            className="p-1 text-xl"
          >
            <BsLinkedin />
          </Link>
        </div>
      </div>
      <div className="flex flex-1 items-end justify-end ">
        <img
          src={Logo}
          alt="Logo"
          className="max-h-[650px] min-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
