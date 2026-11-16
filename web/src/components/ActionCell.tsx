import type { ContractStatus } from '../types'
import { Button, Typography } from '@mui/material'

export default function ActionCell({ status }: { status: ContractStatus }) {
  switch (status) {
    case 'DRAFT':
      return <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>Submit to reviewer</Button>
    case 'RETURNED':
      return <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>Upload new</Button>
    case 'REVIEWING':
      return <Typography sx ={{fontSize : 14, color:'grey.600'}}>Waiting for reviewer</Typography>
  }
}
