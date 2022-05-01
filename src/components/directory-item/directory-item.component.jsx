import { useDispatch } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart.action';

import { properCapitalization } from '../../utils/javascript/string.utils';

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';

const DirectoryItem = ({ directory }) => {
    const dispatch = useDispatch();

    const { imageUrl, title, route } = directory;
    
    const displayTitle = properCapitalization(title);

    const exitCartDropdownMenu = () => dispatch(setIsCartOpen(false));

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