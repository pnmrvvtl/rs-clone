import * as React from 'react';
import { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from './sign-in-up.module.scss';
import {
  addCollectionAndDocument,
  createUserAuthWithEmailAndPassword,
  getCollectionAndDocuments,
  signInUserAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../helpers/firebase';
import { UserContext } from '../../context/user-context';
import firebase from 'firebase/compat';
import onLog = firebase.onLog;
import { ResultMeal } from '../../types/meals-api-types';

export default function SignInUpPage() {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [repeatRegistrationEmail, setRepeatRegistrationEmail] = useState('');
  const [registrationPassword, setRegistrationPassword] = useState('');
  const [repeatRegistrationPassword, setRepeatRegistrationPassword] = useState('');

  const { mealsByParametersResponse, favouritesMeals, userData, fitnessApiResponse } =
    useContext(UserContext);

  const handleSignInClick = async () => {
    try {
      const userCredentials = await signInUserAuthWithEmailAndPassword(signInEmail, signInPassword);
    } catch (e) {
      alert((e as Error).message);
    }
  };
  const handleSignInWithGoogleClick = async () => {
    try {
      const userCredentials = await signInWithGooglePopup();
    } catch (e) {
      alert((e as Error).message);
    }
  };
  const handleRegistrationClick = async () => {
    try {
      const userCredentials = await createUserAuthWithEmailAndPassword(
        registrationEmail,
        registrationPassword,
      );
    } catch (e) {
      alert((e as Error).message);
    }
  };

  return (
    <div className={styles.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={signInEmail}
              onChange={(event) => setSignInEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={signInPassword}
              onChange={(event) => setSignInPassword(event.target.value)}
            />
            <Button onClick={handleSignInClick} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Button onClick={handleSignInWithGoogleClick} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In with Google
            </Button>
          </Box>
        </Box>
      </Container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="repeat-email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={registrationEmail}
              onChange={(event) => setRegistrationEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Repeat Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={repeatRegistrationEmail}
              onChange={(event) => setRepeatRegistrationEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={registrationPassword}
              onChange={(event) => setRegistrationPassword(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="repeat-password"
              label="Repeat password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={repeatRegistrationPassword}
              onChange={(event) => setRepeatRegistrationPassword(event.target.value)}
            />
            <Button onClick={handleRegistrationClick} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Registration
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}