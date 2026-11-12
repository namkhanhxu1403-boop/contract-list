import { Box, Typography, List, ListItemButton, ListItemText } from '@mui/material'

export default function SideBar() {
  return (
    <Box sx={{width:220, bgcolor:'white', borderRight:'1px solid #e5e5e5', py:2}}>
      <Typography sx={{ fontSize: 12, color: 'grey.600', px: 2, mb: 1 }}>
        MENU
      </Typography>
      <List>
        <ListItemButton selected sx ={{ borderLeft: '3px solid', borderColor: 'primary.main' }}>
          <ListItemText primary='Contract Template' />
        </ListItemButton>
      </List>
    </Box>
  )
}
