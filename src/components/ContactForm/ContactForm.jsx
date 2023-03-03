import { useState } from "react";
import PropTypes from "prop-types";
import css from "../ContactForm/ContactForm.module.css";
import users from "../../data/users.js";



console.log(users);

const ContactForm = ({onSubmit}) => {
   
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState(''); 


 const handleSubmit = (e) => {
      e.preventDefault();
 const data = {
    email,
    password
   }
   users.push(data);
   setEmail('');
   setPassword('');
   console.log(users);
    }
     

 const handlChange = ({ target }) => {
    const { name, value } = target;
   if (name === 'email') {
      setEmail(value);
   } else if (name === 'password') {
     setPassword(value);
    }
  }
  
 
      return (
      <form onSubmit={handleSubmit}>

          <label>Email
              <input
  onChange={handlChange}
  value={email}              
  type="text"
  name="email"
  required
          />
            </label>

            <label>Password
                <input
  onChange={handlChange}
  value={password}              
  type="text"
  name="password"
  required
                        />
                    </label>
   <button  type="submit">Вхід</button>

  </form>     

    )
}
export default ContactForm;
// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// }
