import ActionItem from "./actionItem";

import { actions } from "./_config";

const Actions = () => {
  return (
    <ul className="flex items-center justify-center ml-auto gap-3">
      {actions.map((action) => {
        return <ActionItem key={action.label} {...action} />;
      })}
    </ul>
  );
};

export default Actions;
