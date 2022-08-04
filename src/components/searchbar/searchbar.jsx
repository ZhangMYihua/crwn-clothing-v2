import './searchbar.scss'

const Searchbar = ({ className, placeholder, searchChangeHandler }) => (
    <div className='searchbar-container'>
        <input
            className={`searchbar ${className}`}
            type="search"
            placeholder={placeholder}
            onChange={searchChangeHandler}
        />
    </div>
)

export default Searchbar;