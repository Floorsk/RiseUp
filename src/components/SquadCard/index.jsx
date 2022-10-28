import './styles.css'

interface Props extends SquadCard {
    company: String,
    squad: Int,
    inst: String,
    hour: Int
}

export const SquadCard = ({
    company,
    squad,
    inst,
    hour
} : Props) => {
    return(
        <div className="squad-card">
            <h3>{company}</h3>
            <p className="squad-name">Squad 0{squad}</p>
            <p className="inst-name">{inst}</p>
            <p className="hour">{hour}</p>
        </div>
    )
}