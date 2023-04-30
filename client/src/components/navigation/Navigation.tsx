import {Link} from "react-router-dom";
import styles from './styles.module.scss'
const Navigation = () => {
    return(
        <ul className={styles.main_navigation}>
            <li>
                <Link to="/profile">My profile</Link>
            </li>
            <li>
                <Link to="/">Game sessions</Link>
            </li>
            <li>
                <Link to="/userSessions">My game sessions</Link>
            </li>
        </ul>
    )
}

export default Navigation