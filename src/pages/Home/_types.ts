export type TTabsList = {
  label: string;
  value: string;
  content: () => JSX.Element;
};

export type TTabsLists = TTabsList[];
