import Links from "./config";

import Navitem from "./navitem";

const Navlink = () => {
  return (
    <ul className="flex items-center justify-center gap-4">
      {Links.map((params) => {
        return <Navitem key={params.label} {...params} />;
      })}
    </ul>
  );
};

export default Navlink;
