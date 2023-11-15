import styles from "./styles/Alert.module.css";

function AlertMsg({ message }) {
  return <div className={styles.alertContainer}>{message}</div>;
}

export default AlertMsg;
