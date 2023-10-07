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

const Contact = () => {
  return (
    <div className="mt-8 mb-3 flex flex-col gap-3">
      <div className="flex gap-1 items-center">
        <Separator className="w-10 mr-1" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Button variant="destructive">
                <RiMailSendLine className="mr-1" />
                abhishekpanwar1718@gmail.com
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
        <Button variant="outline">
          <RiPhoneLine className="mr-1" />
          +91-9991237576
        </Button>
      </div>
      <div className="flex gap-1 items-center">
        <Separator className="w-10 mr-1" />
        <Button variant="secondary" className="max-w-max">
          <GrLocationPin className="mr-1" /> Gurugram Haryana
        </Button>
      </div>
    </div>
  );
};

export default Contact;
