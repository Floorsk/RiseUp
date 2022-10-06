import './styles.css';
import {
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
    FormControl,
    TextField,
    Button
} from '@mui/material';
import { SideBlue } from '../../components/SideBlue';
import { AiOutlineLeft } from 'react-icons/ai';

export const StudentForms = () => {
    return(
        <div className="student-forms-container">

            <div className="side-blue">
                <SideBlue/>
            </div>

            <div className="register">

                <form action="#" id="info-form">
                    <div className="register-header">
                        <div className="back-button">
                            <div className="back-arrow">
                                <AiOutlineLeft/>
                            </div>
                            <a href="/">Voltar</a>
                        </div>
                        <div className="title">
                            <h1>Cadastro</h1>
                            <h2>Perfil Sócioeconômico</h2>
                        </div>
                    </div>

                    <div className="jobs-area">
                        <FormControl>
                            <FormLabel id="forms-label">Você trabalha/estagia atualmente?</FormLabel>
                            <RadioGroup
                                row
                                aria-aria-aria-labelledby='jobs-area-label'
                                name='jobs-area'
                            >
                                <FormControlLabel value="sim" control={<Radio/>} label="Sim"/>
                                <FormControlLabel value="nao" control={<Radio/>} label="Não"/>
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className="jobs-location">  
                        <FormLabel id="forms-label">Se sim, onde?</FormLabel>
                        <TextField
                            sx={{width: '358px', color: '#2B2C33'}}
                        />
                    </div>

                    <div className="jobs-function">
                        <FormControl>
                            <FormLabel id="forms-label">É uma empresa de tecnologia?</FormLabel>
                            <RadioGroup
                                row
                                aria-aria-aria-labelledby='job-area-label'
                                name='job-area'   
                            >
                                <FormControlLabel value="sim" control={<Radio/>} label="Sim"/>
                                <FormControlLabel value="nao" control={<Radio/>} label="Não"/>
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className="jobs-section">
                        <FormLabel id="forms-label">Se sim, trabalha no setor de tecnologia dela?</FormLabel>
                        <RadioGroup
                            row
                            aria-aria-aria-labelledby='job-area-label'
                            name='job-area'   
                        >
                            <FormControlLabel value="sim" control={<Radio/>} label="Sim"/>
                            <FormControlLabel value="nao" control={<Radio/>} label="Não"/>
                        </RadioGroup>
                    </div>

                    <div className="jobs-hours">
                        <FormLabel id="forms-label">Em qual horário?</FormLabel>
                        <TextField
                            sx={{width: '358px', color: '#2B2C33'}}
                        />
                    </div>

                    <div className="residence-area">
                        <FormLabel id="forms-label">Você já participou da Residência Onboard?</FormLabel>

                        <RadioGroup
                            row
                            aria-aria-aria-labelledby='job-area-label'
                            name='job-area'   
                        >
                            <FormControlLabel value="sim" control={<Radio/>} label="Sim"/>
                            <FormControlLabel value="nao" control={<Radio/>} label="Não"/>
                        </RadioGroup>
                    </div>

                    <div className="button-advance">
                        <Button 
                            variant={"contained"}
                            sx={{
                                width: '210px',
                                height: '50px',
                                borderRadius: '10px',
                                fontFamily: 'Space Grotesk',
                                fontSize: '16px',
                                weight: '700',
                                backgroundColor: '#000000'
                            }}
                            href="StudentSkills"
                        >
                            Avançar
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    )
}