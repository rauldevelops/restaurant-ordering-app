import path from 'node:path'
import fs from 'node:fs/promises'

export const menuController = async (req, res) => {
    pathJSON = path.join('data', 'data.json')
    menu = await fs.readFile(pathJSON, 'utf-8')
    res.json(menu)
}