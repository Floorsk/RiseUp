import { LateralNav } from '../../LateralNav';
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

export const Uni = () => {
    const [course, setCourse] = useState();

    const handleChangeCourse = (event) => {
        setCourse(event.target.value);
    };


    return (
        <div className="uni-container">
            <LateralNav />
            <div className="uni-content">
                <div className="back-button">
                    <AiOutlineLeft />
                    <a href="/">Voltar</a>
                </div>
                <h1>Cadastro</h1>
                <h3>Instituição</h3>

                <div className="input-group-company">

                    <div className="input-box-company">
                        <TextField
                            label="Nome da instituição  "
                            placeholder=''
                            sx={{ width: '358px', color: '#2B2C33' }}
                        />

                    </div>

                    <div className="input-box-company">
                        <TextField
                            label="E-mail do representante"
                            placeholder='johndoe@example.com'
                            sx={{ width: '358px', color: '#2B2C33' }}
                        />
                    </div>

                    <div className="input-box-company">
                        <TextField
                            label="Telefone do representante"
                            placeholder='(00)99999-9999'
                            sx={{ width: '358px', color: '#2B2C33' }}
                        />
                    </div>

                    <div className="input-box-company">
                        <TextField
                            label="Turma"
                            sx={{ width: '358px', color: '#2B2C33' }}
                        />


                    </div>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-aria-labelledby='shift-group-label'
                            name="shift-group"
                        >
                            <FormControlLabel value="manha" control={<Radio />} label="Manha" />
                            <FormControlLabel value="tarde" control={<Radio />} label="Tarde" />
                            <FormControlLabel value="noite" control={<Radio />} label="Noite" />
                        </RadioGroup>
                    </FormControl>

                    <div className="institution-info">
                        <div className="institution-info-course">
                            <FormControl>
                                <InputLabel id='course-name'>Curso</InputLabel>
                                <Select
                                    labelId='course-name'
                                    label="Curso"
                                    value={course}
                                    onChange={handleChangeCourse}
                                    sx={{ width: '358px', color: '#2B2C33' }}
                                >
                                    <MenuItem value={1}>Sistemas Para Internet</MenuItem>
                                    <MenuItem value={2}>Análise e Desenvolvimento de Sistemas</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}