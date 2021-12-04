import CssBaseline from '@mui/material/CssBaseline';
import Header from './style/Header';
import Box from '@mui/material/Box';
import React, {useEffect, useState} from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageList from '@mui/material/ImageList';
import {useParams} from 'react-router';

/**
 * @return {object} JSX Table
 * @param {object} props hello
 */
function MyListings() {
  const [listings, setListings] = useState([]);
  const {userId} = useParams();

  useEffect(() => {
    fetch('/v0/listings?userId=' + userId)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
        setListings(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <CssBaseline />
      <Header />
      <ImageList style={{margin: 'auto', marginTop: 60}}>
        {listings.map((listing) => (
          <ImageListItem key={listing.listingId}>
            <img
              src={`${listing.image_link}`}
              srcSet={`${listing.image_link}`}
              alt={listing.text}
              loading="lazy"
            />
            <ImageListItemBar
              title={listing.text}
              subtitle={listing.name}
              actionIcon={
                <IconButton
                  sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                  aria-label={`info about ${listing.text}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default MyListings;
