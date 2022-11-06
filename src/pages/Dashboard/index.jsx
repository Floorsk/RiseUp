import './styles.css';
import { LateralNav } from '../../components/LateralNav'; 

export const Dashboard = () => {
    return(
        <div className="dashboard-container">
            
            <LateralNav/>

            <div className="dashboard">
                <div className="control-painel-wellcome">
                    <div className="wellcome-message">
                        <h1>BEM-VINDO AO PAINEL DE CONTROLE PORTO DIGITAL!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}