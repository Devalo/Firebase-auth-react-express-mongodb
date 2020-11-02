import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddNumber = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`submitted: ${name} - ${phone}`);
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