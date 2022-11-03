import './styles.css'
import { useState } from 'react'
import * as React from 'react';
import { 
    Box,
    Button,
    Typography,
    Modal, 
    FormControl,
    Select,
    InputLabel,
    MenuItem,

} from '@mui/material';
import { IoMdAlert } from 'react-icons/io'; 
import { StoreMallDirectorySharp } from '@mui/icons-material';

export const SquadCard = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)


    const cardItem = {
        company: ["Microsoft Inc", "Disney Inc", "Porto  Digital", "Cesar", "Avanade", "Accenture"],
        inst: ["UNICAP", "UNIT", "SENAC", "IFPE"],
        hour: ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"],
        number: [1, 2]
    }

    const [empresaNum, setEmpresaNumb] = useState(Math.floor(Math.random() * cardItem.company.length));
    const [empresa, setEmpresa] = useState(cardItem.company[empresaNum]);

    const [instNum, setInstNum] = useState(Math.floor(Math.random() * cardItem.inst.length))
    const [instituicao, setInstituicao] = useState(cardItem.inst[instNum]);
    
    const [squad, setSquad] = useState(Math.floor(Math.random() * 10));

    const [horarioNum, setHorarioNum] = useState(Math.floor(Math.random() * cardItem.hour.length))
    const [horario, setHorario] = useState(cardItem.hour[horarioNum]);

    const [num, setNum] = useState(cardItem.number[Math.floor(Math.random() * cardItem.number.length)]);


    const [squads, setSquads] = useState();
    const handleChangeSquads = (event) => {
        setSquads(event.target.value);
    };

    const [inst, setInst] = useState();
    const handleChangeInst = (event) => {
        setInst(event.target.value);
    };

    const [turma, setTurma] = useState();
    const handleChangeTurma = (event) => {
        setTurma(event.target.value);
    };

    const [day, setDay] = useState();
    const handleChangeDay = (event) => {
        setDay(event.target.value)
    }

    return(
        <div className='squad-card' onClick={() => handleOpen()}>
            <h3>{empresa}</h3>
            <p className="squad-name">Squad 0{squad}</p>
            <p className="inst-name">{instituicao}</p>
            <p className="hour">{horario}</p>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
            >
                <div className="modal-container">
                    <div className="modal-container-area">

                        <div className="modal-container-header">
                            <h1>Edição de informações</h1>
                        </div>
                        
                        <div className="modal-container-select-area">

                            <div className="error-area">
                                <div className="error-message-container">
                                    <IoMdAlert color='red'/>
                                    <p>Nenhum squad encontrado para esse horário!</p>
                                </div>
                            </div>

                            <div className="upper-area">
                                <div className="left-area">

                                    <FormControl>
                                        <InputLabel id='squad'>Squad</InputLabel>
                                        <Select
                                            defaultValue={squad}
                                            labelId='squad-select'
                                            label="Squad"
                                            value={squads}
                                            onChange={handleChangeSquads}
                                            sx={{
                                                width: '260px',
                                            }}
                                        >
                                            <MenuItem value={1}>Squad 01</MenuItem>
                                            <MenuItem value={2}>Squad 02</MenuItem>
                                            <MenuItem value={3}>Squad 03</MenuItem>
                                            <MenuItem value={4}>Squad 04</MenuItem>
                                            <MenuItem value={squad}>Squad 0{squad}</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <InputLabel id='instituicao'>Instituição</InputLabel>
                                        <Select
                                            defaultValue={instNum}
                                            labelId='inst-select'
                                            label="Instituição"
                                            value={squads}
                                            onChange={handleChangeInst}
                                            sx={{
                                                width: '260px',
                                            }}
                                        >
                                            <MenuItem value={0}>UNICAP</MenuItem>
                                            <MenuItem value={1}>SENAC</MenuItem>
                                            <MenuItem value={2}>UNIT</MenuItem>
                                            <MenuItem value={3}>IFPE</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <InputLabel id='turma'>Turma</InputLabel>
                                        <Select
                                            defaultValue={1}
                                            labelId='turma-select'
                                            label="Turma"
                                            value={squads}
                                            onChange={handleChangeTurma}
                                            sx={{
                                                width: '260px',
                                            }}
                                        >
                                            <MenuItem value={1}>Turma 01</MenuItem>
                                            <MenuItem value={2}>Turma 02</MenuItem>
                                        </Select>
                                    </FormControl>

                                </div>

                                <div className="right-area">

                                    <FormControl>
                                        <InputLabel id='empresa'>Empresa</InputLabel>
                                        <Select
                                            defaultValue={empresaNum}
                                            labelId='empresa-select'
                                            label="Empresa"
                                            value={squads}
                                            onChange={handleChangeInst}
                                            sx={{
                                                width: '260px',
                                            }}
                                        >
                                            <MenuItem value={0}>Microsoft Inc</MenuItem>
                                            <MenuItem value={1}>Disney Inc</MenuItem>
                                            <MenuItem value={2}>Porto  Digital</MenuItem>
                                            <MenuItem value={3}>Cesar</MenuItem>
                                            <MenuItem value={4}>Avanade</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <div className="desafio-area">
                                        <div className="desafio-title">
                                            <h1>Desafio</h1>
                                        </div>
                                        <div className="desafio">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat minus, possimus illo ad impedit deserunt. Ipsa error laudantium quis quibusdam neque cupiditate. Dolores quas iusto illum doloribus error praesentium aspernatur?</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="bottom-area">
                                
                            <FormControl variant="outlined">
                                <InputLabel id="weekday-select">Dia da semana</InputLabel>
                                <Select
                                    defaultValue={1}
                                    labelId="weekday-select"
                                    id="weekday-select"
                                    value={day}
                                    label="Dia da semana"
                                    onChange={handleChangeDay}
                                    sx={{
                                        width: '260px',
                                    }}
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
                                    defaultValue={horarioNum}
                                    labelId='hour-select'
                                    label="Horário"
                                    value={squads}
                                    onChange={handleChangeTurma}
                                    sx={{
                                        width: '260px',
                                    }}
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
                        </div>

                        <div className="modal-container-button-area">
                            <Button 
                                sx={{
                                    width: '152px',
                                    height: '57px',
                                    color: '#F5F5F5',
                                    backgroundColor: 'black',
                                    borderRadius: '10px',
                                    fontSize: '16px',
                                }}

                            >
                                Salvar
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}
