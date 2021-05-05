import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import PagesPromotionSearch from './promotion/search/search';
import PagesPromotionForm from './promotion/form/form';

const Root = () => {
    return(
        <Router>
            <Switch>
                <Route path="/create" component={PagesPromotionForm}/>
                <Route path="/edit/:id" component={PagesPromotionForm}/>
                <Route path="/" component={PagesPromotionSearch}/>
            </Switch>
        </Router>
    )
};

export default Root;
