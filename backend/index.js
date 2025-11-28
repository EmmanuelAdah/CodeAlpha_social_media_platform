require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const commentRouter = require('./router/commentRouter');
const followerRouter = require('./router/followerRouter');
const URI = process.env.MONGODB_URI;

const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  const client = mongoose.connect(URI);

  client.then(() => console.log('Connected to MongoDB...'))
      .catch(err => console.log(err.message));

// Routes
app.use('/api/auth', authRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/follower', followerRouter);
app.use('/comment', commentRouter);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Listening on port ${PORT}`));
