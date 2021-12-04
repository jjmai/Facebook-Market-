import React from 'react';
import Drawer from './style/Drawer';
import ImageList from './style/ImageList';
import SearchBar from './style/Search';
import styled from '@emotion/styled';

const HomeContent = styled.div`
  padding: 12px 10px;
`;

const Navbar = () => {
  return (
    <div>
      <Drawer />
      <HomeContent>
        <SearchBar />
        <ImageList />
      </HomeContent>
    </div>
  );
};

export default Navbar;
