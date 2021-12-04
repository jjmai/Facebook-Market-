import * as React from 'react';
import styled from '@emotion/styled';
import {Person} from '@mui/icons-material';
import {Search} from '@mui/icons-material';
import {useTheme} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
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
import {styled as muiStyled} from '@mui/material/styles';

const SearchWrapper = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid #e1e1e1;
`;

const SearchCategory = styled.div`
  display: flex;
  margin-bottom: 15px;
  border-radius: 18px;
`;

const SearchItem = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 0.87);
  background-color: #e4e6ea;
  border-radius: 18px;
  padding: 6px 10px;
  font-weight: bold;
  margin-right: 10px;
`;

const CustomInputWrapper = styled.div`
  display: flex;
  background-color: #eff2f5;
  height: 40px;
  border-radius: 18px;
  align-items: center;
  padding: 0 10px;
  color: #5e6771;
`;

const CustomInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  height: 40px;
  font-size: 16px;
  background-color: transparent;
`;

const iconArray =[<DirectionsCarIcon />, <HouseIcon />, <CheckroomIcon />,
  <LocalGasStationIcon />, <PhoneAndroidIcon />, <VideocamIcon/>,
  <FavoriteIcon/>, <LocalOfferIcon />, <YardIcon/>, <SportsBasketballIcon/>,
  <WarehouseIcon/>, <BuildIcon/>, <MapsHomeWorkIcon/>, <MusicNoteIcon/>];

const DrawerHeader = muiStyled('div')(({theme}) => ({
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
export default function SearchBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
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

  return (
    <SearchWrapper>
      <SearchCategory>
        <SearchItem><Person /></SearchItem>
        <SearchItem>Sell</SearchItem>
        <SearchItem onClick={handleDrawerOpen}>All Categories</SearchItem>
      </SearchCategory>
      <CustomInputWrapper>
        <Search />
        <CustomInput placeholder="Search Marketplace" />
      </CustomInputWrapper>
      <Drawer
        sx={{
          'width': 240,
          'flexShrink': 0,
          '& .MuiDrawer-paper': {
            width: 240,
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
            <ListItem button key={category.id}>
              <ListItemIcon>
                {iconArray[index]}
              </ListItemIcon>
              <ListItemText primary={category.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </SearchWrapper>
  );
}
