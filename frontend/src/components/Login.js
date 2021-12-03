import React from 'react';
import {useHistory} from 'react-router-dom';

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
    // uncomment the rest when backend is implemented
    /* fetch('/authenticate', {
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
        */
    history.push('/');
    /*
      })
      .catch((err) => {
        console.log(err);
        alert('Error logging in, please try again');
      });*/
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 id='welcome'>Facebook Account Login</h2>
      <input
        type="email"
        name="email"
        placeholder="EMail"
        onChange={handleInputChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
        required
      />
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default Login;
