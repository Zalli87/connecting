import css from '../Header/Header.module.css';

const Header = () => {
    return (
    <>
        <div className={css.header}>
        <h1>"Гуртйся"</h1>
        <ul className={css.menu}>
            <li className={css.menuItem}>Навчання</li>
            <li className={css.menuItem}>Форум</li>
            <li className={css.menuItem}>Про платформу</li>
            <li className={css.menuItem}>Контакти</li>
            <li className={css.menuItem}>Вхід\Реєстрація</li>          
        </ul>    
        </div>
    </>
)
}

export default Header;