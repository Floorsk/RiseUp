import { ReactDOM } from 'react';
import { LateralNav } from '../../LateralNav';
import { SquadCard } from '../../SquadCard'
import './styles.css';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@mui/material';
import { useState } from 'react';

export const MainPage = () => {

    const [day, setDay] = useState();

    const handleChangeDay = (event) => {
        setDay(event.target.value)
    }

    const [residence, setResidence] = useState();

    const handleChangeResidence = (event) => {
        setDay(event.target.value)
    }

    const addCard = () => {
        console.log("addign elemt")
        
    }    

    return(
        <div className="main-page-container">
            <LateralNav />
            <div className="main-content">
                <div className="header">
                    <h1>Quadro de mentorias</h1>
                </div>
                <hr />
                <div className="filter">

                    <div className="week">
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="weekday-select-label">Dia da semana</InputLabel>
                            <Select
                                labelId="weekday-select-label"
                                id="weekday-select"
                                value={day}
                                label="Dia da semana"
                                onChange={handleChangeDay}
                            >
                                <MenuItem value={1}>Segunda</MenuItem>
                                <MenuItem value={2}>Terça</MenuItem>
                                <MenuItem value={3}>Quarta</MenuItem>
                                <MenuItem value={3}>Quinta</MenuItem>
                                <MenuItem value={3}>Sexta</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="residence">
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="residence-select-label">Projeto</InputLabel>
                            <Select
                                labelId="residence-select-label"
                                id="residence-select"
                                value={residence}
                                label="Projeto"
                                onChange={handleChangeResidence}
                            >
                                <MenuItem value={1}>RiseUp</MenuItem>
                                <MenuItem value={2}>GrowUp</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="squad-generator">
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
                            onClick={() => {addCard()}}
                        >
                            Gerar Squad
                        </Button>
                    </div>

                </div>

                <div className="squads" id='squads'>
                    <SquadCard
                        company="Disney Inc"
                        squad={1}
                        inst="UNIT"
                        hour={1900}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <SquadCard
                        company="Microsoft"
                        squad={2}
                        inst="Unicap"
                        hour={1700}
                    />
                    <ul>

                    </ul>
                </div>

            </div>
        </div>
    )
}