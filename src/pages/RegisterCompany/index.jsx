import './styles.css';
import {
    TextField,
    Box,
    FormControlLabel,
    FormLabel,
    Button,
    FormGroup,
    Checkbox
} from '@mui/material';
import { useDropzone } from 'react-dropzone'
import { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { SideBlue } from '../../components/SideBlue';
import Date from '../../components/Date';

export const RegisterCompany = (props) => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));



    return (
        <div className="register-company-container">

            <div className="side-blue">
                <SideBlue />
            </div>

            <div className="register-company">
                <form action="#" id="register-form-company">
                    <div className="register-header">
                        <div className="back-button">
                            <AiOutlineLeft />
                            <a href="/">Voltar</a>
                        </div>
                        <div className="title">
                            <h1>Cadastro</h1>
                            <h2>Informações da empresa</h2>
                        </div>
                    </div>
                    <div className="input-group-company">

                        <div className="input-box-company">
                            <TextField
                                label="Nome da empresa  "
                                sx={{ width: '358px', color: '#2B2C33' }}
                            />

                        </div>

                        <div className="input-box-company">
                            <TextField
                                label="Nome do representante  "
                                sx={{ width: '358px', color: '#2B2C33' }}
                            />
                        </div>

                        <div className="input-box-company">
                            <TextField
                                label="E-mail do representante"
                                sx={{ width: '358px', color: '#2B2C33' }}
                            />
                        </div>

                        <div className="input-box-company">
                            <TextField
                                label="Repita o E-mail"
                                sx={{ width: '358px', color: '#2B2C33' }}
                            />
                        </div>

                        <div className="input-box-company">
                            <TextField
                                type="number"
                                label="Telefone do representante"
                                sx={{ width: '358px', color: '#2B2C33' }}
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            />

                        </div>

                        <h3>
                            Sabendo que o desafio proposto pode ser um projeto (ou parte
                            acessória de um projeto) que a empresa esteja executando ou
                            pretende executar, seja para uso interno ou de clientes/usuários.
                            Explique o desafio proposto? (que problema a solução vai resolver).

                        </h3>

                        <Box className="box-space"
                            sx={{
                                width: '100%',
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="" id="box-space"/>
                        </Box>

                        <h3>Faça uma breve descrição da solução esperada. Como ela deve
                            resolver o desafio?</h3>

                        <Box className="box-space"
                            sx={{
                                width: '100%',
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="" id="box-space" />
                        </Box>

                        <h3>Com quais opções de tecnologias a solução esperada mais se assemelha?</h3>


                        <div className="Form-box">

                            <FormGroup >
                                <FormControlLabel control={<Checkbox />} label="Solução web para processo de gestão interno. Por exemplo, gestão financeira,
                                     alocação de recursos, pipeline de vendas etc" />
                                <FormControlLabel control={<Checkbox />} label="Portal web para negociar e vender produtos da empresa" />
                                <FormControlLabel control={<Checkbox />} label="Painel de gerenciamento de dados e indicadores na web" />
                                <FormControlLabel control={<Checkbox />} label="Solução para interação com clientes pela web ou mobile" />
                                <FormControlLabel control={<Checkbox />} label="Outro" />

                                <Box className="box-space"
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="" id="box-space" />
                                </Box>


                            </FormGroup>
                        </div>
                        <h3>Quais referências podem ser apresentadas aos alunos para auxiliar no
                            entendimento do problema e nas possíveis soluções? Algum material
                            interno da empresa pode ser disponibilizado?</h3>
                            
                        <div className="upload-img">
                            
                             <div {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                            <img src='https://i.imgur.com/18F0qEX.png' />    
                            <p><a href="#">Clique para enviar </a> ou arraste e solte</p>
                            <p>PDF ou docx (Max. 15mb)</p></div>

                           


                                <aside>
                                    <h4>Files</h4>
                                    <ul>{files}</ul>
                                </aside>


                        </div>
                        <div className="date-picker">


                            <h3>Visando uma melhor organização, insira abaixo os horários e dias
                                das semanas que a empresa tem disponibilidade para as mentorias:</h3>
                            
                                    
                        </div>
                            <Date />
                        <div className="comment-box">
                            <h3>
                                Alguma dúvida ou sugestão?
                            </h3>

                            <Box className="box-space"
                                maxRows={4}
                                sx={{

                                    width: '50%',
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="" id="box-space" />
                            </Box>
                        </div>
                        <div className="button-advance">
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
                                href="/"
                            >
                                Enviar
                            </Button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}