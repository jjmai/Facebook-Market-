import React, {useState} from 'react';
import {Button, TextField} from '@mui/material';
import styled from '@emotion/styled';
import {Global} from '@emotion/react';
import {useHistory} from 'react-router-dom';

const CreateAccountTitle = styled.h2({
  margin: 0,
  backgroundColor: '#3b5997',
  color: '#ffffff',
  textAlign: 'center',
  fontSize: 18,
  height: 50,
  lineHeight: '50px',
});

const CreateAccountContent = styled.div({
  textAlign: 'center',
  margin: '22px 20px',
});

const StepWrapper = styled.div`
  display: ${(props) => props.step ? 'flex' : 'none'};
  margin-bottom: 20px;
  justify-content: center;
`;

const CustomButton = styled(Button)({
  textTransform: 'initial',
});

/**
 * @return {object}
 */
function CreateAccount() {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [user, setUser] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const {value, name} = event.target;
    setUser({...user, [name]: value});
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!user.password) {
      return;
    }

    fetch('/v0/users', {
      method: 'POST',
      body: JSON.stringify({
        name: user.firstName + user.lastName,
        email: user.email,
        password: user.password,
      }),
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
        history.push('/login');
      })
      .catch((err) => {
        if (err.status === 403) {
          alert('Duplicate email!');
        } else {
          alert('Error create user, please try again');
        }
      });
  };

  const onNextStep = () => {
    if ((step === 0 && (!user.firstName || !user.lastName)) ||
      (step === 1 && !user.email)) {
      return;
    }
    setStep(step + 1);
  };

  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <CreateAccountTitle>Join Facebook</CreateAccountTitle>
      <CreateAccountContent>
        <h2 style={{marginBottom: 0}}>What's your name?</h2>
        <h4 style={{marginTop: 10}}>Enter the name you use in real life.</h4>
        <form onSubmit={onSubmit}>
          <StepWrapper step={step === 0}>
            <TextField
              label="First name"
              type="text"
              name="firstName"
              variant="outlined"
              size="small"
              onChange={handleInputChange}
            />
            <TextField
              style={{marginLeft: 12}}
              label="Last name"
              type="text"
              name="lastName"
              variant="outlined"
              size="small"
              onChange={handleInputChange}
            />
          </StepWrapper>
          <StepWrapper step={step === 1}>
            <TextField
              label="Email"
              type="text"
              name="email"
              variant="outlined"
              size="small"
              onChange={handleInputChange}
            />
          </StepWrapper>
          <StepWrapper step={step === 2}>
            <TextField
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              size="small"
              onChange={handleInputChange}
            />
          </StepWrapper>
          {
            step === 2 ?
              <CustomButton
                style={{width: 200}}
                type="submit"
                variant="contained"
                color="primary"
                disableElevation
                disableRipple>
                Submit
              </CustomButton> :
              <CustomButton
                style={{width: 200}}
                variant="contained"
                color="primary"
                disableElevation
                disableRipple
                onClick={onNextStep}>
                Next
              </CustomButton>
          }
        </form>
      </CreateAccountContent>
    </>
  );
}

export default CreateAccount;
