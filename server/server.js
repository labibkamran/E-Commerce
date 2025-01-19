const express = require('express');
const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

mongoose.connect('mongodb+srv://labibkamran2003:S76bR1MR2N0Y4f6U@ecommere.phqnd.mongodb.net/'
    ).then(() => {
        console.log('Database connected');
    }).catch((err) => {
        console.log(err);
    });
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 
            'Authorization',
            'Catche-Control',
            'Expires',
            'Pragma' 
        ],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());


app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});