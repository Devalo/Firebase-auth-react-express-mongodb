const express = require('express');

const phonesRouter = require('./controllers/phones');
const app = express();

app.use('/api', phonesRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});