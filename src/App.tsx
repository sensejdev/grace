import React from "react";
import { Flex, Layout } from "antd";
import { HeaderLayout } from "./components/header";
import { ContentLayout } from "./components/content";

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
};

const App: React.FC = () => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <HeaderLayout />
      <ContentLayout />
    </Layout>
  </Flex>
);

export default App;
