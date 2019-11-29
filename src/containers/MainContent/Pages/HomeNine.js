import React , {Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Counter from '../Sections/Counter';
import Pricing from '../Sections/Pricing';
import Client from '../Sections/Client';
import Faq from '../Sections/Faq';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import Modal from "react-responsive-modal";

class HomeNine extends Component{

    state = {
        open: false
      };

      onOpenModal = () => {
        this.setState({ open: true });
      };

      onCloseModal = () => {
        this.setState({ open: false });
      };

    componentDidMount() {
        if(this.props.islight === false)
        {
          this.props.UpdateLight();
        }
       }

    render(){

        const { open } = this.state;

        var mystyle1 = {
            opacity : "0.8"
        }
        var modal_style = {
            backgroundColor: "black"
        }

        return(
            <AUX>

           <Modal open={open} style={modal_style}  onClose={this.onCloseModal} center>
          <video  width={550} height={230} style={mystyle1} autoPlay  muted loop>
            <source   src="http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"   type="video/mp4" />
            </video>
        </Modal>

                <section className="home-bg-color" id="home">
                    <div className="container">
                        <div className="">
                           <img src="" width="200" alt="" className="img-fluid center-block home-dashboard" />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center ">
                               <div className="banner-img">
                                 <img src="images/banner-logo.png" alt="" className="img-fluid center-block home-dashboard mb-3" />
                                </div>
                                <h2 className="mt-5 ml-6 pt-5 mx-20 home-title">ProveIt works with accredited professional notaries, institutional partners and jurisdictional legislatures to record and prove the existence, substance, and property of a claim.</h2>

                                <div className="mt-5">
                                    <Link to="#features" className="btn btn-custom">Know More</Link>
                                </div>
                                 <div className="">
                                    <img src="images/macbook.png" alt="" className="img-fluid center-block home-dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            <Features />
            <Counter />
            <Services />
            <Pricing />
            <Client />
            <Faq />
        </AUX>
        );
    }
}



const mapStatetoProps = state => {
    return {
        islight: state.ui_red.islight
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLight: () => dispatch({ type: actionTypes.ISLIGHT, value: true })
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeNine);
