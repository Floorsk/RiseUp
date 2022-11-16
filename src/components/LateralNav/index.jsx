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
                <nav>
                    <ul>
                        <li>
                            <Link className="lateral-button-area" to="/MainPage" id='link'>

                                <div className="icon">
                                    <FaHome size={30}/>
                                </div>

                                Painel Inicial

                            </Link>
                        </li>
                        <li>
                            <Link className="lateral-button-area" to="/Uni" id='link'>

                                <div className="icon">
                                    <FaUniversity size={30}/>
                                </div>

                                Instituições

                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="exit-area">
                    <Link className="exit" to="/LoginPorto" id='link'>

                        <div className="icon">
                            <FaSignOutAlt size={30}/>
                        </div>
                        Sair
                        
                    </Link>
                </div>
            </div>
        </div>
    )
}