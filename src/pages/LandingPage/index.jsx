import './styles.css'
import { Button } from '@mui/material'
import { AiOutlineUser } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import info from '../../images/Group150.jfif'
import students from '../../images/Group-148.jfif'
import companies from '../../images/Group-147.jfif'

export const LandingPage = () => {
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
                                        backgroundColor: '#000000'
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
                                        backgroundColor: '#000000'
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
                        <div className="icon-ii">< FiBriefcase size={40}/></div>

                        <div className="text">
                            <h2>+60</h2>
                            <p>Empresas parceiras</p>
                        </div>
                    </div>
                    
                    <div className="numbers-uni">
                        {/* u: universities */}
                        <div className="icon-iii">< FiAward size={40}/></div>

                        <div className="text">
                            <h2>+12</h2>
                            <p>Instituições de esnsino superior</p>
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

            {/* <div class="div-advantage">
                <div class="advantage-s">
                    <img src="" alt="">
                    <div class="texto">
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
                <div class="advantage-c">
                    <img src="" alt="">
                    <div class="texto">
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}