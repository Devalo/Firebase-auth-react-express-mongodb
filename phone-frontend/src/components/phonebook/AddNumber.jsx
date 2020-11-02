import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToPhonebook} from '../../services/phonebookServices';

const AddNumber = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && phone) {
      return addToPhonebook(name, phone);
    }
    return console.log('You must enter a name and a number');
  };
  
  return (
    <div>
      <Link to="/">View phonebook</Link>
    <h2>Add Number</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={({ target }) => setName(target.value)}
      /><br />
      <input
        type="text"
        placeholder="Number"
        onChange={({ target }) => setPhone(target.value)}
      /><br />
      
      <button type="submit">
        Add number
      </button>
    </form>
    </div>
  )
};

export default AddNumber;