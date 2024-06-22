import SwatchRenderer from "./swatchRenderer";

import { swatchVariables } from "./_config";

const Swatches = () => {
  return (
    <ul className="flex-1 flex flex-col gap-4">
      <SwatchRenderer variables={swatchVariables} />
    </ul>
  );
};

export default Swatches;
