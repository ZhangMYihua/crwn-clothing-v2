import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import { properCapitalization } from '../../utils/javascript/string.utils';

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({ directory }) => {
    const { imageUrl, title, route } = directory;
    const { cart, setCart } = useContext(CartContext);
    
    const displayTitle = properCapitalization(title);

    const exitCartDropdownMenu = () => setCart(false);

    return (
        <DirectoryItemContainer to={route} onClick={exitCartDropdownMenu}>
            <BackgroundImage 
                className='background-image'
                imageUrl={imageUrl} 
            />
            <Body>
                <h2>{displayTitle}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem