import './styles.css';
import {
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    Radio,
    Button
} from '@mui/material';
import { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { SideBlue } from '../../components/SideBlue';

export const RegisterStudent = () => {

    const [institution, setInstitution] = useState();

    const handleChangeInstitution = (event) => {
        setInstitution(event.target.value);
    };

    const [course, setCourse] = useState();

    const handleChangeCourse = (event) => {
        setCourse(event.target.value);
    };

    const [classes, setClasses] = useState();

    const handleChangeClasses = (event) => {
        setClasses(event.target.value);
    };

    return(
        <div className="register-container">

            <div className="side-blue">
                <SideBlue/>
            </div>

            <div className="register">
                <form action="#" id="register-form">
                    <div className="register-header">
                        <div className="back-button">
                            <div className="back-arrow">
                                <AiOutlineLeft/>
                            </div>
                            <a href="LandingPage">Voltar</a>
                        </div>
                        <div className="title">
                            <h1>Cadastro</h1>
                            <h2>Informações pessoais</h2>
                        </div>
                    </div> 
                    <div className="input-group">

                        <div className="input-box">
                            <TextField 
                                label="Nome"
                                sx={{width: '358px', color: '#2B2C33'}}
                            />
                            <TextField
                                label="Sobrenome"
                                sx={{width: '358px', color: '#2B2C33'}}
                            />
                        </div>
                
                        <div className="input-box">
                            <TextField
                                label="E-mail"
                                sx={{width: '358px', color: '#2B2C33'}}
                            />
                            <TextField
                                label="Repita o E-mail"
                                sx={{width: '358px', color: '#2B2C33'}}
                            />
                        </div>

                        <div className="input-box">
                            <TextField
                                label="Telefone"
                                sx={{width: '358px', color: '#2B2C33'}}
                            />
                            <TextField
                                label="C.P.F"
                                sx={{width: '358px', color: '#2B2C33'}}
                            />
                        </div>
                        
                        <div className="select-box">

                            <div className="institution">
                                <FormControl>
                                    <InputLabel id='institution-name'>Instituição</InputLabel>
                                    <Select
                                        labelId='institution-name'
                                        label='Instituição'
                                        value={institution}
                                        onChange={handleChangeInstitution}
                                        sx={{width: '185px', color: '#2B2C33'}}
                                    >
                                        <MenuItem value={1}>UNICAP</MenuItem>
                                        <MenuItem value={2}>SENAC</MenuItem>
                                        <MenuItem value={3}>IFPE</MenuItem>
                                        <MenuItem value={4}>UNIT</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="institution-info">
                                <div className="institution-info-course">
                                    <FormControl>
                                        <InputLabel id='course-name'>Curso</InputLabel>
                                        <Select
                                            labelId='course-name'
                                            label="Curso"
                                            value={course}
                                            onChange={handleChangeCourse}
                                            sx={{width: '185px', color: '#2B2C33'}}
                                        >
                                            <MenuItem value={1}>Sistemas Para Internet</MenuItem>
                                            <MenuItem value={2}>Análise e Desenvolvimento de Sistemas</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="institution-info-classes">
                                    <FormControl>
                                        <InputLabel id='classes-info'>Turma</InputLabel>
                                        <Select
                                            labelId='classes-info'
                                            label="Turma"
                                            value={classes}
                                            onChange={handleChangeClasses}
                                            sx={{width: '185px'}}
                                        >
                                            <MenuItem value={1}>SIN - 0017</MenuItem>
                                            <MenuItem value={2}>SIN - 0020</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                        </div>

                        <div className="shift">
                            <FormControl>
                                <FormLabel id="shift-group-label">Turno</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-aria-labelledby='shift-group-label'
                                        name="shift-group"
                                    >
                                        <FormControlLabel value="manha" control={<Radio/>} label="Manha"/>
                                        <FormControlLabel value="tarde" control={<Radio/>} label="Tarde"/>
                                        <FormControlLabel value="noite" control={<Radio/>} label="Noite"/>
                                    </RadioGroup>
                            </FormControl>
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
                                href=".././StudentForms"
                            >
                                Avançar
                            </Button>
                        </div>
                            
                    </div>
                </form>
            </div>
        </div>
    )
}