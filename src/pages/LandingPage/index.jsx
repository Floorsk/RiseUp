import './styles.css'
import { Button } from '@mui/material'

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
                                >
                                    empresa
                                </Button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="info-images">
                        <img src="" />
                    </div>

                </div>
                <div className="numbers">
                    <div className="numbers-text">
                        <h4>Confira nossos números e participe você também</h4>
                    </div>
                    <div className="numbers-stud">
                        {/* stud: students */}
                        <h2>+2500</h2>
                        <p>Estudantes inscritos</p>
                    </div>
                    <div className="numbers-comp">
                        {/* comp: companies */}
                        <h2>+60</h2>
                        <p>Empresas parceiras</p>
                    </div>
                    <div className="numbers-uni">
                        {/* u: universities */}
                        <h2>+12</h2>
                        <p>Instituições de esnsino superior</p>
                    </div>
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