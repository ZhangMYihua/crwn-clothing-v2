import Categories from "../categories"
import styles from './directory.module.scss'
const Directory = ({categories}) => {

  return(  <div className={styles.directoryContainer}>
  {categories?.map(categorie => <Categories key={categorie?.id} title={categorie?.title} image={categorie?.imageUrl}/> )}
</div>)
}

export default Directory