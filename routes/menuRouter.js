import { menuController } from '../controllers/menuController.js'
import { orderController } from '../controllers/orderController.js'
import express from 'express'

export const menuRouter = express.Router()

menuRouter.get('/', menuController)

menuRouter.post('/order', orderController)