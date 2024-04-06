const express = require('express');

const app = express();
const PORT = 3001

app.get('/', (req,res) => {
    res.send("Hello from Kyma env")
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})