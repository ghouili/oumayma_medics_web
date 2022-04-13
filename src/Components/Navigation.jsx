import React, {useContext, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Link, useNavigate } from 'react-router-dom';

import { HiMenuAlt2 } from 'react-icons/hi';
import { HiMenu } from 'react-icons/hi';

import { MainContext } from '../Hooks/Context/MainContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: '10px',
    width: '20vw',
    [theme.breakpoints.down('xs')]: {

      flexGrow: 1,
    }
  },

  links: {
    width: '75vw',
    display: 'flex',
    justifyContent: "space-between",
    paddingRight: "10vw",
  },
  Link: {
    textDecoration: 'none'

  },

}));

const Navigation = () => {

    const theme = useTheme();
    const classes = useStyles();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [state, setState] = useState(null)
    //sidebar:
    const { sideBarShown, setSideBarShown } = useContext(MainContext);

    const open = Boolean(anchorEl);
    // console.log(open);

    const Link_Styles= {textDecoration: 'none', color: 'white'};
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const path = async (data) => {
        navigate(data);
        return setAnchorEl(null);
    }
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {sideBarShown ?
              <HiMenu style={{ fontSize: 30}} onClick={() => setSideBarShown(!sideBarShown)}/>
            :
              <HiMenuAlt2 style={{ fontSize: 30}} onClick={() => setSideBarShown(!sideBarShown)} />
            }
            <Typography variant="h6" className={classes.title}>
              Photos
            </Typography>

            {isMobile ? 
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => path('/')}>Home</MenuItem>
                        <MenuItem onClick={() => path('/about')}>About</MenuItem>
                        <MenuItem onClick={() => path('/contact')}>Contact</MenuItem>
                        <MenuItem onClick={() => path('/')}>Home</MenuItem>
                        <MenuItem onClick={() => path('/about')}>About</MenuItem>
                        <MenuItem onClick={() => path('/contact')}>Contact</MenuItem>
                    </Menu>
                </div>
            :
                <div className={classes.links}>
                    <Link to='/' className={classes.link} style={Link_Styles} >Home</Link>
                    <Link to='/about' className={classes.link} style={Link_Styles} >About</Link>
                    <Link to='/contact' className={classes.link} style={Link_Styles} >Contact</Link>
                    <Link to='/' className={classes.link} style={Link_Styles} >Home</Link>
                    <Link to='/about' className={classes.link} style={Link_Styles} >About</Link>
                    <Link to='/contact' className={classes.link} style={Link_Styles} >Contact</Link>
                </div>
            }

        </Toolbar>
        </AppBar>
      </div>
    );
}
export default Navigation