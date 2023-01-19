import styles from "./Sidebar.module.scss"

const menu = ['Популярное', 'Сериалы', 'Фильмы', 'Избранное' ]

const Sidebar = ({isSidebarShow, setIsSidebarShow}) => {
    return (
    <div className={styles.sidebar} style={{width: isSidebarShow ? '15%' : '10%'}}>
    <button onClick={() => setIsSidebarShow(!isSidebarShow)}>
        <i className={`bx bx-${isSidebarShow ? 'x' : 'menu'}`}></i>
    </button>
     <ul className={isSidebarShow ? styles.show : ''}>
        {menu.map(title => (
            <li key={title}>
                <a href={title}>{title}</a>
            </li>
        ))}
     </ul>
    </div>
    )
}

export default Sidebar