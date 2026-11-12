import { Avatar, Box, Typography } from '@mui/material'

export default function TopBar() {
  return (
    <Box sx={{bgcolor:'black', color:'white', height: 56, px:3, display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
      <Typography sx={{fontWeight:700}} component={'div' as any}>
        Contract Portal
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>TE</Avatar>
        <Box>
          <Typography sx={{fontSize: 14 }} component={'div' as any}>
            Test_User
          </Typography>
          <Typography sx={{fontSize: 12, color:'gray.400'}}>
            cs_user
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
