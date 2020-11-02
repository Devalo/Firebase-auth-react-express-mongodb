const phonesRouter = require('express').Router();
const Phone = require('../models/phone');


phonesRouter.get('/', async (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const phones = await Phone.find({});
    return res.json(phones.map((phone) => phone.toJSON()));
  }
  return res.status(403).send('Not authorized');
});

phonesRouter.post('/', (req, res) => {
  const auth = req.currentUser;
  if (auth) {
    const phone = new Phone(req.body);
    const savedPhone = phone.save();

    return res.status(201).json(savedPhone);
  }
  return res.status(403).send('Not authorized');
});

module.exports = phonesRouter;
