import { Box, Typography, Button } from '@mui/material'

export default function PageHeader() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb:2}}>
      <Typography sx={{ fontSize: 20, fontWeight: 600}}>
        Contract Management
      </Typography>

      <Button variant="contained" sx={{ bgcolor: 'black', textTransform: 'none' }}>
        + Upload
      </Button>
    </Box>
  )
}
