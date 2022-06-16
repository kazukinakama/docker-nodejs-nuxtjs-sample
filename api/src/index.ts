import express from 'express'
import 'reflect-metadata'
import { AppDataSource } from '../data-source'

const app = express()
const port = 80

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.get('/api', (req, res) => res.send('Hello World!'))

app.listen(port)
