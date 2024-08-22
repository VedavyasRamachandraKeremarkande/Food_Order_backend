import express from 'express';
import App from './services/ExpressApp';
import dbConnection from './services/Database';
import { PORT } from './config';

const StartServer = async () => {

    const app = express();

    await dbConnection()

    await App(app);

    app.listen(PORT, () => {
        console.log(`Listening to port  ${PORT}`);
    })
}

StartServer();

// import express from 'express'
// import { AdminRoute, VandorRoute } from './routes'
// import mongoose, { ConnectOptions } from 'mongoose'
// import { MONGO_URI } from './config'
// require('dotenv').config()

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// // app.use('/', (req, res) => {
// //   // Middleware logic here
// //   return res.json('Hello from Food order')
// // })

// // ... existing code ...
// app.use('/admin', AdminRoute)
// app.use('/vendor', VandorRoute)

// try {
//   mongoose.connect(MONGO_URI).then((result) => {
//     //console.clear()
//     console.log('Connected to mongoose')
//   })
// } catch (err) {
//   console.log(err)
//   process.exit(1)
// }

// //  const db = process.env.MONGO_URI

// //  const connectDB = async () => {
// //    try {
// //      console.log(db)
// //      await mongoose.connect(`${db}`, {
// //        useNewUrlParser: true,
// //        useUnifiedTopology: true,
// //      })
// //      console.log('MongoDB connected')
// //    } catch (error) {
// //      console.log(error.message)
// //      process.exit(1)
// //    }
// //  }

// const PORT = process.env.PORT || 8000

// app.listen(PORT, () => {
//   console.clear()
//   console.log(`Server is running on port ${PORT}`)
// })
