import styles from "./Search.module.scss"

const Search = () => {
    return(
        <div className={styles.search}>
            <div>
                <i className="bx bx-search-alt"></i>
                <input type='text' placeholder="Я ищу..."/>
            </div>
            <i className="bx bx-customize"></i>
        </div>
    )
}

export default Search