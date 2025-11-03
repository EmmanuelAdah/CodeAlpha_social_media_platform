const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(mongoose())
app.use(express.urlencoded({ extended: false }));


const router = express.Router()

router.post('/login', (req, res) => {
    console.log(req.body)
})

