import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Team extends Component{

    render(){
        return(
            <AUX>
                <section className="section bg-gray" id="team">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-account-circle"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Who Are We?</h3>
                                    <p className="section-subtitle pt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <h5 className="text-center font-weight-bold">Eric Gu</h5>
                                        <p className="text-center text-muted">Early crypto adopter, famous investor and advisor for blockchain projects</p>
                                        <p className="text-center mb-0  text-custom"><i className="mdi"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/Eric.jpg" alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <h5 className="text-center font-weight-bold">Christine Duhaime</h5>
                                        <p className="text-center text-muted">Lawyer in financial regulation, asset recovery, combatting financial crime, and AI</p>
                                        <p className="text-center mb-0  text-custom"><i className="mdi "></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/Christine.jpg" alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <h5 className="text-center font-weight-bold">Tal Zisckind</h5>
                                        <p className="text-center text-muted">Explorer of the Metaverse <br/> <br/>
                                        </p>
                                        <p className="text-center mb-0  text-custom"><i className="mdi "></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/tal.jpg" alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <h5 className="text-center font-weight-bold">Sven Mutzl</h5>
                                        <p className="text-center text-muted">Coffee to code processor<br/> <br/></p>
                                        <p className="text-center mb-0 text-custom"><i className="mdi"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/sven.jpg" alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <h5 className="text-center font-weight-bold">Laurent Salou</h5>
                                        <p className="text-center text-muted">Metaverse developer <br/> <br/></p>
                                        <p className="text-center mb-0 text-custom"><i className="mdi"></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/laurent.jpg" alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <h5 className="text-center font-weight-bold">Emma Hsueh</h5>
                                        <p className="text-center text-muted">Core developer and data analyst with experience in machine learning<span></span></p>
                                        <p className="text-center mb-0 text-custom"><i className="mdi "></i></p>
                                    </div>
                                    <div className="mt-4 testi-img">
                                        <img src="images/Emma.jpg" alt="" className="img-fluid rounded-circle d-block mx-auto" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
           </AUX>
        );
    }
}

export default Team;
