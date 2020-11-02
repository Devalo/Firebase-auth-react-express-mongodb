import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPhonebookEntries } from '../../services/phonebookServices';

const ListAllNumbers = () => {
  const [entries, setEntries] = useState();

  useEffect(() => {
    const fetchEntries = async () => {
      const fetchedEntries = await getPhonebookEntries();
      setEntries(fetchedEntries);
    }
    fetchEntries();
  }, [])

  if (entries === undefined) {
    return null;
  }

  return (
    <div>
      <Link to="/add-number">Add number</Link>
      <h2>Phone numbers</h2>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
          <tr>
            <td>{entry.name}</td>
            <td>{entry.number}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) 
};

export default ListAllNumbers;