import styles from './categories.module.scss'

const Categories = ({title, image}) => {

  return (
  <div className={styles.categoryContainer}>
  {/* <img /> */}
  <div className={styles.bgImage} style={{backgroundImage : `url(${image})`}} />
  <div className={styles.categoryBodyContainer}>
    <h2>{title}</h2>
    <p>Shop Now</p>

  </div>
</div>)
}

export default Categories