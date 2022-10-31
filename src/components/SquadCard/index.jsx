import './styles.css'
import { useState } from 'react'

export const SquadCard = () => {

    const cardItem = {
        company: ["Microsoft Inc", "Disney Inc", "Porto  Digital", "Cesar", "Avanade", "Accenture"],
        inst: ["UNICAP", "UNIT", "SENAC", "IFPE"],
        hour: ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"]
    }

    const [empresa, setEmpresa] = useState(cardItem.company[Math.floor(Math.random() * cardItem.company.length)]);

    const [instituicao, setInstituicao] = useState(cardItem.inst[Math.floor(Math.random() * cardItem.inst.length)]);

    const [squad, setSquad] = useState(Math.floor(Math.random() * 10));

    const [horario, setHorario] = useState(cardItem.hour[Math.floor(Math.random() * cardItem.hour.length)]);
       
    return(
        <div className="squad-card">
            <h3>{empresa}</h3>
            <p className="squad-name">Squad 0{squad}</p>
            <p className="inst-name">{instituicao}</p>
            <p className="hour">{horario}</p>
        </div>
    )
}
