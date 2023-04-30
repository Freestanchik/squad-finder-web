import logo from '../../assets/logo.png'
import styles from './styles.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__logo}>
                    <img className={styles.logo} src={logo} alt="Squad finder web logo"/>
                    <p className={styles.app_name}>SQUAD FINDER</p>
                </div>
                <div className={styles.header__user_info}>
                    <p className={styles.user_name}>Guest</p>
                    <span className={styles.profile_icon}>
                            <FontAwesomeIcon icon={faUser}/>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;