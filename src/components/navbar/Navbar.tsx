import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { Link } from "react-router-dom";
// import { Input } from "@/components/ui/input";
import { useMediaQuery } from "@/hooks/useQuery";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {
  let isPageWide = useMediaQuery("(min-width: 800px)");
  console.log("isPageWide", isPageWide);
  return (
    <div className="flex justify-between items-center h-10 sticky top-0 bg-[#34343A]">
      <h1>Abhishek</h1>
      {isPageWide && (
        <>
          <ul className="flex gap-3">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              {" "}
              <a href="#portfolio" className="hover:underline">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
          {/* <div>
            <Input placeholder="Search" />
          </div> */}
        </>
      )}
      <Sheet>
        {!isPageWide ? (
          <SheetTrigger aria-label="menu-button">
            <HiOutlineMenuAlt3 className="h-8 w-8" aria-label="menu-button" />
          </SheetTrigger>
        ) : null}
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
            <SheetDescription>
              <ul className="flex flex-col gap-6 mt-10 items-center">
                <li className="text-2xl transition-all hover:border-b max-w-max hover:border-[#FEC86A] hover:text-white">
                  <a href="#">Home</a>
                </li>
                <li className="text-2xl transition-all hover:border-b max-w-max hover:border-[#FEC86A] hover:text-white">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="text-2xl transition-all hover:border-b max-w-max hover:border-[#FEC86A] hover:text-white">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
