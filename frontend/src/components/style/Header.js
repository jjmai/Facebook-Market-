import {
  Avatar, Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon, ListItemText,
  Popover,
} from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import * as React from 'react';
import styled from '@emotion/styled';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router';

const Bar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 12px 16px;
  background-color: #ffffff;
  z-index: 999;
`;


const DrawerTitle = styled.h2`
  color: #1a77f2;
  margin: 0;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CustomButton = styled(Button)({
  textTransform: 'initial',
});

/**
 * @return {object} JSX Table
 * @param {object} props hello
 */
function Header() {
  const [user, setUser] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    let storedUser = localStorage.getItem('user');
    if (storedUser) {
      storedUser = JSON.parse(storedUser);
      setUser(storedUser);
    } else if (location.pathname !== '/') {
      history.push('/');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const toNewListing = () => {
    history.push('/newListing');
  };

  const toMyListings = () => {
    history.push('/listings/' + user.id);
  };

  return (
    <Bar>
      <DrawerTitle>facebook</DrawerTitle>
      {
        user ?
          <>
            <UserWrapper onClick={handleClick}>
              <Avatar>{user.name.toUpperCase()[0]}</Avatar>
              <span style={{marginLeft: 4}}>{ user.name }</span>
            </UserWrapper>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <List>
                <ListItem disablePadding onClick={toNewListing}>
                  <ListItemButton>
                    <ListItemIcon>
                      <OpenInNewOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="New Listing" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={toMyListings}>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Listings" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={logout}>
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Popover>
          </> :
          <CustomButton
            href='/login'
            variant="contained"
            disableElevation>
            Log in
          </CustomButton>
      }
    </Bar>
  );
}

export default Header;
