import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData() {

    try {
        const dataPath = path.join('data', 'data.json')
        const data = await fs.readFile(dataPath, 'utf-8')
        const parsedData = JSON.parse(data)
        return parsedData
    } catch (err) {
        console.error('Error reading data file:', err)
        return []
    }

}