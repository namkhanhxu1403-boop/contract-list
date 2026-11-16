import { Box, Typography, List, ListItemButton, ListItemText, IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'


export default function SideBar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <Box sx={{width: collapsed ? 56 : 220, bgcolor:'white', borderRight:'1px solid #e5e5e5', py:2, transition: 'width 0.2s'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 1, mb: 1 }}>
        {!collapsed && <Typography sx={{ fontSize: 12, color: 'grey.600', px: 1 }}>MENU</Typography>}
        <IconButton size="small" onClick={onToggle}>
          {collapsed ? <ChevronRightIcon fontSize="small" /> : <ChevronLeftIcon fontSize="small" />}
        </IconButton>
      </Box>

      {!collapsed && (
        <List>
          <ListItemButton>
            <ListItemText primary="Contract template" />
          </ListItemButton>
          <ListItemButton selected sx={{ borderLeft: '3px solid', borderColor: 'primary.main' }}>
            <ListItemText primary="Contract Management" />
          </ListItemButton>
        </List>
      )}
    </Box>
  )
}
