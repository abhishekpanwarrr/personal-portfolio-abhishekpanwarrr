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
import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-between  gap-8 md:flex-row"
      id="contact"
    >
      <div className="mb-3 mt-8 flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <Separator className="mr-1 w-10" />
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
        <div className="flex items-center gap-1">
          <Separator className="mr-1 w-10" />
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
        <div className="flex items-center gap-1">
          <Separator className="mr-1 w-10" />
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
        <div className="mt-5 flex items-center gap-3">
          <Separator className="w-20 bg-[#FEC86A]" />
          <Link
            to="https://github.com/abhishekpanwarrr"
            target="_blank"
            aria-label="Link for Github Account"
            className="p-1"
          >
            <BsGithub />
          </Link>
          <Link
            to="https://wa.me/+919991237576"
            target="_blank"
            aria-label="Link for Whatsapp Account"
            className="p-1"
          >
            <BsWhatsapp />
          </Link>
          <Link to="/" aria-label="Link for Twitter Account" className="p-1">
            <BsTwitter />
          </Link>
          <Link
            to="https://www.linkedin.com/in/abhishekpanwarrr/"
            target="_blank"
            aria-label="Link for LinkedIn Account"
            className="p-1"
          >
            <BsLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
