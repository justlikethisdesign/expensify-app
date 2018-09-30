import { createStore, combineReducers } from 'redux';

// Expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startdate: undefined,
    endDate: undefined,
};

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

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
