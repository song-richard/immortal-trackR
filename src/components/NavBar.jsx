import { AppBar, Container, Toolbar } from "@mui/material";
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return (
        <AppBar>
            <Container>
                <Toolbar>
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
    )
}