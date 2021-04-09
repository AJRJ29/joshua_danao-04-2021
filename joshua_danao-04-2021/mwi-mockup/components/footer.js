import styles from '../styles/footer.module.css'

export default function Footer() {
  return(
    <div className={styles.footer}>
      <h1 className={styles.banner}>HEADING ONE</h1>
      <p className={styles.content}>Remove the duplicate in 2 Javascript objects and output the list of distinct names in an unordered list when this <a className={styles.contentLink} href=""> link is clicked</a>, if the operation has been completed already notify the user that this has already been done.</p>
      <div className={styles.footbar}>
        <h4>Midwestern Interactive Benchmark Test</h4>
      </div>
    </div>
  )
}