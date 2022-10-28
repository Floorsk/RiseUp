import './styles.css'
import { Button } from '@mui/material'

// icons import
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineApartment, AiOutlineCalendar } from "react-icons/ai";
import { BsCalendarWeek} from "react-icons/bs";
import { FaRegHandshake} from "react-icons/fa";
import { FiBriefcase, FiAward } from "react-icons/fi";
import { TwitterSquareFilled, FacebookFilled, LinkedinFilled } from "@ant-design/icons";

export const Maintenance = () => {
    return (
        <div className='home-container'>
            <h1>Inscrições fechadas!</h1>
            <img src="https://i.imgur.com/g66yvph.gif"></img>
        </div>
    )
}