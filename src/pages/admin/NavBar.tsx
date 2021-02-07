import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import BrandIcon from '../../resources/img/linear_phaxoid.svg'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     background: "#4C9A9C"
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function NavigationBar ({appBar, drawMenuAction}: any) {
    return (
      <AppBar position="relative" className={appBar}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"  
            edge="start"
            onClick={drawMenuAction}
          >
            <MenuIcon />
            </IconButton>
          <img src={BrandIcon} style={{height: 30, left: 30}} alt="brand logo" />
        </Toolbar>
      </AppBar>
    )
}