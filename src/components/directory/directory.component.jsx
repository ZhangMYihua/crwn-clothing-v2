import DirectoryItem from '../directory-item/directory-item.component'

import { DirectoryContainer } from './directory.styles'

const Directory = (props) => {

    return (
        <DirectoryContainer>
            {props.categories.map(category =>
                <DirectoryItem category={category} key={category.id}/>
            )}
        </DirectoryContainer>
    )
}

export default Directory