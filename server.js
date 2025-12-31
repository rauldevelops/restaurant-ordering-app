import express from 'express'
import cors from 'cors'
import { menuRouter } from './routes/menuRouter.js'

const PORT = 8000

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.static('public'))

app.use('/api/menu', menuRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})