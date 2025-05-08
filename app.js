const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require("./routers/router");
const notFound = require(`./middlewares/notFound.js`);
const errorHandler = require(`./middlewares/errorHandler.js`);

app.use( express.static('public') );
app.use( express.json() );

app.use ( "/posts", postsRouter );

app.use(notFound); // Not Found
app.use(errorHandler); // Messaggio d'errore

app.listen( port, () => {
    console.log( `App in ascolto sulla porta ${port}` );
})