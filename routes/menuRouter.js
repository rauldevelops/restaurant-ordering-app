import { menuController } from '../controllers/menuController.js'
import express from 'express'

export const menuRouter = express.Router()

menuRouter.get('/', menuController)