import React from "react";

import Actions from "./actions";

const AsideHeader = React.memo(() => {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <Actions />
    </header>
  );
});

export default AsideHeader;
