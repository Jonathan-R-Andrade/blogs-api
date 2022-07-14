require('express-async-errors');
const express = require('express');
const errorManager = require('./middlewares/errorManager');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const categoriesRouter = require('./routers/categoriesRouter');
const validateToken = require('./middlewares/validateToken');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);

app.use(validateToken);

app.use('/categories', categoriesRouter);

app.use(errorManager);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
