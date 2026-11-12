import { Table, TableBody, TableCell, TableHead, TableRow, Pagination, TextField, MenuItem, Menu, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchContracts } from './api/contracts'
import type { ContractPage, ContractStatus } from './types'
import { Box, CssBaseline } from '@mui/material'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import PageHeader from './components/PageHeader'

function App() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [result, setResult] = useState<ContractPage | null>(null)

  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<ContractStatus | ''>('')
  const [type, setType] = useState('')


  useEffect(() => {
    fetchContracts({ page, pageSize, search, status: status || undefined, type }).then(setResult)
  }, [page, pageSize, search, status, type])

  if (!result) return <p>attendez svp...</p>

  return (
    <CssBaseline>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <TopBar />
        <Box sx={{ display: 'flex', flex: 1 }}>
          <SideBar />
          <Box sx={{ flex: 1, p: 1 }}>
            <PageHeader />
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <TextField
                placeholder="Search"
                size="small"
                sx={{ minWidth: 140 }}
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1)}}
              >
              </TextField>

              <TextField
                select
                size="small"
                label="Status"
                sx={{ minWidth: 140 }}
                value={status}
                onChange={(e) => { setStatus(e.target.value as ContractStatus | ''); setPage(1)}}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="DRAFT">Draft</MenuItem>
                <MenuItem value="REVIEWING">Reviewing</MenuItem>
                <MenuItem value="RETURNED">Returned</MenuItem>
              </TextField>

              <TextField
                select
                size="small"
                label="Type"
                sx={{ minWidth: 140 }}
                value={type}
                onChange={(e) => { setType(e.target.value); setPage(1)}}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Service">Service</MenuItem>
                <MenuItem value="Confidentiality">Confidentiality</MenuItem>
                <MenuItem value="Licence">Licence</MenuItem>
                <MenuItem value="Supply">Supply</MenuItem>
              </TextField>
            </Box>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
                <Typography>Page {page} of {result.pagination.totalPages}</Typography>
                <TextField
                  select
                  size="small"
                  label="Rows"
                  sx={{ minWidth: 140 }}
                  value={pageSize}
                  onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1)}}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </TextField>
              </Box>
              <Pagination
                count={result.pagination.totalPages}
                page={page}
                onChange={(_, p) => setPage(p)}
                showFirstButton
                showLastButton
              />

            </Box>
          </Box>
        </Box>
      </Box>
    </CssBaseline>
  )
}

export default App
