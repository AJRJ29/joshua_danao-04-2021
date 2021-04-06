import styles from '../styles/header.module.css'
export default function Homepage() {
  return(
    <div className={styles.header}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="./mwi-logo.png" alt="" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.banner}>HEADING ONE</h1>
        <div className={styles.contenContainer}>
          <div className={styles.heading}>
            <div></div>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni natus dignissimos iusto autem quibusdam minima ullam eaque voluptatibus molestias! Minus eius hic accusantium, fuga animi alias laudantium perspiciatis soluta.</p>
            <button>Read More</button>
          </div>
          <div className={styles.heading}>
            <div></div>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni natus dignissimos iusto autem quibusdam minima ullam eaque voluptatibus molestias! Minus eius hic accusantium, fuga animi alias laudantium perspiciatis soluta.</p>
            <button>Read More</button>
          </div>
          <div className={styles.heading}>
            <div></div>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magni natus dignissimos iusto autem quibusdam minima ullam eaque voluptatibus molestias! Minus eius hic accusantium, fuga animi alias laudantium perspiciatis soluta.</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}