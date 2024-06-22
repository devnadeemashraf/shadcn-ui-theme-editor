import AppIcon from "@/components/appIcon";

import Navlink from "./navlinks";

const Navbar = () => {
  return (
    <header className="w-full h-16 border-b flex items-center justify-between px-4">
      <AppIcon />
      <Navlink />
    </header>
  );
};

export default Navbar;
