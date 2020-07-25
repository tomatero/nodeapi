const express = require('express');
const app = express();
const morgan = require("morgan");

//ROTAS
const { getPosts } = require('./routes/post');


//MIDDLEWARE
app.use(morgan("dev"));


app.get("/", getPosts);

const port = 8080
app.listen(port, () => {
	console.log(`API NODE JS RODANDO NA PORTA: ${port}`);
});


// npm run dev