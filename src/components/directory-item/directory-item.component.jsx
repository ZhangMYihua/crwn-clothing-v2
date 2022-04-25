import { Link } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectoryItem = ({ directory }) => {
    const { imageUrl, title } = directory;
    const displayTitle = title.toUpperCase();

    return (
        <Link className="directory-item-container" to={`/shop/${title}`}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="directory-body-container">
                <h2>{displayTitle}</h2>
                <p>SHOP NOW</p>
            </div>
        </Link>
    );
}

export default DirectoryItem