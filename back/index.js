const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSesstion = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const hpp = require('hpp');
const helmet = require('helmet');
// const passprotConfig = require('./passport');
// const db = require('./models');


const prod = process.env.NODE_ENV === 'production';

const app = express();

if (prod) {
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combined'));
    app.use(cors({
        origin: 'http://easyho.com',
        credentials: true,
    }))

} else {
    app.use(morgan('dev'));
    app.use(cors({
        origin: true,
        credentials: true,
    }))
}

app.get('*', (req, res) => {
    res.end('hello world');
})

app.listen( prod ? process.env.PORT : 3065, () => {
    console.log('server is running on 3065')
})