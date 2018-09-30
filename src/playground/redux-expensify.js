import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'sdfsdfdss',
        description: 'Jan Rent',
        notes: 'This is a long note for payement',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startdate: undefined,
        endDate: undefined,
    }
};
