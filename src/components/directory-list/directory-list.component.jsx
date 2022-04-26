import { useState, useEffect } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoriesContainer } from './directory-list.styles.jsx';

const DirectoryList = ({ newDirectories }) => {
    const [directories, setDirectories] = useState([]);

    useEffect(() => setDirectories(newDirectories), []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <DirectoriesContainer>
            {
                directories.map(directory => {
                    return <DirectoryItem key={directory.id} directory={directory} />;
                })
            }
        </DirectoriesContainer>
    );
}

export default DirectoryList