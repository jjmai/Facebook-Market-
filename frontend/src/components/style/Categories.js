import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HouseIcon from '@mui/icons-material/House';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import VideocamIcon from '@mui/icons-material/Videocam';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import YardIcon from '@mui/icons-material/Yard';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BuildIcon from '@mui/icons-material/Build';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const drawerWidth = 240;
const iconArray =[<DirectionsCarIcon />, <HouseIcon />, <CheckroomIcon />,
  <LocalGasStationIcon />, <PhoneAndroidIcon />, <VideocamIcon/>,
  <FavoriteIcon/>, <LocalOfferIcon />, <YardIcon/>, <SportsBasketballIcon/>,
  <WarehouseIcon/>, <BuildIcon/>, <MapsHomeWorkIcon/>, <MusicNoteIcon/>];

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = React.useState(false);
  const [label, setLabel] = React.useState('');
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch('/v0/categories')
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
        setCategories(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const displayCategory = (text) => {
    setDisplay(true);
    setLabel(text);
  };

  const styleText ={
    fontSize: '30px',
    margin: 'auto',
    width: '0%',
  };

  return (
    <span>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{...(open && {display: 'none'})}}
        text="All Categories"
      > All Categories
        <MenuIcon />
      </IconButton>
      {display == true? <div style ={styleText}>{label}</div> : null}
      <Drawer
        sx={{
          'width': drawerWidth,
          'flexShrink': 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> :
              <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {categories.map((category, index) => (
            <ListItem button key={category.id}
                      onClick={() => displayCategory(category.name)}>
              <ListItemIcon>
                {iconArray[index]}
              </ListItemIcon>
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </span>

  );
}
