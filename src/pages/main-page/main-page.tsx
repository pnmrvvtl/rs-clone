import AboutInfo from '../../components/main/AboutInfo';
import Benefits from '../../components/main/Benefits';
import Instruction from '../../components/main/Instruction';
import Slider from '../../components/main/Slider';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user-context';

export default function MainPage() {
  const { user, userData } = useContext(UserContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [user, userData]);

  return (
    <div>
      <AboutInfo />
      <Benefits />
      <Instruction />
      <Slider />
    </div>
  );
}