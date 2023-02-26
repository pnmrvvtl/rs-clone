import { useContext, useEffect } from 'react';
import Slider from '../../components/main/Slider';
// context
import { UserContext } from '../../context/user-context';
// components
import AboutInfo from '../../components/main/AboutInfo';
import Benefits from '../../components/main/Benefits';
import Instruction from '../../components/main/Instruction';


export default function MainPage() {
  const { user, userData } = useContext(UserContext);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [user, userData]);

  return (
    <>
      <AboutInfo />
      <Benefits />
      <Instruction />
      <Slider />
    </>
  );
}