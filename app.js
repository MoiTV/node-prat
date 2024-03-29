const fs = require('fs');
const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'hello', app: 'natures' })
// });

// app.post('/', (req, res) => {
//     res.send('post');
// });

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/app/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    })
});

const port = 3000;
app.listen(port, () => console.log(`app running on ${port}`));