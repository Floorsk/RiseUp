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

    const [day, setDay] = useState();

    const handleChangeDay = (event) => {
        setDay(event.target.value)
    }

    const [turma, setTurma] = useState();

    const handleChangeTurma = (event) => {
        setTurma(event.target.value)
    }


    return (
        <div className="uni-container">
            <LateralNav />
            <div className="uni-content">
                <h1>Cadastro</h1>
                <h3>Instituição</h3>

                <div className="input-group-uni">

                    <div className="input-box-uni">
                        <TextField
                            label="Nome da instituição  "
                            placeholder=''
                            sx={{ width: '358px', color: '#2B2C33' }}
                        />

                    </div>

                    <div className="input-box-uni">
                        <TextField
                            label="E-mail do representante"
                            placeholder='johndoe@example.com'
                            sx={{ width: '358px', color: '#2B2C33' }}
                        />
                    </div>

                    <div className="input-box-uni">
                        <TextField
                            label="Telefone do representante"
                            placeholder='(00)99999-9999'
                            sx={{ width: '358px', color: '#2B2C33' }}
                        />
                    </div>

                    <div className="input-box-uni">
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

                    <div className="students-amount">
                        <TextField
                            label="Quantidade de estudantes"
                            placeholder='Quantidade de estudantes'
                            type="number"
                            sx={{ width: '358px', color: '#2B2C33' }}
                        />
                    </div>

                    <div className="class-schedule">
                        <FormControl>
                            <InputLabel id="weekday-select-label">Dia da semana</InputLabel>
                            <Select
                                labelId="weekday-select-label"
                                id="weekday-select"
                                value={day}
                                label="Dia da semana"
                                onChange={handleChangeDay}
                                sx={{ width: '160px', color: '#2B2C33' }}
                            >
                                <MenuItem value={1}>Segunda</MenuItem>
                                <MenuItem value={2}>Terça</MenuItem>
                                <MenuItem value={3}>Quarta</MenuItem>
                                <MenuItem value={3}>Quinta</MenuItem>
                                <MenuItem value={3}>Sexta</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl>
                                <InputLabel id='hour'>Horário</InputLabel>
                                <Select
                                    labelId='hour-select'
                                    label="Horário"
                                    onChange={handleChangeTurma}
                                    sx={{ width: '160px', color: '#2B2C33' }}
                                >
                                    <MenuItem value={0}>18:00</MenuItem>
                                    <MenuItem value={1}>18:30</MenuItem>
                                    <MenuItem value={2}>19:00</MenuItem>
                                    <MenuItem value={3}>19:30</MenuItem>
                                    <MenuItem value={4}>20:00</MenuItem>
                                    <MenuItem value={5}>20:30</MenuItem>
                                </Select>
                            </FormControl>
                    </div>

                    <div className="register-uni-button">
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
                            Adiconar nova instituição
                        </Button>
                    </div>

                </div>
            </div>
        </div>

    )
}