// import path from 'node:path'
// import fs from 'node:fs/promises'

export const orderController = async (req, res) => {
    const order = req.body
    console.log('Received order:', order)
    res.status(201).json({ message: 'Order received successfully' })
}