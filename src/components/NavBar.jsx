import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const menuStatus = Boolean(menu);
    console.log(menuStatus)

    const handleMenu = (event) => {
        console.log(menuStatus)
        setMenu(event.currentTarget)
    }

    const handleClose = () => {
        setMenu(false)
    }

    return (
        <AppBar>
            <Container>
                <Toolbar disableGutters>
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={menu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={menuStatus}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Alt TrackR</MenuItem>
                            <MenuItem onClick={handleClose}>Hidden Lairs</MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Immortal TrackR
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}