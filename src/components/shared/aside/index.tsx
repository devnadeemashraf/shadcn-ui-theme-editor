import AsideHeader from "./header";
import Swatches from "./swatches";

const Aside = () => {
  return (
    <aside className="w-full h-full flex flex-col gap-2 col-span-1 border-r overflow-auto">
      <AsideHeader />
      <main className="w-full h-full flex flex-col px-4">
        <Swatches />
      </main>
    </aside>
  );
};

export default Aside;
