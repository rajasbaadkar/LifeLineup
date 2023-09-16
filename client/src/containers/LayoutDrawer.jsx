import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const drawerWidth = 240;

const StyledAppBar = styled(AppBar)({
  width: drawerWidth
});

const StyledDrawer = styled(Drawer)({
  width: `${drawerWidth + 60}px`,
  minWidth:"200px"
});

const LayoutDrawer = () => {
  return (
    <div>
      <CssBaseline />
      <Drawer sx={{width:"200px", minWidth:"200px"}}>
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemText primary="Item" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default LayoutDrawer;
