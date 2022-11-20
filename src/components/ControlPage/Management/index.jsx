import './styles.css';
import { LateralNav } from '../../LateralNav';
import {
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox
} from '@mui/material';

export const Management = () => {
    return (
        <div className="management-container">

            <LateralNav />

            <div className="management-content">
                <div className="access-area">

                    <div className="access-header">
                        <h1>Ficha de Cadastro</h1>
                    </div>

                    <hr />

                    <div className="access-select-label">
                        <h2>Tipo de usuário: </h2>
                    </div>

                    <div className="access-select">
                        <FormGroup row className='access-select-group'>

                            <FormControlLabel
                                control={<Checkbox />}
                                label="Aluno"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                            />

                            <FormControlLabel
                                control={<Checkbox />}
                                label="Empresa"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                            />

                        </FormGroup>
                    </div>

                    <div className="access-buttom-area">
                        <Button
                            variant={"contained"}
                            sx={{
                                width: '358px',
                                height: '50px',
                                borderRadius: '10px',
                                fontFamily: 'Space Grotesk',
                                fontSize: '14px',
                                weight: '700',
                                backgroundColor: '#000000'
                            }}
                        >
                            Liberar acesso
                        </Button>
                    </div>

                </div>
            </div>

        </div>
    )
}