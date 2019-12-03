import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pricing extends Component{

    render(){
        return(
            <AUX>
                <section className="section bg-light" id="pricing">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="equal col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-note-multiple-outline"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Metaverse</h3>
                                    <p className="section-subtitle pt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="equal col-lg-3">
                                <div className="price-box p-5 bg-white text-center mt-4">
                                  <div className="service-icon">
                                      <i className="mdi mdi-vector-square text-custom"></i>
                                  </div>
                                    <div className="plan-name mt-4">

                                    </div>
                                    <div className="plan-desc mt-4">
                                        <p className="mb-0 text-muted">Public blockchain with highgrade of decentralization</p>
                                    </div>

                                </div>
                            </div>
                            <div className="equal col-lg-3">
                                <div className="price-box p-5 bg-white text-center mt-4">
                                  <div className="service-icon">
                                      <i className="mdi  mdi-currency-usd text-custom"></i>
                                  </div>
                                    <div className="plan-name mt-4">
                                    </div>
                                    <div className="plan-desc mt-4">
                                        <p className="mb-0 text-muted">Expert on asset tokenization</p>
                                    </div>

                                </div>
                            </div>
                            <div className="equal col-lg-3">
                                <div className="price-box p-5 bg-white text-center mt-4">
                                  <div className="service-icon ">
                                      <i className="mdi  mdi-domain text-custom"></i>
                                  </div>
                                    <div className="plan-name mt-4">
                                    </div>
                                    <div className="plan-desc mt-4">
                                        <p className="mb-0 text-muted">Blockchain as a Services
                                          solution</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="price-box p-5 bg-white text-center mt-4">
                                  <div className="service-icon">
                                      <i className="mdi mdi-folder-lock-open text-custom"></i>
                                  </div>
                                    <div className="plan-name mt-4">
                                    </div>
                                    <div className="plan-desc mt-4">
                                        <p className="mb-0 text-muted">Open Source development
                                          community</p>
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

export default Pricing;
