import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/useQuery";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {
  const isPageWide = useMediaQuery("(min-width: 800px)");

  return (
    <div className="sticky top-0 flex h-10 items-center justify-between bg-[#34343A]">
      <h1 className="text-2xl md:text-3xl">Abhishek</h1>
      {isPageWide && (
        <>
          <ul className="flex gap-3">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              {" "}
              <a href="#portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
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
            <SheetDescription>
              <ul className="mt-10 flex flex-col items-center gap-6">
                <li className="max-w-max text-2xl transition-all hover:border-b hover:border-[#FEC86A] hover:text-white">
                  <a href="#">Home</a>
                </li>
                <li className="max-w-max text-2xl transition-all hover:border-b hover:border-[#FEC86A] hover:text-white">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="max-w-max text-2xl transition-all hover:border-b hover:border-[#FEC86A] hover:text-white">
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
