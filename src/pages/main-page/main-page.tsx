import photo from '../../assets/hf.jpg';
import styles from './main-page.module.scss'
import AboutInfo from '../../components/main/AboutInfo'
import Benefits from '../../components/main/Benefits'

export default function MainPage () {
    return (
       <div>
       <AboutInfo/>
       <Benefits/>
       {/* <Slides/> */}
       </div>
    )
}