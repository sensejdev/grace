import { Layout } from "antd";
const { Header } = Layout;

import logo from "../../../public/logo.png";
import leaf from "../../../public/leaf.png";
import styles from "./style.module.scss";

export function HeaderLayout() {
  return (
    <Header className={styles.header}>
      <span className={styles.leaf}>
        <img src={leaf} alt="leaf border" />
      </span>
      <a href="/">
        <img className={styles.logo} src={logo} alt="" />
      </a>
      <span className={styles.leaf}>
        <img src={leaf} alt="leaf border" />
      </span>
    </Header>
  );
}
