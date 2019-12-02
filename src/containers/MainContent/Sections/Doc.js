import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Counter extends Component{

    render(){
        return(
            <AUX>
             <section className="section bg-custom">
                <div className="container">
                    <div className="row justify-content-center" id="counter">
                        <div className="text-dark pt-3 pb-3">
                            <h3 className="section-title pt-5 text-center">What is ProveIT?</h3>
                            <p className="doc-text">
                              Today, in order to prove the existence of a document at a specific point in time you would be required to go to a notary, who would sign and stamp your document, and then submit it to a public registry. To prove the submission of that document you would have to return to a notary and request a letter attesting to the document’s existence in a particular registry.
                            </p>
                            <p className="doc-text">
                              Proof of Existence solves the necessity for 3rd party notarization and attestation by providing a trustless, digital interface in order to prove that a document existed in a certain state at a specific time.
                            </p>
                        </div>
                        <div className="text-white pt-3 pb-3">
                            <a to="#" className="btn btn-custom">Read Full Doc</a>
                        </div>

                    </div>
                </div>
           </section>
           </AUX>
        );
    }
}

export default Counter;
