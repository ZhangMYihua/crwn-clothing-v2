import './category.component.styles.scss'
import { UserContext } from '../../contexts/user.context';
import { CategoriesContext } from '../../contexts/categories.context';
import { useParams } from 'react-router-dom'; //다른곳에서 category 접근하기 위해서 필요함 
import { useContext , useState, useEffect, Fragment} from 'react';

import ProductCard from '../product-card/product-card.component';

const Category = () => {

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => { //바뀔때마다 실행되게 하는것 <useeffect>

        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]) //category, categories Map 이 바뀔때마다 실행된다. 

    return (

        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
            
         
            {   products &&
                products.map((product)=> (
                <ProductCard key = {product.id} product = {product}/>))
            }    
        </div>
            </Fragment>
        
    )
}

export default Category;