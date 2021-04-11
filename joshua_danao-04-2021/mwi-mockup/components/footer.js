import React, { useState, useEffect } from 'react';
import styles from '../styles/footer.module.css';

let object1 = [
  {id: 0, firstName: "Matt", lastName: "Johnson"}, 
  {id: 1, firstName: "Bart", lastName: "Paden"}, 
  {id: 2, firstName: "Ryan", lastName: "Doss"}, 
  {id: 3, firstName: "Jared", lastName: "Malcolm"}
],
 object2 = [
  {id: 0, firstName: "Matt", lastName: "Johnson"}, 
  {id: 1, firstName: "Bart", lastName: "Paden"}, 
  {id: 6, firstName: "Jordan", lastName: "Heigle"}, 
  {id: 7, firstName: "Tyler", lastName: "Viles"}
];

let newArray = [...object1, ...object2];

let uniqNames = [...newArray.reduce((map, obj) => map.set(obj.id, obj),new Map()).values()];

export default function Footer() {
  const [filterName, setFilterNames] = useState()

const handleClick = (e) => {
  e.preventDefault()
  setFilterNames(uniqNames)
} 

if(filterName) {
  return(
    <div className={styles.footer}>
    <h1 className={styles.banner}>HEADING ONE</h1>
    <p className={styles.content}> <a className={styles.contentLink} onClick={handleClick}href=""> click here</a></p>
    <ul className={styles.contentNames}>
      {uniqNames.map((uniqNames, i) => (
        <li key={i}>
          <h1>{uniqNames.firstName} {uniqNames.lastName}</h1>
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

