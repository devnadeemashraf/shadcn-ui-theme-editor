import Aside from "@/components/shared/aside";

import PageWrapper from "@/components/shared/wrappers/pageWrapper";
import ShowcaseWrapper from "@/components/shared/wrappers/showcaseWrapper";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TabsListConfig } from "./config";

const Home = () => {
  return (
    <PageWrapper>
      <Aside />
      <ShowcaseWrapper className="px-4 py-3">
        <Tabs defaultValue={TabsListConfig[0].value} className="w-full h-full">
          <TabsList className="w-full flex items-center justify-start">
            {TabsListConfig.map((tab) => {
              return (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {TabsListConfig.map((tab) => {
            const Component = tab.content;
            return (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="w-full h-full"
              >
                <Component />
              </TabsContent>
            );
          })}
        </Tabs>
      </ShowcaseWrapper>
    </PageWrapper>
  );
};

export default Home;
