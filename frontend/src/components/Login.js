import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from '@emotion/styled';
import {Button, TextField} from '@mui/material';

const LoginTitle = styled.h2({
  textAlign: 'center',
  color: '#1a77f2',
});

const ForgetPassword = styled.div({
  textAlign: 'center',
  color: '#1a77f2',
  margin: '20px 30px',
});

const Division = styled.div({
  position: 'relative',
  width: '100%',
  height: 1,
  backgroundColor: '#e1e1e1',
  marginBottom: 30,
});

const DivisionText = styled.div({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 50,
  textAlign: 'center',
  backgroundColor: '#ffffff',
});

const CustomButton = styled(Button)({
  textTransform: 'initial',
});

/**
 * @return {object}
 */
function Login() {
  const [user, setUser] = React.useState({email: '', password: ''});
  const history = useHistory();

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    const u = user;
    u[name] = value;
    setUser(u);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch('/v0/users/authenticate', {
      method: 'POST',
      body: JSON.stringify(user),
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
        localStorage.setItem('user', JSON.stringify(json));
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Error logging in, please try again');
      });
  };

  const toCreateAccount = () => {
    history.push('/createAccount');
  };

  return (
    <>
      <LoginTitle>Facebook</LoginTitle>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          name="email"
          variant="outlined"
          onChange={handleInputChange}
        />
        <TextField
          style={{marginTop: 10, marginBottom: 15}}
          fullWidth
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          onChange={handleInputChange}
        />
        <CustomButton
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          disableElevation>
          Log In
        </CustomButton>
        <ForgetPassword>Forgot password?</ForgetPassword>
        <Division>
          <DivisionText>or</DivisionText>
        </Division>
        <div style={{textAlign: 'center'}}>
          <CustomButton
            variant="contained"
            color="success"
            disableElevation
            disableRipple
            onClick={toCreateAccount}>
            Create new account
          </CustomButton>
        </div>
      </form>
    </>
  );
}

export default Login;
