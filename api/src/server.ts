import express from 'express'
import { contracts } from './contracts'
import cors from 'cors'

const app = express()
app.use(cors())
app.get('/health', (req, res) => {
  res.json({
    status:
      "ok"
  })
})

app.get('/api/contracts', (req, res) => {
  const q = req.query
  const numberPage = Number(q.page) || 1
  const pageSize = Number(q.pageSize) || 10
  const statusPage = q.status
  const currentType = q.type
  const search = q.search as string | undefined
  const filtered = contracts.filter(
    (c) => (!currentType || c.type === currentType)
      && (!statusPage || c.status === statusPage)
      && (!search || c.title.toLowerCase().includes(search.toLowerCase()))
  )
  const total = filtered.length
  const totalPages = Math.ceil(total / pageSize)
  const start = (numberPage - 1) * pageSize
  const end = start + pageSize

  res.json({
    data: filtered.slice(start, end),
    pagination: {
      page: numberPage,
      pageSize: pageSize,
      total: total,
      totalPages: totalPages
    }
  })
})

app.listen(4000, () => console.log("api on localhost port 4000. received."))
