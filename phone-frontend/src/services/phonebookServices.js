import axios from 'axios';
import fire from '../fire';

const url = 'http://localhost:3001/api';

const createToken = async () => {
  const user = fire.auth().currentUser;
  const token = user && (await user.getIdToken());

  const payloadHeader = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return payloadHeader;
}

export const addToPhonebook = async (name, number) => {
  const header = await createToken();

  const payload = {
    name,
    number,
  }
  try {
    console.log(payload);
    const res = await axios.post(url, payload, header);
    return res.data;

  } catch (e) {
    console.error(e);
  }
};

export const getPhonebookEntries = async () => {
  const header = await createToken();

  try {
    const res = await axios.get(url, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}