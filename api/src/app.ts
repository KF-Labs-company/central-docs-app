import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { routes } from './routes'
import { errorHandler } from './middlewares/errorHandler'

export const app = express()

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
)

app.use(express.json())
app.use(cookieParser())

app.use(routes)
app.use(errorHandler)
