import styles from '../styles/Alert.module.css'

const Alert = () => {
  return (
    <div className={styles.alert}>
      <div className={styles.alertBox}>
        <h1>Message</h1>
        <p>Successfully !</p>
        <p>Thank you for your contact !</p>
      </div>
    </div>
  )
}

export default Alert