import React from 'react';
import Drawer from './style/Drawer';
import ImageList from './style/ImageList';

const Navbar = () => {
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  // setMobileOpen(!mobileOpen);
  // };
  return (
    <span>
      <Drawer />
      <ImageList />
    </span>
  );
};

export default Navbar;
