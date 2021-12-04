import React from 'react';
import Header from './style/Header';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';

const NewTitle = styled.h2({
  textAlign: 'center',
  color: '#1a77f2',
});

const CustomButton = styled(Button)({
  textTransform: 'initial',
});

const ContentWrapper = styled.div`
  padding: 0 20px;
`;

/**
 * @return {object} JSX Table
 * @param {object} props hello
 */
function NewListing() {
  const [listing, setListing] = React.useState({
    text: '', image_link: '', category: '',
  });
  const [categories, setCategories] = React.useState([]);
  const history = useHistory();

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

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    setListing({...listing, [name]: value});
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!listing.text || !listing.image_link || !listing.category) {
      return;
    }

    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    fetch('/v0/listings', {
      method: 'POST',
      body: JSON.stringify({...listing, created_by: user.id}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
        history.push('/listings/' + user.id);
      })
      .catch((err) => {
        console.log(err);
        alert('Error create, please try again');
      });
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <CssBaseline />
      <Header />
      <>
        <NewTitle>New Listing</NewTitle>
        <ContentWrapper>
          <form onSubmit={onSubmit}>
            <TextField
              fullWidth
              label="Text"
              type="text"
              name="text"
              variant="outlined"
              onChange={handleInputChange}
            />
            <TextField
              style={{marginTop: 10, marginBottom: 10}}
              fullWidth
              label="Image URL"
              type="text"
              name="image_link"
              variant="outlined"
              onChange={handleInputChange}
            />
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={listing.category}
                name="category"
                style={{marginBottom: 15}}
                label="Category"
                onChange={handleInputChange}
              >
                {
                  categories.map((category) =>
                    <MenuItem
                      key={category.id}
                      value={category.id}>
                      {category.name}
                    </MenuItem>)
                }
              </Select>
            </FormControl>
            <CustomButton
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              disableElevation>
              Submit
            </CustomButton>
          </form>
        </ContentWrapper>
      </>
    </Box>
  );
}

export default NewListing;
