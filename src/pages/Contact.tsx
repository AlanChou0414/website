import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.section}>
      <form>
        <fieldset className={styles.fieldset}>
          <legend>Contact Me</legend>
          <div className={styles.userName}>
            <div className={styles.userNameInput}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" maxLength={10} placeholder='Chou' />
            </div>
            <div className={styles.userNameInput}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" maxLength={10} placeholder='Alan' />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" maxLength={30} placeholder='alan@gmail.com' />
          <label htmlFor="message">Message</label>
          <textarea id="message" cols={10} rows={10} placeholder='text' />
          <div className={styles.btn}>
            <button>SEND</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}
export default Contact