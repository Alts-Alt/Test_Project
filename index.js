const express = require('express');
const genres = require('./routers/genres');
const app = express();

app.use(express.json());
app.use(genres);

app.get('/', (req,res) => {
    console.log("Attempted connection");
    res.send('Hello World!!!!!');
});




const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listenting on Port ${port}...`));