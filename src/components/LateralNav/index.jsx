import './styles.css';
import {
    FaHome,
    FaUserFriends,
    FaUniversity,
    FaRegBuilding,
    FaSignOutAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const LateralNav = () => {
    return(
        <div className="lateral-container">
            <div className="lateral-nav">
                <div className="small-orange-ball-area">
                    <div className="small-orange-ball" />
                </div>
                <div className="nav">
                    <div className="nav-direction"/>
                    <ul>
                        <li>
                            <div className="lateral-button-area">
                                <div className="icon">
                                    <FaHome size={30}/>
                                </div>
                                <Link to="/MainPage" id='link'>Painel Inicial</Link>
                            </div>
                        </li>
                        <li>
                            <div className="lateral-button-area">
                                <div className="icon">
                                    <FaUniversity size={30}/>
                                </div>
                                <Link to="/Uni" id='link'>Instituições</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="exit-area">
                    <div className="exit">
                        <div className="icon">
                            <FaSignOutAlt size={30}/>
                        </div>
                        <Link to="/LoginPorto" id='link'>Sair</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}