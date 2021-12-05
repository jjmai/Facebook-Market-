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
import FmdGood from '@mui/icons-material/FmdGood';
import ExpandCircleDownOutlinedIcon from
'@mui/icons-material/ExpandCircleDownOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {Breadcrumbs, Typography} from '@mui/material';

const SearchWrapper = styled.div`
  padding-bottom: 12px;
`;

const SearchCategory = styled.div`
  display: flex;
  margin-bottom: 15px;
  border-radius: 18px;
`;

const SearchItem = styled.div`
  display: flex;
  color: ${(prop) => prop.active ? '#1a77f2' : 'rgba(0, 0, 0, 0.87)'};
  background-color: ${(prop) => prop.active ? '#e7f3ff' : '#e4e6ea'};
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

const SearchOther = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 13px;
  padding-top: 18px;
  border-top: 1px solid #e1e1e1;
`;

const SearchOtherDistance = styled.div`
  display: flex;
  justify-content: center;
  color: #1a77f2;
`;

const CategoryDropDown = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SubCategoryWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  overflow-x: auto;
`;

const SearchOtherButton = styled.div`
  display: flex;
  align-items: center;
  background-color: #e7f3ff;
  color: #1a77f2;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
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
export default function SearchBar({
  currentCategory,
  setCurrentCategory,
  currentSubCategory,
  setCurrentSubCategory,
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [subCategories, setSubCategories] = React.useState([]);

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

  const onCategorySelect = (category) => {
    fetch(`/v0/categories/subCategories?categoryId=${category.id}`)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
        setCurrentCategory(category);
        setCurrentSubCategory(null);
        setSubCategories(json);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubCategorySelect = (category) => {
    setCurrentSubCategory(category);
  };

  return (
    <SearchWrapper>
      {
        currentCategory ?
          <div>
            <Breadcrumbs sx={{fontSize: 14}} aria-label="breadcrumb">
              <div>Marketplace</div>
              <Typography color="text.primary">
                {currentCategory.name}
              </Typography>
            </Breadcrumbs>
            <CategoryDropDown onClick={handleDrawerOpen}>
              <span style={{fontSize: 22, fontWeight: 'bold'}}>
                {currentCategory.name}
              </span>
              <ExpandCircleDownOutlinedIcon
                style={{fontSize: 20, marginLeft: 4}} />
            </CategoryDropDown>
            {
              subCategories.length > 0 &&
              <SubCategoryWrapper>
                {
                  subCategories.map((category) =>
                    <SearchItem
                      key={category.id}
                      onClick={() => onSubCategorySelect(category)}
                      active={currentSubCategory &&
                      category.id === currentSubCategory.id}
                    >
                      {category.name}
                    </SearchItem>)
                }
              </SubCategoryWrapper>
            }
          </div> :
          <SearchCategory>
            <SearchItem><Person /></SearchItem>
            <SearchItem>Sell</SearchItem>
            <SearchItem onClick={handleDrawerOpen}
              data-testid="all_category">
              All Categories
            </SearchItem>
          </SearchCategory>
      }
      <CustomInputWrapper>
        <Search />
        <CustomInput placeholder="Search Marketplace" />
      </CustomInputWrapper>
      <SearchOther>
        {
          currentCategory ?
            <div style={{display: 'flex'}}>
              <SearchOtherButton style={{marginRight: 10}}>
                <FmdGood style={{marginRight: 5}}/>
                <span>Santa Cruz · 40 mi</span>
              </SearchOtherButton>
              <SearchOtherButton>
                <FilterAltOutlinedIcon style={{marginRight: 5}}/>
                <span>Filters</span>
              </SearchOtherButton>
            </div>:
            <>
              <h3 style={{margin: 0}}>Today's picks</h3>
              <SearchOtherDistance>
                <FmdGood />
                <span>Santa Cruz · 40 mi</span>
              </SearchOtherDistance>
            </>
        }
      </SearchOther>
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
        data-testid="drawer"
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> :
              <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List data-testid="category_list">
          {categories.map((category, index) => (
            <ListItem button key={category.id}
              onClick={() => onCategorySelect(category)}>
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
