import React from 'react';
import Drawer from './style/Drawer';
import ImageList from './style/ImageList';
import SearchBar from './style/Search';
import styled from '@emotion/styled';

const HomeContent = styled.div`
  padding: 12px 10px;
`;

const Navbar = () => {
  const [currentCategory, setCurrentCategory] = React.useState();
  const [currentSubCategory, setCurrentSubCategory] = React.useState();

  return (
    <div>
      <Drawer />
      <HomeContent>
        <SearchBar
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          currentSubCategory={currentSubCategory}
          setCurrentSubCategory={setCurrentSubCategory}
        />
        <ImageList
          currentCategory={currentCategory}
          currentSubCategory={currentSubCategory}
        />
      </HomeContent>
    </div>
  );
};

export default Navbar;
