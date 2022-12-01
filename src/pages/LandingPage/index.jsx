import './styles.css'
import { Button } from '@mui/material'
import { useContext, useState } from 'react';
import { RegisterContext } from '../../contexts/RegisterContext';

// icons import
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineApartment, AiOutlineCalendar } from "react-icons/ai";
import { BsCalendarWeek} from "react-icons/bs";
import { FaRegHandshake} from "react-icons/fa";
import { FiBriefcase, FiAward } from "react-icons/fi";
import { TwitterSquareFilled, FacebookFilled, LinkedinFilled } from "@ant-design/icons";


// images import
import info from './imgs/png/welcome.png'
import students from './imgs/jpg/student.jpg'
import companies from './imgs/jpg/company.jpg'
import details from './imgs/jpg/details.jpg'
import rogerio from './imgs/png/rogerio.png'
import marco from './imgs/png/marco.png'
import flavia from './imgs/png/flavia.png'


export const LandingPage = () => {

    /* Recebendo valor da página de manuntenção com os resultados do swtich */

    const [linkValue, setLinkValue] = useState("");

    const {recieveStuLink} = useContext(RegisterContext);

    /* setLinkValue(recieveStuLink.value); */

    return (
        <div className='home-container'>
            <div className="presentation">
                <div className="info-section">

                    <div className="info-area">
                        
                        <div className="info-text">
                            <h1>Residência Onboard</h1>
                            <h2>A maior residência em Software do Norte e Nordeste. O Onboard é uma iniciativa do Porto Digital em parceria com instituições de ensino superior, conectando jovens talentos à grandes empresas.</h2>
                            
                        </div>

                        <div className="info-button">
                            <p>Faça como mais de 2000 participantes e conheça o nosso programa pedagógico</p>
                            
                            <div className="button-area">
                                <Button 
                                    variant="contained"
                                    sx={{
                                        width: '150px',
                                        height: '35px',
                                        borderRadius: '10px',
                                        fontFamily: 'Space Grotesk',
                                        fontSize: '14px',
                                        weight: '700',
                                        backgroundColor: '#fdae50'
                                    }}
                                    href="/RegisterStudent"
                                >
                                    estudante
                                </Button>
                                <Button 
                                    variant="contained"
                                    sx={{
                                        width: '150px',
                                        height: '35px',
                                        borderRadius: '10px',
                                        fontFamily: 'Space Grotesk',
                                        fontSize: '14px',
                                        weight: '700',
                                        backgroundColor: '#fdae50'
                                    }}
                                    href="/RegisterCompany"
                                >
                                    empresa
                                </Button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="info-images">
                        <img src={info} />
                    </div>

                </div>
                <div className="numbers">
                    <div className="numbers-text">
                        <h4>Confira nossos números e participe você também</h4>
                    </div>
                    
                    <div className="numbers-stud">
                        {/* stud: students */}
                        <div className="icon-i">< AiOutlineUser size={40}/></div>

                        <div className="text">
                            <h2>+2500</h2>
                            <p>Estudantes inscritos</p>
                        </div>
                    </div>

                    <div className="numbers-comp">
                        {/* c: companies */}
                        <div className="icon-i">< FiBriefcase size={40}/></div>

                        <div className="text">
                            <h2>+60</h2>
                            <p>Empresas parceiras</p>
                        </div>
                    </div>
                    
                    <div className="numbers-uni">
                        {/* u: universities */}
                        <div className="icon-i">< FiAward size={40}/></div>

                        <div className="text">
                            <h2>+12</h2>
                            <p>Instituições de ensino superior</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="advantage">
                <div className="advS">
                    <div className="advS-img"><img src={ students } /></div>
                    <div className="text-left">
                        <h3>O primeiro passo da sua carreira</h3>
                        <p>Uma experiência 100% voltada para a carreira na área de tecnologia. Aqui você tem o primeiro contato com os novos talentos e com as melhores empresas e muito mais.</p>
                    </div>
                </div>

                <div className="advC">
                    <div className="text-right">
                        <h3>A conexão que sua empresa precisa.</h3>
                        <p>Integer sit amet venenatis lorem, sit amet varius leo. Duis vitae tincidunt nibh. Etiam condimentum non augue id dignissim. Sed a ligula at tortor rhoncus facilisis. Donec ut diam volutpat, vestibulum justo </p>
                    </div>
                    <div className="advS-img"><img src={ companies } /></div>
                </div>
            </div>

            <div className="det">
                {/* details */}
                <div className="det-img"><img src={ details } /></div>
                
                <div className="det-content">
                    <div className="heading"><h3>Como funciona nossa residência de Software?</h3></div>

                    <div className="above">
                        <div className="object1">
                            <div className="icon-ii">< AiOutlineFundProjectionScreen size={35}/></div>
                            <h4>Aprendizado Direto</h4>
                            <p>Os alunos têm seu primeiro<br/>contato com as empresas<br/>ligadas ao
                            Porto Digital ainda no<br/>seu primeiro ano de faculdade.</p>
                        </div>

                        <div className="object3">
                            <div className="icon-ii">< FaRegHandshake size={40}/></div>
                            <h4>Parceria Porto Digital</h4>
                            <p>Entrando nesse programa, a<br/> empresa vira uma parceira do<br/> Porto Digital e etc<br/></p>  
                        </div>
                    </div>

                    <div className="below">
                        <div className="object2">
                            <div className="icon-ii">< BsCalendarWeek size={30}/></div>
                            <h4>Horário flexível</h4>
                            <p>Você e sua empresa escolhem os<br/>melhores horários para a mentoria <br/>com os estudantes.</p>
                        </div>

                        <div className="object4">
                            <div className="icon-ii">< AiOutlineApartment size={30}/></div>
                            <h4>Construção de Network</h4>
                            <p>Através da residência de Software,<br />estudantes e empresas trocam<br/>experiências e constroem novas.</p> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="review">
                <div className="review-head"><h2>A Residência Onboard e as empresas</h2></div>
                <div className="cards">
                    <div className="card">
                        <p> "Essa parceria universidade, ecossistema de inovação e empresas é o que vai trazer sustentabilidade para nosso ecossistema a longo prazo."</p>
                        <div className="icone"> <h3>Rogério Moreira</h3> <img src={ rogerio } /> </div>
                    </div>

                    <div className="card">
                        <p>"Oportunidade única de descobrir novos talentos, formar novos talentos. É bom para nós e bom para os alunos."</p>
                        <div className="icone"> <h3>Marco Carnut</h3> <img src={ marco } /> </div>
                    </div>

                    <div className="card">
                        <p>"Na residência Onboard, os jovens são moldados para o sucesso na área de tecnologia, e isso para as empresas é muito importante."</p>
                        <div className="icone"> <h3>Flávia<br/> Brito</h3> <img src={ flavia } /> </div>
                    </div>
                </div>
            </div>

            <div className="ask">
                <h2>Dúvidas?</h2>
                <h3>Entre em contato</h3>
            </div>

            <footer>
                <div className="sobre">
                    <ul>
                        <h3>Sobre nós</h3>
                        <p>Home</p>
                        <p>Us</p>
                        <p>About</p>
                        <p>Contact</p>
                    </ul>
                </div>

                <div className="suporte">
                    <ul>
                        <h3>Suporte</h3>
                        <p>Eleanor Edwards</p>
                        <p>Ted Robertson</p>
                        <p>Annette Russell</p>
                        <p>Jennie Mckinney</p>
                    </ul>
                </div>

                <div className="Porto">
                    <ul>
                        <h3>Porto Digital</h3>
                        <p>Philip Jones</p>
                        <p>Colleen Russell</p>
                        <p>Marvin Hawkins</p>
                        <p>Bruce Simmmons</p>
                    </ul>
                </div>

                <div className="contatos">
                    <div className="endereco">
                        <ul>
                            <p>R.do Apolo, 235 - Recife, PE, 50030-220</p>
                            <p>(81)00000-0000</p>
                        </ul>
                    </div>
                    <div className="icones">
                        <a href="https://twitter.com/porto_digital?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"  target="_blank"> <TwitterSquareFilled size={40}/> </a>
                        <a href="https://pt-br.facebook.com/portodigital/"  target="_blank"> <FacebookFilled /> </a>
                        <a href="https://br.linkedin.com/company/portodigital"  target="_blank"> <LinkedinFilled /> </a>
                    </div>
                </div>
            </footer>

        </div>
    )
}
