import React from "react"
import {Route} from "react-router-dom"
import NavigationBar from "../pages/admin/NavBar"

import { createMuiTheme, ThemeProvider, createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';


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
    },
  }),
);

interface routeInterface {
    path?: string,
    children?: any
}
export default function RouteToAdmin ({path, children}: routeInterface) {
    const classes = useStyles();
    return (
        <Route path={path}>
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <NavigationBar appBar={classes.appBar} />
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                          paper: classes.drawerPaper,
                        }}
                        >
                            <Toolbar />
                        </Drawer>
                    {children}
                </ThemeProvider>
            </React.Fragment>
        </Route>
    )
}