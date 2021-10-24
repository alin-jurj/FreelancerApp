import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRouter from './routes/user.js';
import portofolioRouter from './routes/portofolio.js';
import jobofferRouter from './routes/joboffer.js';
import complaintRouter from './routes/complaint.js';

dotenv.config();

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.use('/user', userRouter);
app.use('/portofolio', portofolioRouter);
app.use('/joboffer', jobofferRouter);
app.use('/complaint', complaintRouter);

const PORT = process.env.PORT|| 5000;
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));