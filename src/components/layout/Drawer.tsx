// Drawer.tsx
"use client"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer, closeDrawer } from "@/lib/redux/reducers/Slice/drawerSlice"
import { RootState } from "@/lib/redux/store/store";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { getToken } from "next-auth/jwt";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: 0,
  backgroundColor: '#fff',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  minHeight: '100vh',
  width: '100%', // Essential base
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    width: `calc(100% - ${drawerWidth}px)`, // This prevents overflow!
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open?: boolean }>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  minHeight: 64,
  justifyContent: 'center',
  fontSize:"18px"
}));

export default function AppDrawer({ children }: { children?: React.ReactNode }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.Drawer.isOpen);
  const mainMenu = useSelector((state: RootState) => state.Drawer.mainMenu);
  const subMenu = useSelector((state: RootState) => state.Drawer.subMenu);
  const router = useRouter();
  const { data: session } = useSession();
  const isAuthenticated = session;
  const MenuTitle = "Mui tools Portal";
  const sysuserId = session?.user?.sysuserId || '';
  const userInitial = sysuserId ? sysuserId.charAt(0).toUpperCase() : '';

  // Track expanded state per main menu (using string menu_id)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleDrawer = () => {
    isOpen ? dispatch(closeDrawer()) : dispatch(openDrawer());
  };

  const handleNavigation = (path: string) => {
    router.push(path);

  };

  const toggleExpand = (menuId: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(menuId)) next.delete(menuId);
      else next.add(menuId);
      return next;
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isAuthenticated) {
        handleClickOpen()
      }
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [session]);

  const handleRedirectLogin = () => {
    router.push('/');
  }

  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Session Expired"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your session is expired. Please login again
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRedirectLogin} autoFocus>
            Go to Login Page
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          open={isOpen}
          elevation={0}
          sx={{
            backgroundColor: "snow",
            borderBottom: "1px solid #e0e0e0",
            backdropFilter: "blur(8px)",
            color: "text.primary"
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", minHeight: { xs: 56, sm: 64 } }}>
            {/* Left: Hamburger Menu */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              size="large"
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            {/* Right: Logout and User Icon */}

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              {isAuthenticated && (
                <Avatar
                  sx={{
                    bgcolor: 'rgba(201, 218, 140, 1)',
                    color: 'rgba(40, 43, 46, 1)',
                    width: 36,
                    height: 36,
                    fontSize: '1rem',

                  }}
                >
                  {userInitial}
                </Avatar>
              )}
              <IconButton color="inherit" onClick={() => signOut({ callbackUrl: '/pds' })}>
                <Logout />
              </IconButton>
            </Box>

          </Toolbar>
        </AppBar>

        {/* Menu */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundImage: "linear-gradient(180deg, rgba(186, 209, 104, 1), rgba(185, 68, 78, 0.8))",
              color: "#fff",
              boxSizing: 'border-box',
      
            },
          }}
          variant="persistent"
          anchor="left"
          open={isOpen}
          ModalProps={{ keepMounted: true }}
        >
          <DrawerHeader sx={{ backgroundColor: "rgba(170, 202, 55, 0.26)", fontWeight: "bold" }}>
            {MenuTitle}
          </DrawerHeader>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />

          <List sx={{ color: "#fff", flexGrow: 1, p: 0, 
            '& .MuiTypography-root' :{
              fontSize:"16px"
            }

          }}>
            {mainMenu.map((main) => {
              const menuId = String(main.menu_id);
              const subs = subMenu.filter(sub => String(sub.parent_id) === menuId);
              const hasChildren = subs.length > 0;
              const isExpanded = expandedIds.has(menuId);

              return (
                <React.Fragment key={menuId}>
                  {/* Main Menu Item */}
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (hasChildren) {
                          toggleExpand(menuId);
                        } else {
                          handleNavigation(main.uri);
                        }
                      }}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >

                      <ListItemText primary={main.menu_name} />
                      {hasChildren && (
                        isExpanded ? <ExpandLess /> : <ExpandMore />
                      )}
                    </ListItemButton>
                  </ListItem>

                  {/* Submenu with Collapse */}
                  {hasChildren && (
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                      <List disablePadding>
                        {subs.map((sub) => (
                          <ListItem key={sub.menu_id} disablePadding>
                            <ListItemButton
                              sx={{
                                pl: 5,
                                '&:hover': {
                                  backgroundColor: 'rgba(255, 255, 255, 0.15)', // Full-width hover
                                },
                                justifyContent: 'flex-start',
                              }}
                              onClick={() => handleNavigation(sub.uri)}
                            >
                              <ListItemText primary={sub.menu_name} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              );
            })}
          </List>

          {/* User & Logout Section */}

        </Drawer>

        <Main open={isOpen}>
          <Box sx={{ minHeight: 64 }} />
          {children}
        </Main>
      </Box>
    </>
  );
}