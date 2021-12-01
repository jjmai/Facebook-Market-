import React from 'react';
import Drawer from './style/Drawer';
import ImageList from './style/ImageList';
import SearchBar from './style/Search';

const Navbar = () => {
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  // setMobileOpen(!mobileOpen);
  // };
  return (
    <span>
      <Drawer />
      <SearchBar />
      <ImageList />
    </span>
  );
};

export default Navbar;
