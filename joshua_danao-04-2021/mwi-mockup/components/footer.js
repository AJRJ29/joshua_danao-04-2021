import React, { useState } from 'react';
import styles from '../styles/footer.module.css';


export default function Footer({names}) {
  const [newName, setNewNames] = useState()
  const [clicked, setClicked] = useState(0)

const handleClick = (e) => {
  e.preventDefault()
  setNewNames(names)
  setClicked(1)
  if(clicked === 1) {
    alert("link has been click")
  }
  console.log(clicked)
} 

if(newName) {
  return(
    <div className={styles.footer}>
    <h1 className={styles.banner}>HEADING ONE</h1>
    <p className={styles.content}><a className={styles.contentLink} onClick={handleClick}href=""> click here</a></p>
    <ul className={styles.contentNames}>
      {newName.map((name, i) => (
        <li key={i}>
          <h1>{name.firstName} {name.lastName}</h1>
        </li>
      ))}
     </ul>
    <div className={styles.footbar}>
      <h4>Midwestern Interactive Benchmark Test</h4>
    </div>
  </div>
  )
} else {
  return(
    <div className={styles.footer}>
      <h1 className={styles.banner}>HEADING ONE</h1>
      <p className={styles.content}><a className={styles.contentLink} onClick={handleClick}href=""> click here</a></p>
      <div className={styles.footbar}>
        <h4>Midwestern Interactive Benchmark Test</h4>
      </div>
    </div>
  )
  }
}

