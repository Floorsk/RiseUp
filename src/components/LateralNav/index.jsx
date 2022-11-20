import './styles.css';
import {
    FaHome,
    FaUsersCog,
    FaUniversity,
    FaRegBuilding,
    FaSignOutAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const LateralNav = () => {
    return(
        <div className="lateral-container">
            <div className="lateral-nav">
                <div className="logo-area">
                    {/* <div className="small-orange-ball" /> */}
                    <div className="img-area">
                        <a href="/Dashboard"><img src={require("../../assets/images/porto-white.png")} alt="" /></a>
                    </div>
                </div>
                <nav>
                    <ul>

                        <li>
                            <Link className="lateral-button-area" to="/MainPage" id='link'>

                                <div className="icon">
                                    <FaHome size={30}/>
                                </div>

                                <div className="button-label">Painel Inicial</div>

                            </Link>
                        </li>

                        <li>
                            <Link className="lateral-button-area" to="/Uni" id='link'>

                                <div className="icon">
                                    <FaUniversity size={30}/>
                                </div>

                                <div className="button-label">Instituições</div>

                            </Link>
                        </li>

                        <li>
                            <Link className="lateral-button-area" to="/Management" id='link'>

                                <div className="icon">
                                    <FaUsersCog size={30}/>
                                </div>

                                <div className="button-label">Gestão</div>

                            </Link>
                        </li>

                    </ul>
                </nav>
                <div className="exit-area">
                    <Link className="exit" to="/LoginPorto" id='link'>

                        <div className="icon">
                            <FaSignOutAlt size={30}/>
                        </div>
                        
                        <div className="button-label">Sair</div>
                        
                    </Link>
                </div>
            </div>
        </div>
    )
}