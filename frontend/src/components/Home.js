import React from 'react';
import Drawer from './style/Drawer';
import ImageList from './style/ImageList';
import SearchBar from './style/Search';
import Categories from './style/Categories';

const Navbar = () => {
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  // setMobileOpen(!mobileOpen);
  // };
  return (
    <div>
      <span>
        <Drawer />
        <SearchBar />
        <Categories />
        <ImageList />
      </span>
    </div>
  );
};

export default Navbar;
