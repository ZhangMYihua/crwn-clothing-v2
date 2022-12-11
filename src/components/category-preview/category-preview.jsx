import './category-preview.styles.scss'

import { Link } from 'react-router-dom'

import ProductCard from '../product-card/product-card.component'

const CatergoryPreview = ({title, products}) => {  //밑에 h2 안에 span 을 할당해주는것은 h2 자체를 클릭했을떄 넘어가는거보다 텍스트 자체를 클릭해서 넘어가도록 구현하기위함
return(
    <div className='category-preview-container'>
        <h2>
            <Link className =" title" to={title}>
                {title.toUpperCase()}
            </Link>
        </h2>
        <div className='preview'>
            {
                products.filter((_, idx) =>  idx <4  //4개만 디스플레이하도록 필터링 하여 표기한다

            ).map((product) => 

                <ProductCard key ={products.id} product = {product} />
                
                )
            }

        </div>

    </div>
)
}

export default CatergoryPreview