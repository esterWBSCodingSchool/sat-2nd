const express = require('express');
const connectDB = require('./config/db')
const usersRouter = require('./routes/usersRouter')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

connectDB();
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
