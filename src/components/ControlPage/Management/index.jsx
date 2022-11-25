import './styles.css';
import { useState } from 'react';
/* import MyContext from '../../../contexts/myContext'; */
import { LateralNav } from '../../LateralNav';
import {
    FormGroup,
    FormControlLabel,
    Switch
} from '@mui/material';

export const Management = () => {

    /* Swtich Aluno */
    const [checkedStudent, setCheckedStudent] = useState(false);
    /* const [studentLink, setStudentLink] = useState("") */

    const handleChangeStudent = (event) => {
        setCheckedStudent(event.target.checked)
        /* checkedStudent ? setStudentLink("/RegisterStudent") : setStudentLink("/Maintenance") */
    }

    /* Switch Empresa */
    const [checkedCompany, setCheckedCompany] = useState(false);
    /* const [companyLink, setCompanyLink] = useState("") */

    const handleChangeCompany = (event) => {
        setCheckedCompany(event.target.checked)
        /* checkedCompany ? setCheckedCompany("/RegisterCompany") : setCheckedCompany("/Maintenance") */
    }



    return (


        <div className="management-container">
            <LateralNav />
            <div className="management-content">
                <div className="access-area">
                    <div className="access-header">
                        <h1>Liberar Ficha de Cadastro</h1>
                    </div>
                    <hr />
                    <div className="access-select">
                        <FormGroup row className='access-select-group'>
                            <FormControlLabel
                                control={<Switch />}
                                label="Aluno"
                                checked={checkedStudent}
                                onChange={handleChangeStudent}
                            />
                            <FormControlLabel
                                control={<Switch />}
                                label="Empresa"
                                checked={checkedCompany}
                                onChange={handleChangeCompany}
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </div>


    )
}
