import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from 'state';
import { FormControl, InputBase, Select } from '@mui/material';



const pages = ["Home", "Donate Organs", "Need an Organ", "Connect With Doctor"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDeleteUser = () => {

  }

  return (
    <AppBar sx={{ backgroundColor: "#FFFAFB", position: "fixed" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#FF2625",
              textDecoration: "none",
            }}
          >
            LifeLineup
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#FF2625"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "capitalize",
                  "&:hover":{
                    backgroundColor:"inherit"
                  },
                  "&::after": {
                    content: '""',
                    display: "block",
                    height: "4px",
                    width: "93%",
                    transform: "scaleX(0)",
                    backgroundColor: "#FF2625",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                    position: "absolute", // Add this for positioning the pseudo-element
                    bottom: 0, // Adjust this to position the line where you want
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                <Typography onClick={() => navigate(`/${page}`)}>
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            {!isLoggedIn ? (<Button sx={{ my: 2, color: "black", margin: "0 8px" }}>
              <Typography onClick={() => navigate("/login")}>
                Sign In
              </Typography>
            </Button>) : (
              <FormControl variant='standard' value={`${user.firstName} ${user.lastName}`} sx={{ p: "0rem 1rem" }}>
                <Select
                  value={`${user.firstName} ${user.lastName}`}
                  sx={{
                    backgroundColor: "#FFE5E5",
                    width: "200px",
                    borderRadius: "0.25rem",
                    p: "0.25rem 1rem",
                    "& .MuiSvgIcon-root": {
                      pr: "0.25rem",
                      width: "3rem"
                    },
                    "& .MuiSelect-select:focus": {
                      backgroundColor: "#FFE5E5"
                    }
                  }}
                  input={<InputBase />}
                >
                  <MenuItem value={`${user.firstName} ${user.lastName}`}>
                    <Typography>{`${user.firstName} ${user.lastName}`}</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => navigate(`/profile/${user._id}`)}>
                    User profile
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(setLogout())}>
                    Log Out
                  </MenuItem>
                </Select>
              </FormControl>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar











/*
<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
*/