import './styles.css';
import {
    FaHome,
    FaUserFriends,
    FaUniversity,
    FaRegBuilding,
    FaSignOutAlt,
} from 'react-icons/fa'

export const LateralNav = () => {
    return(
        <div className="lateral-container">
            <div className="lateral-nav">
                <div className="small-orange-ball-area">
                    <div className="small-orange-ball" />
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <div className="lateral-button-area">
                                <div className="icon">
                                    <FaHome size={30}/>
                                </div>
                                <a href="">Painel Inicial</a>
                            </div>
                        </li>
                        <li>
                            <div className="lateral-button-area">
                                <div className="icon">
                                    <FaUserFriends size={30}/>
                                </div>
                                <a href="">Squads</a>
                            </div>
                        </li>
                        <li>
                            <div className="lateral-button-area">
                                <div className="icon">
                                    <FaUniversity size={30}/>
                                </div>
                                <a href="">Instituições</a>
                            </div>
                        </li>
                        <li>
                            <div className="lateral-button-area">
                                <div className="icon">
                                    <FaRegBuilding size={30}/>
                                </div>
                                <a href="">Empresas</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="exit-area">
                    <div className="exit">
                        <div className="icon">
                            <FaSignOutAlt size={30}/>
                        </div>
                        <a href="">Sair</a>
                    </div>
                </div>
            </div>
        </div>
    )
}