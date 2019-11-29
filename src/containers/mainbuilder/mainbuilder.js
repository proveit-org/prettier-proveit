import React , { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import HomeNine from '../MainContent/Pages/HomeNine';


class mainbuilder extends Component{
    render(){
        return(
                <Switch>
                    <Route exact path="/" component={HomeNine} />
                </Switch>
        );
    }
}

export default mainbuilder;
