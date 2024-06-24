import { Layout } from "antd";

import styles from "./style.module.scss";
import { Banner } from "../intro";

const { Content } = Layout;

export function ContentLayout() {
  return (
    <Content className={styles.content}>
      <Banner />
    </Content>
  );
}
