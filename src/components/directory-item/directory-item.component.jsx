import { useNavigate } from 'react-router-dom'

import {Body,BackgroundImage,DirectoryItemContainer} from './directory-item.styles.jsx'

const DirectoryItem = ({category}) => {
    const navigate = useNavigate()

    const onNavigateHandler = () => {
        navigate('shop/'+category.title)
    }

    return (
        
            <DirectoryItemContainer onClick={onNavigateHandler}>               
                <BackgroundImage imageUrl={category.imageUrl}/>
                <Body>
                    <h2>{category.title}</h2>
                    <p>Shop Now</p>
                </Body>
            </DirectoryItemContainer>
        
    )
}

export default DirectoryItem