import React from "react";
import { Link } from "./config";

const Navitem = React.memo(({ label, icon: Icon, href }: Link) => {
  return (
    <a href={href} target="_blank">
      <li className="flex items-center justify-center gap-1 cursor-pointer">
        {Icon && <Icon size={16} />}
        <span className="font-medium select-none">{label}</span>
      </li>
    </a>
  );
});

export default Navitem;
