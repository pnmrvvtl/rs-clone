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
  createUserAuthWithEmailAndPassword,
  getFavouritesFromFirestore,
  getFitnessDataFromFirestore,
  getMealsFromFirestore,
  getUserDataFromFirestore,
  getUserStatusFromFirestore,
  setFavouriteToFirestore,
  setFitnessDataToFirestore,
  setMealsToFirestore,
  setUserDataToFirestore,
  signInUserAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../helpers/firebase';
import { UserContext } from '../../context/user-context';
import { UserData, UserStatus } from '../../types/user-data';
import { FitnessApiCollection } from '../../types/fitness-api-types';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../types/routes';

export default function SignInUpPage() {
  const [signInEmail, setSignInEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [signInPassword, setSignInPassword] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [repeatRegistrationEmail, setRepeatRegistrationEmail] = useState('');
  const [registrationPassword, setRegistrationPassword] = useState('');
  const [repeatRegistrationPassword, setRepeatRegistrationPassword] = useState('');

  const navigation = useNavigate();

  const { setUser, setUserData, setFavouritesMeals, setMealsByParametersResponse, setFitnessApiResponse } =
    useContext(UserContext);

  const handleSignInClick = async () => {
    try {
      setIsLoading(true);
      const userCredentials = await signInUserAuthWithEmailAndPassword(signInEmail, signInPassword);
      console.log(`user cred= ${userCredentials}`);
      if (userCredentials) {
        console.log('login OK');
        const user = {
          uid: userCredentials.user.uid,
          email: userCredentials.user.email ? userCredentials.user.email : '',
        };
        setUser(user);
        const userStatus = await getUserStatusFromFirestore(userCredentials.user.uid);
        console.log(userStatus);
        if (userStatus === UserStatus.OLD) {
          const favouriteMeals = await getFavouritesFromFirestore(user.uid);
          const meals = await getMealsFromFirestore(user.uid);
          const userData = await getUserDataFromFirestore(user.uid);
          const fitnessData = await getFitnessDataFromFirestore(user.uid);
          if (favouriteMeals && meals && userData && fitnessData) {
            setFavouritesMeals(favouriteMeals);
            setUserData(userData as UserData);
            setMealsByParametersResponse(meals);
            setFitnessApiResponse(fitnessData as FitnessApiCollection);
            localStorage.setItem('user-data', JSON.stringify(userData));
            localStorage.setItem('meals-data', JSON.stringify(meals));
            localStorage.setItem('bmi-data', JSON.stringify((fitnessData as FitnessApiCollection).bmi));
            localStorage.setItem(
              'calories-data',
              JSON.stringify((fitnessData as FitnessApiCollection).calories),
            );
            localStorage.setItem(
              'ideal-data',
              JSON.stringify((fitnessData as FitnessApiCollection).idealWeight),
            );
            localStorage.setItem('macros-data', JSON.stringify((fitnessData as FitnessApiCollection).macros));
            localStorage.setItem('favourites', '');
            localStorage.setItem('user', JSON.stringify(user));
            setTimeout(() => navigation(`/${Routes.RESULTS}`), 500);
            setIsLoading(false);
          } else {
            console.log('go to data collection');
            navigation(`/${Routes.DATA_COLLECTION}`);
          }
        } else {
          console.log('go to data collection');
          navigation(`/${Routes.DATA_COLLECTION}`);
        }
      }
    } catch (e) {
      setIsLoading(false);
      alert((e as Error).message);
    }
  };
  const handleSignInWithGoogleClick = async () => {
    try {
      setIsLoading(true);
      const userCredentials = await signInWithGooglePopup();
      console.log(`user cred= ${userCredentials}`);
      if (userCredentials) {
        console.log('login OK');
        const user = {
          uid: userCredentials.user.uid,
          email: userCredentials.user.email ? userCredentials.user.email : '',
        };
        setUser(user);
        const userStatus = await getUserStatusFromFirestore(userCredentials.user.uid);
        console.log(userStatus);
        if (userStatus === UserStatus.OLD) {
          const favouriteMeals = await getFavouritesFromFirestore(user.uid);
          const meals = await getMealsFromFirestore(user.uid);
          const userData = await getUserDataFromFirestore(user.uid);
          const fitnessData = await getFitnessDataFromFirestore(user.uid);
          if (favouriteMeals && meals && userData && fitnessData) {
            setFavouritesMeals(favouriteMeals);
            setUserData(userData as UserData);
            setMealsByParametersResponse(meals);
            setFitnessApiResponse(fitnessData as FitnessApiCollection);
            localStorage.setItem('user-data', JSON.stringify(userData));
            localStorage.setItem('meals-data', JSON.stringify(meals));
            localStorage.setItem('bmi-data', JSON.stringify((fitnessData as FitnessApiCollection).bmi));
            localStorage.setItem(
              'calories-data',
              JSON.stringify((fitnessData as FitnessApiCollection).calories),
            );
            localStorage.setItem(
              'ideal-data',
              JSON.stringify((fitnessData as FitnessApiCollection).idealWeight),
            );
            localStorage.setItem('macros-data', JSON.stringify((fitnessData as FitnessApiCollection).macros));
            localStorage.setItem('favourites', '');
            localStorage.setItem('user', JSON.stringify(user));
            setTimeout(() => navigation(`/${Routes.RESULTS}`), 500);
            setIsLoading(false);
          } else {
            console.log('go to data collection');
            navigation(`/${Routes.DATA_COLLECTION}`);
          }
        } else {
          console.log('go to data collection');
          navigation(`/${Routes.DATA_COLLECTION}`);
        }
      }
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
      console.log(`user cred= ${userCredentials}`);
      if (userCredentials) {
        console.log('login OK');
        const user = {
          uid: userCredentials.user.uid,
          email: userCredentials.user.email ? userCredentials.user.email : '',
        };
        setUser(user);
        console.log('go to data collection');
        navigation(`/${Routes.DATA_COLLECTION}`);
      } else {
        alert('Registration failed. Try again please');
      }
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
      {isLoading && (
        <div className={styles.loading}>
          <p>Please wait, loading your data...</p>
          <span>
            <i></i>
            <i></i>
          </span>
        </div>
      )}
    </div>
  );
}