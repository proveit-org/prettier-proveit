import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class HeaderLight extends Component{

    componentDidMount() {
        $('.navbar-toggle').on('click', function(event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        $('.navigation-menu>li').slice(-2).addClass('last-elements');

        $('.menu-arrow,.submenu-arrow').on('click', function(e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    }


    render(){
        return(
            <AUX>
        <header id="topnav" className="defaultscroll topnav-light sticky fixed-top">
        <div className="container">
        <div>
            <Link to="#" className="logo">
                <img src="images/logo-h.png" alt="" width ="160" className="img-fluid" />
            </Link>
        </div>
        <div className="menu-extras">
            <div className="menu-item">
                <Link to="#" className="navbar-toggle">
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
        </div>

        <div id="navigation">
            <ul className="navigation-menu ">
                <li className="has-submenu">
                    <a href="#contact">Newsletter</a>
                </li>
                <li className="has-submenu">
                    <a href="#faq">FAQ</a>
                </li>
                <li className="has-submenu">
                    <a href="#team">Who Are We?</a>
                </li>

                <li className="has-submenu ">
                    <a href="#features">What Is ProveIt?</a>
                </li>
                <li className="has-submenu">
                    <a href="#">Verify</a>
                </li>
                <li className="has-submenu ">
                    <a href="#">Create</a>
                </li>

            </ul>

        </div>
    </div>
</header>
            </AUX>
        );
    }
}

export default HeaderLight;
