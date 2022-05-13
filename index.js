const express = require("express");
const app = express();
const PORT = 6000;

const userRouter = require('./routes/users.route');

app.use(express.json());
app.use('/users', userRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})