import express from 'express'
import cors from 'cors'

const app = express()

const PORT = 8000

app.use(cors())
app.use(express.json())

app.use(express.static('public'))

app.use('/api/menu', menuRouter)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})