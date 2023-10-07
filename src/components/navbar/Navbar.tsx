import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input"

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center h-10">
      <h1>Abhishek</h1>
      <ul className="flex gap-3">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              ` ${isActive ? "text-white" : "text-[#97989A]"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) =>
              ` ${isActive ? "text-white" : "text-[#97989A]"}`
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              ` ${isActive ? "text-white" : "text-[#97989A]"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div><Input placeholder="Search" />
</div>
      <Sheet>
        {open ? <SheetTrigger>Open</SheetTrigger> : null}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
