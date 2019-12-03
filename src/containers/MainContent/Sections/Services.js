import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Services extends Component{

    render(){
        return(
            <AUX>
                <section className="section" id="services">
                    <div className="container">
                        <div className="row justify-content-center pt-3">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-all-inclusive text-custom"></i>
                                    </div>
                                    <h3 className="section-title pt-5">What is ProveIT?</h3>
                                    <p className="section-subtitle pt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="equal col-md-3">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cube-outline text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Immutable Ledger</h5>
                                        <p className="pt-2 text-muted">Fingerprints (hash) of documents get stored on the public Blockchain. We store data for future generations. So redundancy of multiple Blockchains is our key to maximise the integrity of our system.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="equal col-md-3">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-fingerprint text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Record Evidence</h5>
                                        <p className="pt-2 text-muted">Simple, intuitive interface to record evidence. Very low transaction cost guarantees easy access to everyone.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="equal col-md-3">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-marker-check text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Transparent Independent Validation</h5>
                                        <p className="pt-2 text-muted">Easily prove the authenticity of your documents and enable third parties to verify the information independently.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="equal col-md-3">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-security text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Privacy</h5>
                                        <p className="pt-2 text-muted">Your document fingerprints don’t allow recreation of your original document content. Which data you want to publish is fully in your hands.</p>
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

export default Services;
