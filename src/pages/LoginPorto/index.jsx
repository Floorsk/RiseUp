import './styles.css'
import { Button, TextField } from '@mui/material'
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'

export const LoginPorto = () => {
    return(
        <div className="login-container">
            <div className="login">
                <div className="title">
                    <h1>Painel de controle</h1>
                </div>
                <div className="login-info">
                    <div className="user">
                        <div className="icon">
                            <AiOutlineUser
                                size={40}
                            />
                        </div>
                        <TextField 
                            label="Usuário"
                            sx={{
                                width: '230px'
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
                                width: '230px'
                            }}
                        />
                    </div>
                </div>
                <div className="button-area">
                    <Button 
                        variant={"contained"}
                        sx={{
                            width: '290px',
                            height: '50px',
                            borderRadius: '5px',
                            fontFamily: 'Space Grotesk',
                            fontSize: '16px',
                            weight: '700',
                            backgroundColor: '#000000'
                        }}
                        href=".././Dashboard"
                    >
                        Entrar
                    </Button>
                </div>
            </div>
        </div>
    )
}