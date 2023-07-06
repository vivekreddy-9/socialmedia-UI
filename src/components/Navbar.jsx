import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme'
import styled from '@emotion/styled'                              
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})
const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0px 10px",
  borderRadius: "theme.shape.borderRadius",
  width:"40%",
}));
const Icons = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  cursor:"pointer",
  [theme.breakpoints.up('sm')]: {
    display:"flex",
  },
}));
const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up('sm')]: {
    display:"none",
  },
}));

const Navbar = () => {
  const[open, setOpen]=useState(false)
  return (
  <ThemeProvider theme={theme}>  
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>Facebook</Typography>
        <Pets sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
        <Mail/>
         </Badge>
        <Badge badgeContent={4} color="error">
        <Notifications/>
         </Badge>
         <Avatar sx={{width:30, height:30}} alt="Vivek Reddy" src="https://images.pexels.com/photos/15577335/pexels-photo-15577335/free-photo-of-landscape-people-woman-legs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
         onClick={e=>setOpen(true)}/>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
         <Avatar sx={{width:30, height:30}} alt="Vivek Reddy" src="https://images.pexels.com/photos/15577335/pexels-photo-15577335/free-photo-of-landscape-people-woman-legs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <Typography variant='span'>Vivek</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  </ThemeProvider>
  )
}

export default Navbar
