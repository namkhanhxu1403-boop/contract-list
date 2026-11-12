import express from 'express'

const app = express()

app.get('/health', (req, res) => {
  res.json({
    status:
      "ok"
  })
})

app.get('/echo', (req, res) => {
  const q = req.query

  const numberPage = Number(q.page) || 1
  const statusPage = q.status
  res.json({
    page: numberPage,
    status: statusPage
  })
})

app.listen(4000, () => console.log("api on localhost port 4000. received."))
