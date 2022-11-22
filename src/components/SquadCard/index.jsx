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
import { AiOutlineCloseCircle, AiOutlineDelete, AiOutlineInfo } from 'react-icons/ai'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { StoreMallDirectorySharp } from '@mui/icons-material';

interface Props extends SquadCard {
    numero: int;
}

export const SquadCard = (({
    numero
} : Props)) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    
    const cardItem = {
        company: ["Microsoft Inc", "Disney Inc", "Porto  Digital", "Cesar", "Avanade", "Accenture"],
        inst: ["UNICAP", "UNIT", "SENAC", "IFPE"],
        /* hour: ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"], */
        hour: ["18:00", "18:00", "18:00", "18:00", "18:00", "18:30", "18:30", "18:30", "18:30", "18:30", "19:00", "19:00", "19:00",  "19:30", "19:30", "19:30", "19:30", "19:30", "19:30", "20:00", "20:00", "20:00", "20:00", "20:00", "20:30", "20:30", "20:30", "20:30"],
        number: [1, 2]
    }

    const [empresaNum, setEmpresaNumb] = useState(Math.floor(Math.random() * cardItem.company.length));
    const [empresa, setEmpresa] = useState(cardItem.company[empresaNum]);

    const [instNum, setInstNum] = useState(Math.floor(Math.random() * cardItem.inst.length))
    const [instituicao, setInstituicao] = useState(cardItem.inst[instNum]);
    
    /* const [squad, setSquad] = useState(Math.floor(Math.random() * 10)); */
    const [squad, setSquad] = useState(numero + 1);

    /* const [horarioNum, setHorarioNum] = useState(Math.floor(Math.random() * cardItem.hour.length)) */
    const [horarioNum, setHorarioNum] = useState(numero)
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


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
      
    function ChildModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
        setOpen(true);
        };
        const handleClose = () => {
        setOpen(false);
        };

        return (
        <React.Fragment>
            <Button 
                variant={"contained"}
                sx={{
                    width: '152px',
                    height: '57px',
                    color: '#F5F5F5',
                    backgroundColor: 'black',
                    borderRadius: '10px',
                    fontSize: '16px',
                }}
                onClick={handleOpen}
            >
                Alunos
            </Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
            {/* width buga por conta do box */}
            <Box sx={{ ...style, width: "60%", border: '2px solid lightgrey' }} className="child-modal-container">
                <div className="child-modal-title">
                    <h2>Informação sobre Squad 9</h2>
                    <hr/>
                </div>
                <div className="child-modal-extra">
                    <div className="child-modal-add"><Button> + adicionar aluno </Button></div>
                    <div className="child-modal-message"> <InfoOutlinedIcon sx={{ fontSize:"large", p: '1px' , color: '#0288D1' }} /> 7 alunos nesse squad </div>
                    
                </div>
                <div className="table">
                    <table class="child-modal-table">
                        <thead>
                            <tr>
                                <th>Aluno</th>
                                <th>Email</th>
                                <th>Hard Skills</th>
                                <th>Soft Skills</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Athos</td>
                                <td>athos@gmail.com</td>
                                <td>React</td>
                                <td>Ambição, Foco</td>
                                <td>< AiOutlineDelete /></td>
                            </tr>
                            <tr>
                                <td>Davi</td>
                                <td>davi@gmail.com</td>
                                <td>React</td>
                                <td>Confiança, Liderança</td>
                                <td>< AiOutlineDelete /></td>
                            </tr>
                            <tr>
                                <td>Eliadja</td>
                                <td>eliadja@gmail.com</td>
                                <td>React</td>
                                <td>Adaptabilidade, Criatividade</td>
                                <td>< AiOutlineDelete /></td>
                            </tr>
                            <tr>
                                <td>Lucas</td>
                                <td>lucas@gmail.com</td>
                                <td>React</td>
                                <td>Ambição, Foco</td>
                                <td>< AiOutlineDelete /></td>
                            </tr>
                            <tr>
                                <td>Marilia</td>
                                <td>marilia@gmail.com</td>
                                <td>React</td>
                                <td>Confiança, Liderança</td>
                                <td>< AiOutlineDelete /></td>
                            </tr>
                            <tr>
                                <td>Roberto</td>
                                <td>roberto@gmail.com</td>
                                <td>React</td>
                                <td>Gerenciamento de tempo</td>
                                <td>< AiOutlineDelete /></td>
                            </tr>
                            <tr>
                                <td>Silvia</td>
                                <td>silvia@gmail.com</td>
                                <td>Node.js</td>
                                <td>Comunicação, Liderança</td>
                                <td>< AiOutlineDelete /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="child-modal-btns">
                    <div className="child-modal-save">
                        <Button
                            variant={"contained"}
                            sx={{
                                width: '148px',
                                height: '50px',
                                color: '#F5F5F5',
                                backgroundColor: 'black',
                                borderRadius: '10px',
                                fontSize: '16px',
                            }}
                            onClick={handleClose}
                        >
                            Salvar
                        </Button> 
                    </div>
                    <div className="child-modal-close">
                        <Button sx={{width: '148px',height: '45px', color: 'black'}} onClick={handleClose} >fechar</Button>
                    </div>
                </div>
            </Box>
            </Modal>
        </React.Fragment>
        );
    }

    return(
        <div className='squad-card' onClick={() => handleOpen()}>
            <h3>{empresa}</h3>
            <p className="squad-name">Squad {squad}</p>
            <p className="inst-name">{instituicao}</p>
            <p className="hour">{horario}</p>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
            >
                <div className="modal-container">
                    <div className="modal-container-area">

                        <div className="modal-container-header" >
                            <h1>Edição de informações</h1>
                        </div>

                        <hr className="row"/>
                        
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
                                            <MenuItem value={1}>Squad 2</MenuItem>
                                            <MenuItem value={2}>Squad 2</MenuItem>
                                            <MenuItem value={3}>Squad 3</MenuItem>
                                            <MenuItem value={4}>Squad 6</MenuItem>
                                            <MenuItem value={squad}>Squad {squad}</MenuItem>
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
                                            <MenuItem value={5}>Accenture</MenuItem>
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

                        <div className="modal-container-button-area" >
                            <Button 
                                variant={"contained"}
                                sx={{
                                    width: '152px',
                                    height: '57px',
                                    color: '#F5F5F5',
                                    backgroundColor: 'black',
                                    borderRadius: '10px',
                                    fontSize: '16px',
                                }}
                                onClick={() => {handleClose()}}
                            >
                                Salvar
                            </Button>

                            <ChildModal/>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
        
    )
}
