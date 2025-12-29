import path from 'node:path'
import fs from 'node:fs/promises'

export const menuController = async (req, res) => {
    const pathJSON = path.join('data', 'data.json')
    const menu = await fs.readFile(pathJSON, 'utf-8')
    res.json(JSON.parse(menu))
}