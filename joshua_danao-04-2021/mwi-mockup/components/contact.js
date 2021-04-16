import React, { useState } from 'react';
import styles from '../styles/contact.module.css'

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [emailError, setEmailError] = useState({})
  const [subjectError, setSubjectError] = useState({})
  const [messageError, setMessageError] = useState({})

  let handleEmail = (e) => {
    setEmail(e.target.value)
  }

  let handleSubject = (e) => {
    setSubject(e.target.value)
  }

  let handleMessage = (e) => {
    setMessage(e.target.value)
  }
  console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation()
    setEmail("")
    setSubject("")
    setMessage("")
 }

  const formValidation = () => {
    const emailError = {}
    const subjectError = {}
    const messageError = {}
    let isValid = true

    if(email.trim().length < 10) {
      emailError.emailNotValid = "Must use a valid email"
      isValid = false
    }
    if(subject.trim().length === 0) {
      subjectError.subjectNotValid = "Subject required"
      isValid = false
    }
    if(message.trim().length === 0) {
      messageError.messageNotValid = "Message required"
      isValid = false
    }
    setEmailError(emailError)
    setSubjectError(subjectError)
    setMessageError(messageError)
    return isValid
  }


  return(
    <div className={styles.contact}>
      <h1 className={styles.header}>CONTACT</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div>
          <div className={styles.textContainer}>
            <h4 className={styles.inputText}>Email</h4>
            {Object.keys(emailError).map((key) => {
              return <h4 className={styles.inputError}>{emailError[key]}</h4>
            })}
          </div>
          <input className={styles.emailInput} value={email} type="text" onChange={handleEmail}/>
          <div className={styles.textContainer}>
            <h4 className={styles.inputText}>Subject</h4>
            {Object.keys(subjectError).map((key) => {
              return <h4 className={styles.inputError}>{subjectError[key]}</h4>
            })}
          </div>
          <input className={styles.subjectInput} value={subject} type="text" onChange={handleSubject}/>
          <div className={styles.textContainer}> 
            <h4 className={styles.inputText}>Message</h4>
            {Object.keys(messageError).map((key) => {
              return <h4 className={styles.inputError}>{messageError[key]}</h4>
            })}
          </div>
          <textarea className={styles.MessageInput} value={message} type="text" onChange={handleMessage}/>
        </div>
        <button className={styles.contactButton} type="submit" >Submit</button>
      </form>
    </div>
  )
}