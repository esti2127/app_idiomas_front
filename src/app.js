const express = require('express');
const authRoutes = require('./src/routes/auth.routes');
const lessonRoutes = require('./src/routes/lesson.routes');
const progressRoutes = require('./src/routes/progress.routes');
const cors = require('cors');
require('dotenv').config();



const app = express();



//Cors
app.use(cors({ origin: 'http://localhost:3000' }))

//middlewares
app.use(express.json());

//Routes
app.use('/api/auth', authRoutes)
app.use('/api/lessons', lessonRoutes)
app.use('/api/progress', progressRoutes)




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`)
})