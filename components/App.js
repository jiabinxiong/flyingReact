import React from 'react';
import { BrowserRouter, Router, Route, hashHistory, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
const history = createHistory();

import Nav from '../pages/Nav';

import Home from '../pages/Home';

import PagelistDOM from '../pages/PagelistDOM';
import LoadingDOM from '../pages/LoadingDOM';
import PopDOM from '../pages/PopDOM';
import TipDOM from '../pages/TipDOM';
import CalendarDOM from '../pages/CalendarDOM';
import CheckboxDOM from '../pages/CheckboxDOM';
import HourDOM from '../pages/HourDOM';
import SelectDOM from '../pages/SelectDOM';


import page from '../less/page.less';
import iconLess from '../less/icon.less';
import pagelist from '../less/pagelist.less';

const App = () => (
    <Router history={ history }>
        <div className="flying-react-cnt">
            <Nav />              

            <div className="cnt">                
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/page" component={ PagelistDOM } />       
                    <Route path="/loading" component={ LoadingDOM } />      
                    <Route path="/pop" component={ PopDOM } /> 
                    <Route path="/tip" component={TipDOM } /> 
                    <Route path="/calendar" component={ CalendarDOM } />
                    <Route path="/checkbox" component={ CheckboxDOM } />       
                    <Route path="/select" component={ SelectDOM } />                    
                </Switch>
            </div>          
        </div>
    </Router>    
);

export default App;