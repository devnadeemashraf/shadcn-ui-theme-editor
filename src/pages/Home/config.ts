import BlockTab from "./tabs/block";
import HomeTab from "./tabs/home";

import { TTabsLists } from "./_types";

const TabsListConfig: TTabsLists = [
  {
    label: "Home",
    value: "home",
    content: HomeTab,
  },
  {
    label: "Blocks",
    value: "blocks",
    content: BlockTab,
  },
];

export { TabsListConfig };
