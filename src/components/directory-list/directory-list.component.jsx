import { useState, useEffect } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import './directory-list.styles.scss';

const DirectoryList = ({ newDirectories }) => {
    const [directories, setDirectories] = useState([]);

    useEffect(() => setDirectories(newDirectories), []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="directories-container">
            {
                directories.map(directory => {
                    return <DirectoryItem key={directory.id} directory={directory} />;
                })
            }
        </div>
    );
}

export default DirectoryList