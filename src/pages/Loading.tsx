import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-2">
      <Loader
        size={24}
        className="animate-spin ease-in-out text-muted-foreground"
      />
      <span className="text-muted-foreground select-none">
        Initializing Application
      </span>
    </main>
  );
};

export default Loading;
