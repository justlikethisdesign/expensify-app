import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is the dashboard
    </div>
);

const AddExpensePage = () => (
    <div>
        Create an expnence
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit
    </div>
);

const HelpPage = () => (
    <div>
        Help
    </div>
);

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/help">Help</Link>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById('app') );
