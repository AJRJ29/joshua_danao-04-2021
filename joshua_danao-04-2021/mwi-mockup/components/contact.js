import styles from '../styles/contact.module.css'

export default function Contact() {
  return(
    <div className={styles.contact}>
      <h1 className={styles.header}>CONTACT</h1>
      <form className={styles.contactForm} action="">
        <div>
          <div className={styles.textContainer}>
            <h4 className={styles.inputText}>Email</h4>
            <h4 className={styles.inputError}>Must use a valid email.</h4>
          </div>
          <input className={styles.emailInput} type="text" />
          <div className={styles.textContainer}>
            <h4 className={styles.inputText}>Subject</h4>
            <h4 className={styles.inputError}>Subject is required.</h4>
          </div>
          <input className={styles.subjectInput} type="text" />
          <div className={styles.textContainer}> 
            <h4 className={styles.inputText}>Message</h4>
            <h4 className={styles.inputError}>Message is required.</h4>
          </div>
          <textarea className={styles.MessageInput} type="text" />
        </div>
        <button className={styles.contactButton}>Submit</button>
      </form>
    </div>
  )
}