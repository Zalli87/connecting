import css from '../Header/Header.module.css';

import Contacts from 'components/Contacts/Contacts';


import { useState } from "react";

const Header = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
              <div className={css.header}>
        <h1>"Гуртйся"</h1>
        <ul className={css.menu}>
            <li className={css.menuItem}><button className={css.maunuItemBtn}>Навчання</button></li>
            <li className={css.menuItem}><button className={css.maunuItemBtn}>Форум</button></li>
            <li className={css.menuItem}><button className={css.maunuItemBtn}>Про платформу</button></li>
            <li className={css.menuItem}><button className={css.maunuItemBtn} type="button" onClick={() => setValue(true)}>Rjynfynf</button></li>
            <li className={css.menuItem}><button className={css.maunuItemBtn}>Вхід\Реєстрація</button></li>          
        </ul>    
            </div>
      
          {value ? <Contacts /> : ""}

    </div>
  );
};  

export default Header;