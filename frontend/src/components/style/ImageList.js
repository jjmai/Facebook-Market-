import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
export default function TitlebarImageList() {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    fetch('/v0/listings')
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
    <ImageList style={{margin: 'auto'}}>
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
            subtitle={listing.created_by}
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
  );
}
