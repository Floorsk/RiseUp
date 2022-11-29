import './styles.css';
import { useState, useContext } from 'react';

import { LateralNav } from '../../LateralNav';
import {
    FormGroup,
    FormControlLabel,
    Switch
} from '@mui/material';
import { RegisterContext } from '../../../contexts/RegisterContext';

export const Management = () => {

    const {recieveStuLink, recieveComLink} = useContext(RegisterContext)

    /* Swtich Aluno */

    const [studentLocal, setStudentLocal] = useState();
    const [checkedStudent, setCheckedStudent] = useState(false);
    
    console.log(checkedStudent)

    const [studentLink, setStudentLink] = useState("/Maintenance")
    recieveStuLink(studentLink)

    const handleChangeStudent = (event) => {
        setCheckedStudent(event.target.checked)

        !checkedStudent ? setStudentLink("/RegisterStudent") : setStudentLink("/Maintenance")

    }
    

    /* Switch Empresa */
    const [checkedCompany, setCheckedCompany] = useState(false);
    console.log(checkedCompany)

    const [companyLink, setCompanyLink] = useState("/Maintenance")
    recieveComLink(companyLink)

    const handleChangeCompany = (event) => {
        setCheckedCompany(event.target.checked)
        !checkedCompany ? setCompanyLink("/RegisterCompany") : setCompanyLink("/Maintenance")
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
