require('express-async-errors');
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const errorManager = require('./middlewares/errorManager');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const categoriesRouter = require('./routers/categoriesRouter');
const postRouter = require('./routers/postRouter');
const swaggerPtDoc = require('./swaggerPt.json');

// ...

const app = express();

app.use(express.json());

app.use('/docs/pt', swaggerUI.serve, swaggerUI.setup(swaggerPtDoc));

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.use(errorManager);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
