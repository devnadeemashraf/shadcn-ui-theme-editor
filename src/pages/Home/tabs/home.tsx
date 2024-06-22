import SectionWrapper from "@/pages/_components/sectionWrapper";

const HomeTab = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-4xl text-muted-foreground font-mono">Home Tab</h1>
      <p className="text-muted-foreground text-center">
        I am looking forward to some contributions <br /> Click on the Github
        Link above if you're interested ❤️
      </p>
    </SectionWrapper>
  );
};

export default HomeTab;
