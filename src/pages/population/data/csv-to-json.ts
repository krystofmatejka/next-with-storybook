import * as fs from 'fs'
import * as path from 'path'

const main = () => {
  const data = fs.readFileSync(path.join(__dirname, 'data.csv')).toString()
  const [header, ...records] = data.trim().split('\n')
  const parsedHeader = header.split(',').map((item) => item
    .replace(/\s/g, '-')
    .toLowerCase())

  const parsedRecords = records.map((record) => {
    const columns = record.split(',')
    const result = {}
    columns.forEach((column, index) => {
      result[parsedHeader[index]] = (column != '') ? parseInt(column) : null
    })

    return result
  })

  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(parsedRecords, null, 2))
}

main()
