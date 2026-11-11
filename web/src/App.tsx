import { Table, TableBody, TableCell, TableHead, TableRow, Pagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchContracts } from './api/contracts'
import type { ContractPage } from './types'
import './App.css'

function App() {
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [result, setResult] = useState<ContractPage | null>(null)

  useEffect(() => {
    fetchContracts({ page, pageSize }).then(setResult)
  }, [page, pageSize])

  if (!result) return <p>attendez...</p>

  return (
    <div style={{ padding: 24 }}>
      <h2>Contract Management</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Contract title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Last updated</TableCell>
            <TableCell>Ver</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.data.map((c) => (
            <TableRow key={c.id}>
              <TableCell>{c.title}</TableCell>
              <TableCell>{c.type}</TableCell>
              <TableCell>{c.language}</TableCell>
              <TableCell>{c.updatedAt}</TableCell>
              <TableCell>V{c.ver}</TableCell>
              <TableCell>{c.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={result.pagination.totalPages}
        page={page}
        onChange={(_, p) => setPage(p)}
        showFirstButton
        showLastButton
      />
    </div>
  )
}

export default App
