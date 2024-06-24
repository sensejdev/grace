import styles from "./style.module.scss";
import gameName from "../../../public/eldenring.webp";

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.logo}>
        <img src={gameName} alt="game logo" />
      </div>
    </div>
  );
}
