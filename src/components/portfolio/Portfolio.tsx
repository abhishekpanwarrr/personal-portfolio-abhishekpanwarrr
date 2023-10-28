import { projectData } from "@/utils/data";
import { Button } from "../ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";

import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="my-44" id="portfolio">
      <h1 className="text-5xl mb-12 border-b-2 border-[#FEC86A] max-w-max pb-3">
        Portfolio
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projectData?.map((item) => (
          <div className="grid gap-4">
            <div className="relative group overflow-hidden">
              <img
                className="max-w-full group-hover:scale-125 transition-transform duration-300 object-cover h-full"
                src={item.image}
                alt={item.title}
                style={{
                  minWidth:"200px"
                }}
              />
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 items-center justify-center transition-opacity duration-300 flex flex-col gap-4 bg-[rgba(0,0,0,0.6)]">
                <h3 className="text-white text-lg">{item.title}</h3>
                <div className="flex gap-3 flex-col">
                  <Button className="bg-[#FEC96B] hover:bg-[#FEC96B] text-black">
                    <Link to={item.link} target="_blank" className="flex">
                      See more <AiOutlineArrowRight className="text-lg ml-1" />
                    </Link>
                  </Button>
                  <Button className="bg-[#FEC96B] hover:bg-[#FEC96B] text-black">
                    <Link to={item.github} target="_blank" className="flex">
                      Github <AiOutlineArrowRight className="text-lg ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
