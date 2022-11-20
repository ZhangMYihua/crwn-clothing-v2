import {Body,BackgroundImage,DirectoryItemContainer} from './directory-item.styles.jsx'

const DirectoryItem = ({category}) => {
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={category.imageUrl}/>
            <Body className='body'>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem