import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import App from '../App';
import Login from '../Login';
import CreateAccount from '../CreateAccount';

const URL = '/v0/users';

const server = setupServer(
  rest.get(URL, (req, res, ctx) => {
    return res(ctx.json({message: 'Hello CSE183'}));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/**
 */
test('App Renders', async () => {
  render(<App />);
});

test('Login renders', async () => {
  render(<Login />);
});

test('Create Account renders', async () => {
  render(<CreateAccount />);
});

