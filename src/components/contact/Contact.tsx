import { Button } from "../ui/button";
import { GrLocationPin } from "react-icons/gr";
import { Separator } from "../ui/separator";
import { RiMailSendLine, RiPhoneLine } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex justify-between flex-col  md:flex-row gap-8" id="contact">
      <div className="mt-8 mb-3 flex flex-col gap-3">
        <div className="flex gap-1 items-center">
          <Separator className="w-10 mr-1" />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button variant="destructive">
                  <a
                    href="mailto:abhishekpanwar1718@gmail.com"
                    className="flex items-center"
                  >
                    <RiMailSendLine className="mr-1" />
                    abhishekpanwar1718@gmail.com
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to mail</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex gap-1 items-center">
          <Separator className="w-10 mr-1" />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button variant="outline">
                  <a href="tel:+919991237576" className="flex items-center">
                    <RiPhoneLine className="mr-1" />
                    +91-9991237576
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to call</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex gap-1 items-center">
          <Separator className="w-10 mr-1" />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Button variant="secondary" className="max-w-max">
                  <GrLocationPin className="mr-1" /> Gurugram Haryana
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Catch up here</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#EF4444]">Get in touch</h1>
        <div className="flex gap-3 items-center mt-5">
          <Separator className="bg-[#FEC86A] w-20" />
          <Link
            to="https://www.instagram.com/abhishekpanwarrr/"
            target="_blank"
          >
            <BsInstagram />
          </Link>
          <Link to="https://github.com/abhishekpanwarrr" target="_blank">
            <BsGithub />
          </Link>
          <Link to="https://wa.me/+919991237576" target="_blank">
            <BsWhatsapp />
          </Link>
          <Link to="/">
            <BsTwitter />
          </Link>
          <Link
            to="https://www.linkedin.com/in/abhishekpanwarrr/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
