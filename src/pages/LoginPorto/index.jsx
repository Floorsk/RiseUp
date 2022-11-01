import './styles.css'
import { Button, TextField } from '@mui/material'
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
/* import { Link } from 'react-router-dom' */
import { SideBlue } from '../../components/SideBlue';

export const LoginPorto = () => {
    return(
        <div className="login-container">
            <div className="side-blue">
                <SideBlue />
            </div>
            
            <div className="login-area">
                <div className="login-title">
                    <h1>Login Administrativo</h1>
                </div>
                <div className="login-info">
                    <div className="user">
                        <div className="icon">
                            <AiOutlineUser
                                size={40}
                            />
                        </div>
                        <TextField 
                            label="Endereço de e-mail"
                            sx={{
                                width: '100vw'
                            }}
                        />
                    </div>
                    <div className="password">
                        <div className="icon">
                            <AiOutlineLock
                                size={40}
                            />
                        </div>
                        <TextField 
                            label="Senha"
                            sx={{
                                width: '100vw'
                            }}
                        />
                    </div>
                </div>
                <div className="button-area">
                    <Button 
                        variant={"contained"}
                        sx={{
                            height: '50px',
                            borderRadius: '5px',
                            fontFamily: 'Space Grotesk',
                            fontSize: '13px',
                            weight: '400',
                            backgroundColor: '#319AC0',
                            alignItems: 'center'
                        }}
                        href="/Dashboard"
                    >
                        {/* <Link to="/Dashboard" className="button-text">Entrar</Link> */}
                        Entrar
                    </Button>
                </div>
            </div>
        </div>
    )
}