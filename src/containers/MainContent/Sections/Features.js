import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Features extends Component{

    render(){
        return(
            <AUX>
            <section className="section" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="title-icon pt-5">
                                <i className="mdi mdi-note-multiple-outline"></i>
                            </div>
                            <h3 className="section-title pt-5">How It Works?</h3>
                            <p className="section-subtitle text-dark pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/service-1.png" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-eye text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>Proove</h5>
                                    <p className="pt-2">In order to prove the timestamp of your document independently we will provide you with the proof path through the merkle tree as well as the Blockchain transaction as a proof of record.</p>
                                    <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-chart-bubble text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>Write</h5>
                                    <p className="pt-2">On a regular basis we group multiple fingerprints into a merkle tree. The root hash of that tree will then be written to the Metaverse Blockchain.</p>
                                    <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-4">
                            <img src="images/service-2.png" alt="" className="img-fluid rounded" />
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/service-3.png" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-fingerprint text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>Record</h5>
                                    <p className="pt-2">We calculate a fingerprint (hash) of your document. This fingerprint will be added to our processing queue. Optionally we will store your document as well as its meta data on a cloud storage. </p>
                                    <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link>
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

export default Features;
