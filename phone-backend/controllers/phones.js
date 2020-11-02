const phonesRouter = require('express').Router();


phonesRouter.get('/', (req, res) => {
  return res.send('Hi, from within the phones router GET'); 
});

phonesRouter.post('/', (req, res) => {
  return res.send('Hi, from within the phones router POST');
});

module.exports = phonesRouter;
