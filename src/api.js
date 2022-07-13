require('express-async-errors');
const express = require('express');
const errorManager = require('./middlewares/errorManager');
const loginRouter = require('./routers/loginRouter');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use(errorManager);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
