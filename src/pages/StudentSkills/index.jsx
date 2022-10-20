import './styles.css'
import {
    FormLabel,
    FormControlLabel,
    FormGroup,
    Checkbox,
    Button
} from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';
import { SideBlue } from '../../components/SideBlue';

export const StudentSkills = () => {
    return(
        <div className="student-skills-container">

            <div className="side-blue">
                <SideBlue/>
            </div> 
            
            <div className="register">
                <form action="#" id='skills-form'>
                    <div className="register-header">
                        <div className="back-button">
                            <AiOutlineLeft/>
                            <a href="StudentForms">Voltar</a>
                        </div>
                        <div className="title">
                            <h1>Cadastro</h1>
                            <h2>Hardskills e Softskills</h2>
                        </div>
                    </div>
                    <div className="skill-group">
                        <div className="hard-skills">

                            <FormLabel id="question-label">Você tem alguma experiência com alguma das tecnologias abaixo? Selecione as três que mais se identifica.</FormLabel>

                            <div className="checkbox-group-area">
                                <div className="checkbox-group">
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox />} label="HTML5" />
                                        <FormControlLabel control={<Checkbox />} label="CSS3" />
                                        <FormControlLabel control={<Checkbox />} label="JAVASCRIPT" />
                                        <FormControlLabel control={<Checkbox />} label=".NET" />
                                        <FormControlLabel control={<Checkbox />} label="PYTHON" />
                                    </FormGroup>
                                </div>
                                <div className="checkbox-group">
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox />} label="NODE" />
                                        <FormControlLabel control={<Checkbox />} label="PHP" />
                                        <FormControlLabel control={<Checkbox />} label="TYPESCRIPT" />
                                        <FormControlLabel control={<Checkbox />} label="DEVOPS" />
                                        <FormControlLabel control={<Checkbox />} label="AWS" />
                                    </FormGroup>
                                </div>

                                <div className="checkbox-group">
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox />} label="C" />
                                        <FormControlLabel control={<Checkbox />} label="C++" />
                                        <FormControlLabel control={<Checkbox />} label="LARAVEL" />
                                        <FormControlLabel control={<Checkbox />} label="SCRUM" />
                                        <FormControlLabel control={<Checkbox />} label="SPRINGBOOT" />
                                    </FormGroup>
                                </div>

                                <div className="checkbox-group">
                                    <FormGroup >
                                        <FormControlLabel control={<Checkbox />} label="JAVA" />
                                        <FormControlLabel control={<Checkbox />} label="SQL" />
                                        <FormControlLabel control={<Checkbox />} label="MONGODB" />
                                        <FormControlLabel control={<Checkbox />} label="R" />
                                        <FormControlLabel control={<Checkbox />} label="MACHINE LEARNING" />
                                    </FormGroup>
                                </div>
                                
                            </div>                                
                            
                            <div className="checkbox-outro">
                                <FormGroup >
                                    <FormControlLabel control={<Checkbox />} label="OUTRO" />
                                </FormGroup>
                            </div>

                        </div>

                        <div className="soft-skills">
                            <FormLabel id="question-label">Você tem alguma experiência com alguma das habilidades abaixo? Selecione as três que mais se identifica.</FormLabel>

                            <div className="checkbox-group-area">

                                <div className="checkbox-group">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox/>} label="COMUNICAÇÃO"/>
                                        <FormControlLabel control={<Checkbox/>} label="SOB PRESSÃO"/>
                                        <FormControlLabel control={<Checkbox/>} label="ÉTICA"/>
                                    </FormGroup>
                                </div>

                                <div className="checkbox-group">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox/>} label="GERENCIAMENTO"/>
                                        <FormControlLabel control={<Checkbox/>} label="LIDERANÇA"/>
                                        <FormControlLabel control={<Checkbox/>} label="ORGANIZAÇÃO"/>
                                    </FormGroup>
                                </div>

                                <div className="checkbox-group">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox/>} label="RESILIÊNCIA"/>
                                        <FormControlLabel control={<Checkbox/>} label="NEGOCIAÇÃO"/>
                                        <FormControlLabel control={<Checkbox/>} label="EMPATIA"/>
                                    </FormGroup>
                                </div>

                                <div className="checkbox-group">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox/>} label="CRIATIVIDADE"/>
                                        <FormControlLabel control={<Checkbox/>} label="TRABALHO EM EQUIPE"/>
                                        <FormControlLabel control={<Checkbox/>} label="FLEXIBILIDADE"/>
                                    </FormGroup>
                                </div>

                            </div>

                            <div className="checkbox-outro">
                                <FormGroup >
                                    <FormControlLabel control={<Checkbox />} label="OUTRO" />
                                </FormGroup>
                            </div>

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
                            >
                                Enviar
                            </Button>
                        </div>

                    </div>
                </form>
            </div>
          
        </div>
    )
}