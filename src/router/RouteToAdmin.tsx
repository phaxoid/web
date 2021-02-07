import React from "react"
import {Route} from "react-router-dom"
import NavigationBar from "../pages/admin/NavBar"

import { createMuiTheme, ThemeProvider, createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';


const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#4C9A9C',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
    }
  });

  const drawerWidth = 240;

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    },
  }),
);

interface routeInterface {
    path?: string,
    children?: any
}
export default function RouteToAdmin ({path, children}: routeInterface) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    return (
        <Route path={path}>
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <NavigationBar drawMenuAction={()=> { setOpen(!open) }} appBar={classes.appBar} />
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        classes={{
                          paper: classes.drawerPaper,
                        }}
                        open={open}
                        >
                            <Toolbar />
                        </Drawer>
                        <div style={{padding: 10}} className={clsx(classes.content, {
                          [classes.contentShift]: open,
                        })}>
                          {children}
                        </div>
                </ThemeProvider>
            </React.Fragment>
        </Route>
    )
}