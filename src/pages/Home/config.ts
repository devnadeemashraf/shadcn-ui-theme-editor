import BlockTab from "./tabs/block";
import HomeTab from "./tabs/home";

const TabsListConfig = [
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
