import css from '../Header/Header.module.css';
import Contacts from 'components/Contacts/Contacts';
import ContactForm from 'components/ContactForm/ContactForm';
import { useState } from "react";



const Header = () => {

  const [itemName, setItemName] = useState('');
   
  const handleClick = ({target}) => {
    setItemName(target.name)
  };

  

  return (
    <div>
              <div className={css.header}>
        <h1>"Гуртйся"</h1>
        <ul className={css.menu}>
            <li className={css.menuItem}><button className={css.maunuItemBtn}type="button" name="learn" onClick={handleClick}>Навчання</button></li>
            <li className={css.menuItem}><button className={css.maunuItemBtn}type="button" name="forum" onClick={handleClick}>Форум</button></li>
            <li className={css.menuItem}><button className={css.maunuItemBtn}type="button" name="about" onClick={handleClick}>Про платформу</button></li>
            <li className={css.menuItem}><button className={css.maunuItemBtn} type="button" name="contacts" onClick={handleClick}>Контакти</button></li>
            <li className={css.menuItem}><button className={css.maunuItemBtn}type="button" name="enter" onClick={handleClick}>Вхід\Реєстрація</button></li>          
        </ul>    
            </div>
      {itemName === 'learn' && (<p>Навчання</p>)}
      {itemName === 'forum' && (<p>Forum</p>)}
      {itemName === 'about' && (<p>Про нас</p>)}
      {itemName === 'contacts' &&(<Contacts name={itemName} />)}
      {itemName === 'enter' && (<ContactForm />)}
      {/* <p>{user}</p> */}
    </div>
  );
};  

export default Header;