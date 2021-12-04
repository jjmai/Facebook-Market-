import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';
import {Button} from '@mui/material';

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

const CustomButton = styled(Button)({
  textTransform: 'initial',
});

const TopWrapper = styled.div`
  background-color: #c7b3f7;
  padding: 30px 20px;
  margin-top: 60px;
  width: 100%;
`;

const TopWrapperButton = styled(Button)`
  text-transform: initial;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.87);
  &:hover {
    background-color: #ffffff;
  }
`;

const TopWrapperActions = styled.div`
  display: flex;
  margin-top: 20px;
`;


/**
 * @return {object} JSX Table
 * @param {object} props hello
 */
function ResponsiveDrawer(props) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <CssBaseline />
      <Bar>
        <DrawerTitle>facebook</DrawerTitle>
        <CustomButton
          href='/login'
          variant="contained"
          disableElevation>
          Log in
        </CustomButton>
      </Bar>
      <TopWrapper>
        <h3 style={{margin: '0'}}>Buy and sell items locally or have
          something new shipped from stores.</h3>
        <div style={{fontSize: 14}}>
          Login in to get the full Facebook Marketplace experience.
        </div>
        <TopWrapperActions>
          <TopWrapperButton href='/login' variant="contained" disableElevation>
            Log in
          </TopWrapperButton>
          <TopWrapperButton
            style={{marginLeft: 12, flex: 1}}
            variant="contained"
            disableElevation>
            Learn more
          </TopWrapperButton>
        </TopWrapperActions>
      </TopWrapper>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
